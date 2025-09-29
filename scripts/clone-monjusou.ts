// scripts/clone-monjusou.ts
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");
const pLimit = require("p-limit");

const ORIGIN = "https://www.monjusou.com";
const OUT_DIR = path.join(process.cwd(), "public/_monju");

function ensureDir(p: string) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function toLocalPath(url: string) {
  const u = new URL(url, ORIGIN);
  let pathname = u.pathname;
  if (pathname.endsWith("/")) pathname += "index.html";
  return path.join(OUT_DIR, pathname);
}

function rewrite(u: string | undefined) {
  if (!u) return u;
  const abs = new URL(u, ORIGIN).href;
  if (!abs.startsWith(ORIGIN)) return u; // 他ドメインは触らない
  return abs.replace(ORIGIN, "/_monju");
}

async function fetchBin(url: string) {
  const res = await axios.get(url, {
    responseType: "arraybuffer",
    timeout: 20000,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  return Buffer.from(res.data);
}

async function save(url: string) {
  console.log(`Downloading: ${url}`);
  const out = toLocalPath(url);
  ensureDir(path.dirname(out));
  const bin = await fetchBin(url);
  fs.writeFileSync(out, bin);
}

async function run() {
  ensureDir(OUT_DIR);

  console.log("🚀 Starting monjusou.com clone...");

  // 1) HTML 取得
  console.log("📄 Fetching HTML...");
  const res = await axios.get(ORIGIN, {
    timeout: 20000,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  const $ = cheerio.load(res.data);

  // 2) 資産 URL 収集
  console.log("🔍 Collecting asset URLs...");
  const urls = new Set<string>();

  $("link[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (href) urls.add(new URL(href, ORIGIN).href);
  });

  $("script[src]").each((_, el) => {
    const src = $(el).attr("src");
    if (src) urls.add(new URL(src, ORIGIN).href);
  });

  $("img[src]").each((_, el) => {
    const src = $(el).attr("src");
    if (src) urls.add(new URL(src, ORIGIN).href);
  });

  $("[srcset]").each((_, el) => {
    const srcset = $(el).attr("srcset") || "";
    const raw = srcset.split(",").map(s => s.trim().split(" ")[0]).filter(Boolean);
    raw.forEach(s => {
      try {
        urls.add(new URL(s, ORIGIN).href);
      } catch { /* skip invalid URLs */ }
    });
  });

  $("video[poster]").each((_, el) => {
    const poster = $(el).attr("poster");
    if (poster) urls.add(new URL(poster, ORIGIN).href);
  });

  // CSS内の背景画像やフォントも収集
  $("style").each((_, el) => {
    const css = $(el).html() || "";
    const urlMatches = css.match(/url\(['"]?([^'")]+)['"]?\)/g);
    if (urlMatches) {
      urlMatches.forEach(match => {
        const url = match.replace(/url\(['"]?/, '').replace(/['"]?\)$/, '');
        try {
          urls.add(new URL(url, ORIGIN).href);
        } catch { /* skip invalid URLs */ }
      });
    }
  });

  const assetUrls = [...urls].filter(u => u.startsWith(ORIGIN));
  console.log(`📦 Found ${assetUrls.length} assets to download`);

  // 3) 並列ダウンロード
  console.log("⬇️ Downloading assets...");
  const limit = pLimit(8);
  let downloaded = 0;

  await Promise.all(assetUrls.map(u => limit(async () => {
    try {
      await save(u);
      downloaded++;
      if (downloaded % 10 === 0) {
        console.log(`   Progress: ${downloaded}/${assetUrls.length}`);
      }
    } catch (err) {
      console.warn(`   Failed to download: ${u}`);
    }
  })));

  console.log(`✅ Downloaded ${downloaded}/${assetUrls.length} assets`);

  // 4) HTML 内の URL 書き換え
  console.log("🔄 Rewriting URLs in HTML...");

  $("a[href]").each((_, el) => $(el).attr("href", rewrite($(el).attr("href"))));
  $("link[href]").each((_, el) => $(el).attr("href", rewrite($(el).attr("href"))));
  $("script[src]").each((_, el) => $(el).attr("src", rewrite($(el).attr("src"))));
  $("img[src]").each((_, el) => $(el).attr("src", rewrite($(el).attr("src"))));

  $("[srcset]").each((_, el) => {
    const raw = $(el).attr("srcset") || "";
    const next = raw.split(",").map(s => {
      const parts = s.trim().split(/\s+/);
      const url = parts[0];
      const descriptor = parts.slice(1).join(" ");
      return `${rewrite(url)}${descriptor ? " " + descriptor : ""}`;
    }).join(", ");
    $(el).attr("srcset", next);
  });

  $("video[poster]").each((_, el) => $(el).attr("poster", rewrite($(el).attr("poster"))));

  // CSS内のURLも書き換え
  $("style").each((_, el) => {
    let css = $(el).html() || "";
    css = css.replace(/url\(['"]?([^'")]+)['"]?\)/g, (match, url) => {
      const rewritten = rewrite(url);
      return `url('${rewritten}')`;
    });
    $(el).html(css);
  });

  // 5) 出力
  const finalHtml = $.html();
  const outputPath = path.join(OUT_DIR, "index.html");
  fs.writeFileSync(outputPath, finalHtml, "utf-8");

  console.log("🎉 Clone completed!");
  console.log(`📁 Saved: ${outputPath}`);
  console.log(`📂 Assets: ${OUT_DIR}`);
}

run().catch(e => {
  console.error("❌ Error:", e.message);
  process.exit(1);
});