# 🚀 Gencho Website デプロイメント設定ガイド

## 概要

このドキュメントでは、Gencho WebsiteのWordPress連携による自動デプロイシステムのセットアップ手順を説明します。

## システム構成

```mermaid
graph LR
    A[WordPress] -->|Webhook| B[GitHub API]
    B --> C[GitHub Actions]
    C -->|Build| D[Next.js]
    D -->|Deploy| E[Production Server]
```

## セットアップ手順

### STEP 1: GitHub リポジトリの準備

1. GitHubで新しいリポジトリを作成
   - リポジトリ名: `gencho-website`
   - Public/Private どちらでもOK

2. ローカルプロジェクトをプッシュ
```bash
cd gencho-website
git init
git add .
git commit -m "Initial commit with WordPress integration"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gencho-website.git
git push -u origin main
```

### STEP 2: GitHub Personal Access Token の生成

1. GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token
4. 設定:
   - Note: `Gencho Website Deploy`
   - Expiration: お好みで（No expirationも可）
   - Scopes: `repo`にチェック
5. トークンをコピー（一度しか表示されません！）

### STEP 3: GitHub Secrets の設定

リポジトリ → Settings → Secrets and variables → Actions

必須項目:
```
FTP_SERVER=ftp.example.com
FTP_USERNAME=your_ftp_username
FTP_PASSWORD=your_ftp_password
FTP_SERVER_DIR=/public_html/gencho.site/
```

オプション項目:
```
SITE_URL=https://gencho.site
WP_THEME_DIR=/public_html/gencho.site/cms/wp-content/themes/gencho-theme/
```

### STEP 4: WordPress プラグインの設定

#### 4.1 プラグインファイルの更新

`gencho-webhook-plugin.php`を編集:

```php
define('GENCHO_GITHUB_TOKEN', 'ghp_xxxxxxxxxxxxxxxxxxxxx'); // Step 2でコピーしたトークン
define('GENCHO_GITHUB_REPO_OWNER', 'YOUR_GITHUB_USERNAME');
define('GENCHO_GITHUB_REPO_NAME', 'gencho-website');
```

#### 4.2 プラグインのインストール

1. FTPまたはWordPress管理画面から`gencho-webhook-plugin.php`をアップロード
   - アップロード先: `/wp-content/plugins/gencho-auto-deploy/`
   - ファイル名は任意（推奨: gencho-auto-deploy.php）

2. WordPress管理画面でプラグインを有効化
   - プラグイン → インストール済みプラグイン
   - 「Gencho Auto Deploy」を有効化

3. 動作確認
   - ツール → 🚀 サイト自動更新
   - ステータスが「✅ 有効」になっていることを確認

### STEP 5: 初回デプロイ

#### オプション A: 手動デプロイ（推奨）

1. GitHub Actions → workflow → Deploy to Production
2. Run workflow → Run workflow

#### オプション B: WordPress からテスト

1. WordPress管理画面 → ツール → サイト自動更新
2. 「手動でデプロイを実行」をクリック

#### オプション C: コード変更でテスト

```bash
echo "# Test" >> README.md
git add README.md
git commit -m "Test auto deploy"
git push
```

## デプロイフローの詳細

### 1. WordPress記事更新時のフロー

```
1. 記事を公開/更新/削除
   ↓
2. Gencho Auto Deployプラグインが検知
   ↓
3. GitHub APIにWebhookを送信
   ↓
4. GitHub Actionsがrepository_dispatchイベントを受信
   ↓
5. Next.jsをビルド（npm run build）
   ↓
6. outディレクトリの内容をFTPでアップロード
   ↓
7. サイト更新完了
```

### 2. コード変更時のフロー

```
1. mainブランチにpush
   ↓
2. GitHub Actionsがpushイベントを受信
   ↓
3-7. 同上
```

## トラブルシューティング

### ❌ デプロイが開始されない

**確認事項:**
- GitHub Personal Access Tokenが正しいか
- リポジトリ名とオーナー名が正しいか
- WordPressプラグインが有効化されているか

**デバッグ方法:**
```php
// WordPressのwp-config.phpに追加
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```
→ `/wp-content/debug.log`を確認

### ❌ ビルドは成功するがデプロイされない

**確認事項:**
- FTP情報（Secrets）が正しいか
- サーバーディレクトリパスが正しいか
- FTPサーバーがアクセスを許可しているか

**テスト方法:**
```bash
# ローカルでFTP接続テスト
ftp ftp.example.com
# ユーザー名とパスワードを入力
```

### ❌ 404エラーが発生する

**確認事項:**
- `next.config.js`の`output: 'export'`設定
- `trailingSlash: true`設定
- サーバーの.htaccess設定

## パフォーマンス最適化

### ビルド時間の短縮

1. 不要な依存関係を削除
```bash
npm prune
```

2. キャッシュの活用（GitHub Actions自動設定済み）

### デプロイ時間の短縮

1. FTP除外設定の確認（.github/workflows/deploy.yml）
2. 大きなファイルはCDN経由で配信

## セキュリティベストプラクティス

### ⚠️ 重要な注意事項

1. **GitHub Personal Access Token**
   - 定期的に更新
   - 最小限の権限（repo）のみ付与
   - コミットに含めない

2. **FTP情報**
   - GitHub Secretsのみで管理
   - ローカルに.envファイルを作成しない

3. **WordPressプラグイン**
   - 本番環境では設定済みファイルのみ配置
   - 開発環境と本番環境で異なるトークンを使用

## よくある質問

### Q: デプロイにかかる時間は？
A: 通常5-15分程度。ページ数により変動します。

### Q: 複数の環境（開発/本番）を管理できる？
A: はい。ブランチごとに異なるワークフローを設定できます。

### Q: WordPressなしでもデプロイできる？
A: はい。GitHubへのpushだけでも自動デプロイされます。

### Q: デプロイの履歴は確認できる？
A: GitHub Actions → workflowsで全履歴を確認できます。

## サポート

問題が解決しない場合は、以下の情報と共にissueを作成してください:

1. エラーメッセージ
2. GitHub Actionsのログ
3. WordPressのデバッグログ
4. 実行した手順

---

最終更新: 2024年
バージョン: 1.0.0