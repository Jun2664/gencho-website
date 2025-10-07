# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

**重要**:
- Claude Codeはこのプロジェクトで作業する際、必ず日本語で返答してください。
- GitHubへのコミットメッセージとコミット本文も日本語で記述してください。

## FTP認証完了の記録

- **日付**: 2025-09-30
- **状態**: 全FTP認証情報（SERVER/USERNAME/PASSWORD）を再設定完了
- **更新時刻**: 2025-09-30 07:00-07:01

## プロジェクト概要

Gencho Websiteは、WordPress連携と自動デプロイ機能を搭載したNext.jsベースのコーポレートサイトです。静的サイト生成を使用し、コード変更またはWordPressコンテンツ更新時に自動的にデプロイされます。

**主要機能**: ルートページ (`/`) には、元々monjusou.com（温泉旅館）のクローンでしたが、現在は**現長株式会社（建設会社）のコーポレートサイト**に変換中です。

## 現在の作業状況（2025-10-07更新）

### 完了した作業
1. **基本情報の変換完了**:
   - メタタグ（title, description, keywords）を現長株式会社用に更新
   - ナビゲーションメニューの項目名を建設会社向けに変更
   - ヒーローセクションに「現長株式会社」の社名を追加
   - フッター情報（住所、連絡先、SNSリンク）を更新
   - 著作権表記を「GENCHO Co., Ltd.」に変更

2. **ファイルの統合**:
   - 作業ディレクトリを`\\wsl$\Ubuntu\home\jun\gencho-website\`に統一
   - Windows側とWSL側のファイル同期を完了
   - `public/_monju/index.html`に変換済みコンテンツを配置
   - `out/index.html`にも同期

3. **開発サーバー**:
   - http://localhost:8888 でキャッシュ無効化（-c-1）で起動中
   - ブラウザでCtrl+Shift+Rでハードリフレッシュすると変更内容が表示される

### 未完了の作業

1. **詳細情報セクションの変換**（index.htmlの449-563行目）:
   - 現在も旅館関連の情報が残っています：
     - 総客室数
     - チェックイン/アウト時間
     - サウナ・Wi-Fi・ペット受け入れなどの施設情報
   - 建設会社向けの情報に変更が必要：
     - 創業年、資本金、対応エリア
     - 営業時間、主要取引先
     - 施工実績、保有資格など

2. **モーダル・ボタン類の変換**:
   - 「宿泊予約」ボタン（54行目）
   - 予約サインアップモーダル（371-395行目）
   - ケーキ注文リンク（366-367行目）
   - これらを「お問い合わせ」や「見積依頼」などに変更

3. **画像の差し替え**:
   - 温泉旅館の写真を建設会社の施工事例写真に変更
   - ロゴ画像の更新（必要に応じて）

### 次回セッションで行うべきこと

1. 詳細情報セクション（449-563行目）を建設会社向けに書き換え
2. 残っているモーダル・ボタンテキストを変更
3. 画像の差し替え（施工事例など）
4. 全体の整合性チェック
5. 最終確認後、コミットとデプロイ

## 開発コマンド

### 基本コマンド
```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド（静的エクスポート）
npm run build

# 本番サーバー起動（ビルド後）
npm start

# Lint実行
npm lint

