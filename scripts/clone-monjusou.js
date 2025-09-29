// scripts/clone-monjusou.js
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const ORIGIN = "https://www.monjusou.com";
const OUT_DIR = path.join(process.cwd(), "public/_monju");

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function httpGet(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;
    client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return httpGet(res.headers.location).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }

      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  ensureDir(OUT_DIR);

  console.log("🚀 Starting simple monjusou.com clone...");

  try {
    // HTML取得
    console.log("📄 Fetching HTML...");
    const htmlBuffer = await httpGet(ORIGIN);
    let html = htmlBuffer.toString('utf-8');

    // 基本的なURL書き換え（簡易版）
    console.log("🔄 Rewriting URLs...");

    // 相対パスを絶対パスに変換してから/_monju/に書き換え
    html = html.replace(/href="\/([^"]*?)"/g, 'href="/_monju/$1"');
    html = html.replace(/src="\/([^"]*?)"/g, 'src="/_monju/$1"');
    html = html.replace(/url\(\/([^)]*?)\)/g, 'url(/_monju/$1)');

    // 絶対URLも書き換え
    html = html.replace(new RegExp(ORIGIN.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '/_monju');

    // HTML出力
    const outputPath = path.join(OUT_DIR, "index.html");
    fs.writeFileSync(outputPath, html, "utf-8");

    // プレースホルダーファイル作成（CSS/JS用）
    const placeholderDirs = ['css', 'js', 'images', 'assets'];
    placeholderDirs.forEach(dir => {
      const dirPath = path.join(OUT_DIR, dir);
      ensureDir(dirPath);
      fs.writeFileSync(path.join(dirPath, '.gitkeep'), '');
    });

    console.log("🎉 Basic clone completed!");
    console.log(`📁 Saved: ${outputPath}`);
    console.log("⚠️  Note: This is a simplified version. Some assets may need manual adjustment.");

  } catch (error) {
    console.error("❌ Error:", error.message);

    // フォールバック：プレースホルダーHTML作成
    console.log("🔄 Creating fallback placeholder...");
    const fallbackHtml = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monjusou - 元湯の宿</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 0; }
        .hero { background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200') center/cover; height: 100vh; display: flex; align-items: center; justify-content: center; color: white; text-align: center; }
        .hero h1 { font-size: 3rem; margin: 0; font-weight: 300; }
        .hero p { font-size: 1.2rem; margin: 1rem 0; }
        .content { padding: 4rem 2rem; max-width: 1200px; margin: 0 auto; }
        .section { margin: 4rem 0; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .card { background: #f8f9fa; padding: 2rem; border-radius: 8px; }
        .btn { display: inline-block; padding: 1rem 2rem; background: #8B4513; color: white; text-decoration: none; border-radius: 4px; margin: 1rem 0; }
    </style>
</head>
<body>
    <div class="hero">
        <div>
            <h1>元湯の宿</h1>
            <p>伝統と自然が織りなす、特別なひととき</p>
            <a href="#" class="btn">ご予約はこちら</a>
        </div>
    </div>

    <div class="content">
        <div class="section">
            <h2>おもてなし</h2>
            <div class="grid">
                <div class="card">
                    <h3>客室</h3>
                    <p>海を望む特別な客室で、ゆったりとした時間をお過ごしください。</p>
                </div>
                <div class="card">
                    <h3>温泉</h3>
                    <p>源泉かけ流しの温泉で、日頃の疲れを癒してください。</p>
                </div>
                <div class="card">
                    <h3>お料理</h3>
                    <p>地元の新鮮な食材を使用した、季節の会席料理をご堪能ください。</p>
                </div>
            </div>
        </div>
    </div>

    <script>
        console.log('Monjusou placeholder site loaded');
    </script>
</body>
</html>`;

    const outputPath = path.join(OUT_DIR, "index.html");
    fs.writeFileSync(outputPath, fallbackHtml, "utf-8");
    console.log(`📁 Fallback saved: ${outputPath}`);
  }
}

run();