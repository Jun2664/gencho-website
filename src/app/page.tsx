import fs from "fs";
import path from "path";

export const dynamic = "error";
export const revalidate = false;

function loadHtml() {
  const p = path.join(process.cwd(), "public/_monju/index.html");
  try {
    // キャッシュを無効化して最新のファイルを読み込む
    const content = fs.readFileSync(p, "utf-8");
    console.log("[Build] Loaded index.html, first 200 chars:", content.substring(0, 200));
    return content;
  } catch {
    return `<!doctype html>
<html>
<head>
  <meta charSet='utf-8'/>
  <title>Monjusou</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 2rem; text-align: center; }
    code { background: #f0f0f0; padding: 0.2rem 0.4rem; border-radius: 4px; }
    .error { color: #e11d48; margin: 2rem 0; }
    .instruction { background: #f8fafc; border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 8px; margin: 1rem 0; }
  </style>
</head>
<body>
  <h1>🏯 Monjusou Clone Setup Required</h1>
  <div class="error">
    <p><strong>ビルド前に以下のコマンドを実行してください：</strong></p>
  </div>
  <div class="instruction">
    <p>1. 依存関係をインストール:</p>
    <code>npm i axios cheerio content-type p-limit && npm i -D ts-node</code>
    <br><br>
    <p>2. monjusou.comをクロール:</p>
    <code>npm run clone:monju</code>
    <br><br>
    <p>3. 開発サーバーを再起動:</p>
    <code>npm run dev</code>
  </div>
  <p>実行後、このページに monjusou.com の完全再現が表示されます。</p>
</body>
</html>`;
  }
}

export default function Page() {
  const html = loadHtml();
  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}