# monjusou.comのクローン作成
npm run clone:monju
```

### ビルドとデプロイ
- **ビルド出力**: 静的ファイルは `out/` ディレクトリにエクスポートされます
- **ビルドモード**: 静的エクスポート（next.config.jsで `output: 'export'` に設定）
- **画像**: 静的エクスポート互換性のため最適化無効
- **トレイリングスラッシュ**: サーバー互換性のため有効

## アーキテクチャ

### WordPress連携と自動デプロイシステム

このプロジェクトには、WordPressコンテンツ変更時にGitHub ActionsデプロイをトリガーするカスタムWordPressプラグイン（`gencho-webhook-plugin.php`）が含まれています。

**デプロイフロー**:
```
[WordPressイベント] → [WordPressプラグイン] → [GitHub API] → [GitHub Actions] → [Next.jsビルド] → [本番環境へFTPアップロード]
```

**デプロイトリガー**:
1. **WordPressコンテンツ変更**: 記事の公開/更新/削除（repository_dispatch経由）
2. **コード変更**: mainブランチへのpush
3. **手動実行**: GitHub Actionsのworkflow_dispatch経由

**必要なGitHub Secrets**（詳細はCONOHA_WING_SETUP.mdを参照）:
- `FTP_SERVER`: FTPサーバーアドレス
- `FTP_USERNAME`: FTPユーザー名
- `FTP_PASSWORD`: FTPパスワード
- `FTP_SERVER_DIR`: アップロード先ディレクトリ（例: `/public_html/gencho.site/`）

### Monjusouクローンシステム

ホームページには、TypeScriptスクレイピングスクリプトで生成されたmonjusou.comの完全なクローンが表示されます。

**スクリプト**: `scripts/clone-monjusou.ts`
- monjusou.comからHTML、CSS、JS、画像、その他アセットをダウンロード
- URLをローカルパス（`/_monju/`配下）に書き換え
- すべてを`public/_monju/`に保存
- p-limitを使用した並列ダウンロード（8並列）

**注意**: このスクリプトはビルドエラーを避けるため、TypeScriptコンパイルから除外されています（tsconfig.jsonのexclude参照）。ビルド前に手動で実行してください。

**ページ実装**: `src/app/page.tsx`
- ビルド時に`public/_monju/index.html`を読み込み
- クローンが未実行の場合はセットアップ手順ページにフォールバック
- `dangerouslySetInnerHTML`を使用してクローンしたHTMLをレンダリング
- 静的生成のため`dynamic = "error"`と`revalidate = false`を設定

### 技術スタック

- **フレームワーク**: Next.js 14
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **フォント**: Inter（Google Fonts）
- **WordPress連携**: カスタムPHPプラグイン
- **CI/CD**: GitHub Actions
- **デプロイ**: ConohaWingへFTP

## ファイル構造

```
gencho-website/
├── .github/workflows/
│   └── deploy.yml                    # GitHub Actionsデプロイワークフロー
├── scripts/
│   ├── clone-monjusou.ts            # Webサイトクローンスクリプト
│   └── clone-monjusou.js            # コンパイル済みバージョン
├── src/app/
│   ├── layout.tsx                   # ルートレイアウト（Interフォント使用）
│   ├── page.tsx                     # ホームページ（monjusouクローン表示）
│   ├── page.backup.tsx              # オリジナルページのバックアップ
│   └── globals.css                  # グローバルスタイル
├── public/
│   └── _monju/                      # クローンされたmonjusou.comアセット（生成ファイル）
├── out/                              # ビルド出力（生成ファイル、コミット対象外）
├── gencho-webhook-plugin.php        # 自動デプロイ用WordPressプラグイン
├── DEPLOYMENT_SETUP.md              # デプロイ設定ガイド
├── CONOHA_WING_SETUP.md            # ConohaWing固有のセットアップ手順
└── README.md                        # プロジェクト概要（日本語）
```

## 重要な設定

### TypeScript (tsconfig.json)
- Target: ES2017
- Module: CommonJS with Node resolution
- パスエイリアス: `@/*` → `./src/*`
- **scriptsディレクトリは除外**: 非標準TSパターンを含むためコンパイル対象外

### Next.js (next.config.js)
- 静的エクスポートモード（`output: 'export'`）
- 静的ホスティング用に画像最適化を無効化
- トレイリングスラッシュ有効

### Tailwind (tailwind.config.js)
- スキャン対象: `src/pages/**`, `src/components/**`, `src/app/**`

## WordPressプラグインのセットアップ

プラグイン（`gencho-webhook-plugin.php`）に必要な設定:
1. `repo`スコープ付きGitHub Personal Access Token
2. リポジトリオーナーとリポジトリ名の設定
3. WordPress管理画面でのプラグイン有効化

有効化すると、以下のイベントでGitHub APIにWebhookを送信:
- 記事公開（`post_published`）
- 記事更新（`post_updated`）
- 記事削除（`post_trashed`）

## 開発ワークフロー

### 初回セットアップ
1. `npm install`
2. `npm run clone:monju`（monjusou.comをダウンロード）
3. `npm run dev`

### 現在の開発環境
- **作業ディレクトリ**: `\\wsl$\Ubuntu\home\jun\gencho-website\`
- **開発サーバー**: `http://localhost:8888` (ポート8888、キャッシュ無効化)
- **主要ファイル**:
  - `public/_monju/index.html` - ソースファイル
  - `out/index.html` - ビルド出力（サーバーが配信）

### 変更を加える場合
1. `public/_monju/index.html`を編集
2. `out/index.html`にコピー: `cp public/_monju/index.html out/index.html`
3. ブラウザで`Ctrl+Shift+R`でハードリフレッシュ
4. 確認後、`npm run build`でビルド
5. mainブランチへpush → 自動デプロイ

### WordPress連携の追加
1. GitHub Secretsを設定（CONOHA_WING_SETUP.md参照）
2. `gencho-webhook-plugin.php`に認証情報を記入
3. WordPressの`wp-content/plugins/`にプラグインをアップロード
4. WordPress管理画面でプラグインを有効化

## よくある問題

### Monjusouクローンが見つからない
**エラー**: ホームページにmonjusou.comクローンではなくセットアップ手順が表示される
**解決方法**: ビルド前に`npm run clone:monju`を実行

### scriptsディレクトリでTypeScriptビルドエラー
**注意**: `scripts/`ディレクトリは意図的にTypeScriptコンパイルから除外されています
**理由**: クローンスクリプトは非標準TSパターンを使用し、tscではなくts-nodeで実行されます

### 本番環境で404エラー
**確認事項**:
- URLにトレイリングスラッシュが必要
- `.htaccess`の設定（CONOHA_WING_SETUP.md参照）
- GitHub SecretsのFTP_SERVER_DIRパス

### デプロイが実行されない
**確認事項**:
- GitHub Personal Access Tokenが有効か
- WordPressプラグインが有効化されているか
- プラグイン設定のリポジトリ名/オーナー名が一致しているか
- GitHub Actionsワークフローが有効になっているか

## セキュリティに関する注意事項

- 実際のGitHubトークンを含むWordPressプラグインを絶対にコミットしない
- FTP認証情報はGitHub Secretsでのみ管理
- GitHubトークンは最小限の権限（repoスコープのみ）に設定
- 認証情報の定期的なローテーションを推奨
## Git操作とファイル管理のベストプラクティス（2025-10-07追加）

### Windows Zone.Identifierファイル対策
**問題**: Windowsでダウンロードしたファイルに自動付与される`:Zone.Identifier`ファイルがGitで深刻な問題を引き起こす
- コロン（`:`）を含むファイル名はGitで「invalid path」エラーになる
- 一度コミットすると、リポジトリの破損やチェックアウト失敗の原因になる

**対策**:
1. `.gitignore`に以下を追加済み：
```
*:Zone.Identifier
*.backup.*
```

2. コミット前に必ず確認：
```bash
git status
find . -name "*:Zone.Identifier" -o -name "*.backup.*"
```

3. 既にコミットされている場合は削除：
```bash
git filter-branch --tree-filter 'find . -name "*:Zone.Identifier" -delete' HEAD
```

### 安全なGit操作手順
**コミット前の必須チェック**:
1. `git status` で変更ファイル一覧を確認
2. `git diff` で変更内容を確認
3. 不要なファイル（Zone.Identifier、backup、一時ファイル）がないか確認
4. `git add` は個別ファイル指定を推奨（`git add -A`は慎重に）

**デプロイ前の必須確認**:
- `src/app/` ディレクトリが存在するか（Next.jsビルドに必須）
- `tailwind.config.js`, `tsconfig.json` が存在するか
- ビルドに必要な全ファイルがコミットされているか

### WSL環境での注意点
- WSLパス（`//wsl$/Ubuntu/home/jun/...`）は通常のLinuxパスと異なる動作をする
- `cd`コマンドの動作が不安定な場合がある
- ファイル操作は絶対パスを使用することを推奨

### Gitリポジトリ修復手順
リポジトリが深刻に破損した場合の対処法：
```bash
# 1. .gitディレクトリを削除
rm -rf .git

# 2. Git再初期化
git init
git config user.name "Jun2664"
git config user.email "junnosuke.pafu@gmail.com"

# 3. リモート追加
git remote add origin https://github.com/Jun2664/gencho-website.git

# 4. 現在の状態をコミット
git add -A
git commit -m "リポジトリ再構築"

# 5. 強制プッシュ
git branch -M main
git push -f origin main
```

**重要**: 強制プッシュは慎重に。チーム開発の場合は事前に通知すること。
