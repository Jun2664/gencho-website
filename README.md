# Gencho Website

Next.js + TypeScript + Tailwind CSS + WordPress連携機能を搭載したウェブサイト

## 🚀 主要機能

### WordPress連携による自動デプロイ
- **記事投稿時**: 新規記事公開時に自動でサイト更新
- **記事更新時**: 既存記事の編集時に自動更新
- **記事削除時**: 記事削除も自動反映
- **手動デプロイ**: WordPress管理画面から手動実行可能
- **コード更新時**: GitHubへのpushでも自動デプロイ

## 📋 デプロイフロー

```
[WordPress] → [GitHub API] → [GitHub Actions] → [Next.js Build] → [Production Server]
```

### トリガーイベント
1. **WordPress記事の変更** (repository_dispatch)
2. **コード変更** (push to main)
3. **手動実行** (workflow_dispatch)

## 🛠️ セットアップ

### 1. リポジトリの準備

```bash
# リポジトリをクローン
git clone https://github.com/YOUR_USERNAME/gencho-website.git
cd gencho-website

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### 2. GitHub Secretsの設定

リポジトリの Settings → Secrets and variables → Actions で以下を設定:

- `FTP_SERVER`: FTPサーバーアドレス
- `FTP_USERNAME`: FTPユーザー名
- `FTP_PASSWORD`: FTPパスワード
- `FTP_SERVER_DIR`: デプロイ先ディレクトリ (例: /public_html/gencho.site/)
- `WP_THEME_DIR`: WordPressテーマディレクトリ (オプション)
- `SITE_URL`: サイトURL (オプション、デフォルト: https://gencho.site)

### 3. WordPressプラグインのセットアップ

#### プラグインファイルの編集

`gencho-webhook-plugin.php`を編集:

```php
// GitHub設定を更新
define('GENCHO_GITHUB_TOKEN', 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN');
define('GENCHO_GITHUB_REPO_OWNER', 'YOUR_GITHUB_USERNAME');
define('GENCHO_GITHUB_REPO_NAME', 'gencho-website');
```

#### GitHub Personal Access Tokenの生成

1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. 権限: `repo` にチェック
4. トークンをコピーして上記ファイルに設定

#### プラグインのインストール

1. `gencho-webhook-plugin.php`をWordPressの`wp-content/plugins/`にアップロード
2. WordPress管理画面でプラグインを有効化
3. ツール → 🚀 サイト自動更新 で状態確認

## 📁 プロジェクト構造

```
gencho-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions設定
├── src/
│   └── app/
│       ├── layout.tsx          # レイアウト
│       ├── page.tsx            # トップページ
│       └── globals.css         # グローバルCSS
├── gencho-webhook-plugin.php   # WordPressプラグイン
├── package.json                # 依存関係
├── next.config.js              # Next.js設定
├── tailwind.config.js          # Tailwind設定
└── tsconfig.json               # TypeScript設定
```

## 🔄 自動デプロイの確認

### デプロイ状況の確認方法

1. **GitHub Actions**: https://github.com/YOUR_USERNAME/gencho-website/actions
2. **WordPress管理画面**: ツール → サイト自動更新
3. **エラーログ**: WordPressのerror_logファイル

### デプロイ時間

- 通常5-15分程度で完了
- ビルド時間は記事数やページ数により変動

## ⚠️ 注意事項

### サイト自体の修正時の自動デプロイについて

**はい、サイト自体を修正した時も自動デプロイされます！**

- `main`ブランチへのpush時に自動的にデプロイが実行されます
- コード変更、デザイン修正、新機能追加などすべて自動反映
- GitHub Actionsの`push`トリガーにより実現

### セキュリティ

- GitHub Personal Access Tokenは絶対に公開しない
- FTP情報はGitHub Secretsで管理
- プラグインファイルはgitignoreに追加推奨

## 📝 今後の開発

このプロジェクトはWordPress連携機能の基盤のみ実装済みです。
トップページやその他のページコンテンツは今後追加してください。

## 🆘 トラブルシューティング

### デプロイが失敗する場合

1. GitHub Secretsが正しく設定されているか確認
2. FTPサーバーへの接続情報を確認
3. GitHub Actionsのログを確認
4. npm ciが成功しているか確認

### WordPressから更新が反映されない場合

1. プラグインが有効化されているか確認
2. GitHub Personal Access Tokenが正しいか確認
3. リポジトリ名・オーナー名が正しいか確認
4. WordPressのerror_logを確認

## 📄 ライセンス

ISC

## 🛠️ 修正予定（メモ）

- ブログ機能の整備
- チャット機能削除
- aboutページ: 数値部分を適正値へ修正、もしくは数値を削除/変更
- servicesページの修正
- worksページの修正
- companyページの修正
- recruitページの修正
- contactページの修正
- newsページの修正
- メニューバー: SNSアイコン削除
- 使用画像: サイズを適正な値に変更
