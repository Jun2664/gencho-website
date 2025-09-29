# ConohaWing × GitHub Actions セットアップガイド

## 1. ConohaWingのFTP情報を確認

### ConohaWingコントロールパネルで確認
1. [ConohaWingコントロールパネル](https://www.conoha.jp/wing/)にログイン
2. **サイト管理** をクリック
3. 左メニューの **FTP** をクリック
4. 以下の情報をメモ:
   - FTPサーバー名
   - FTPユーザー名
   - FTPパスワード（表示されない場合は再設定）

### FTP情報の例
```
FTPサーバー: www123.conoha.ne.jp
FTPユーザー名: c1234567
FTPパスワード: （設定したパスワード）
```

## 2. GitHub Secretsの設定

### 設定画面へのアクセス
1. GitHubリポジトリ: https://github.com/Jun2664/gencho-website
2. **Settings** タブをクリック
3. 左メニューの **Secrets and variables** → **Actions**
4. **New repository secret** ボタンをクリック

### 設定するSecrets

#### 必須項目

| Name | Value の例 | 説明 |
|------|-----------|------|
| `FTP_SERVER` | `www123.conoha.ne.jp` | ConohaWingのFTPサーバー |
| `FTP_USERNAME` | `c1234567` | FTPユーザー名 |
| `FTP_PASSWORD` | `your_password` | FTPパスワード |
| `FTP_SERVER_DIR` | `/public_html/gencho.site/` | アップロード先ディレクトリ |

#### オプション項目

| Name | Value の例 | 説明 |
|------|-----------|------|
| `SITE_URL` | `https://gencho.site` | サイトのURL |
| `WP_THEME_DIR` | `/public_html/gencho.site/cms/wp-content/themes/gencho/` | WordPressテーマディレクトリ |

### 設定手順
1. **Name** フィールドに上記の名前を入力（例: `FTP_SERVER`）
2. **Secret** フィールドに対応する値を入力
3. **Add secret** をクリック
4. すべてのSecretsについて繰り返す

## 3. ディレクトリ構造の確認

### ConohaWingの一般的な構造
```
/home/cXXXXXXX/
└── public_html/
    └── gencho.site/        # ドメイン名のフォルダ
        ├── index.html       # トップページ
        ├── blog/           # ブログページ
        └── cms/            # WordPress（使用する場合）
            └── wp-content/
                └── themes/
```

### FTP_SERVER_DIRの設定例

#### ドメイン直下に配置する場合
```
FTP_SERVER_DIR: /public_html/gencho.site/
```

#### サブディレクトリに配置する場合
```
FTP_SERVER_DIR: /public_html/gencho.site/app/
```

## 4. デプロイのテスト

### 方法1: GitHub Actionsで手動実行
1. リポジトリの **Actions** タブへ
2. **Deploy to Production** ワークフロー選択
3. **Run workflow** → **Run workflow**

### 方法2: コード変更でテスト
```bash
cd gencho-website
echo "# Deploy test" >> README.md
git add README.md
git commit -m "Test ConohaWing deployment"
git push
```

### 方法3: コマンドラインから
```bash
gh workflow run deploy.yml
```

## 5. トラブルシューティング

### ❌ FTP接続エラー
**症状**: `Error: FTP connection failed`

**確認事項**:
- FTPサーバー名が正しいか（www●●●.conoha.ne.jp）
- ユーザー名がcで始まっているか
- パスワードが正しいか
- ConohaWingでFTPが有効になっているか

### ❌ ディレクトリエラー
**症状**: `Error: Directory not found`

**確認事項**:
- `/public_html/`から始まるフルパスか
- ドメイン名フォルダが存在するか
- 末尾にスラッシュがあるか

### ❌ アップロード失敗
**症状**: ビルドは成功するがサイトが更新されない

**確認事項**:
- FTP_SERVER_DIRが正しいか
- ConohaWingの容量が不足していないか
- .htaccessの設定が適切か

## 6. ConohaWing固有の設定

### 静的サイトの最適化
ConohaWingコントロールパネルで設定:
- **高速化** → **ブラウザキャッシュ**: ON
- **高速化** → **Gzip圧縮**: ON
- **セキュリティ** → **WAF**: 必要に応じて設定

### .htaccessの推奨設定
`/public_html/gencho.site/.htaccess`:
```apache
# トレイリングスラッシュの処理
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !/$
RewriteRule ^(.*)$ $1/ [L,R=301]

# キャッシュ設定
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType text/css "access plus 1 week"
    ExpiresByType application/javascript "access plus 1 week"
</IfModule>
```

## 7. セキュリティ注意事項

### ⚠️ 重要
- GitHub Secretsに設定した値は**絶対に**公開しない
- FTPパスワードは定期的に変更する
- 不要なファイルはアップロードしない
- WordPressを使用する場合は最新版を維持

## サポート

問題が発生した場合:
1. GitHub Actionsのログを確認
2. ConohaWingのエラーログを確認（コントロールパネル → ログ）
3. FTP接続を手動でテスト

---
最終更新: 2024年
ConohaWing対応版