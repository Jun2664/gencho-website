<?php
/*
Plugin Name: Gencho Auto Deploy
Plugin URI: https://gencho.site
Description: 記事投稿・更新時に自動でサイトをデプロイするWordPressプラグイン
Version: 1.0.0
Author: Gencho
License: GPL v2 or later
*/

// 直接アクセスを防ぐ
if (!defined('ABSPATH')) {
    exit;
}

// GitHub設定
define('GENCHO_GITHUB_TOKEN', 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN');
define('GENCHO_GITHUB_REPO_OWNER', 'YOUR_GITHUB_USERNAME');
define('GENCHO_GITHUB_REPO_NAME', 'gencho-website');

class GenchoAutoDeploy {

    public function __construct() {
        add_action('wp_insert_post', array($this, 'trigger_github_deployment'), 10, 3);
        add_action('before_delete_post', array($this, 'trigger_github_deployment_on_delete'));
        add_action('admin_notices', array($this, 'admin_notice'));
        add_action('admin_menu', array($this, 'add_admin_menu'));
    }

    /**
     * 記事の投稿・更新時にGitHub Actionsをトリガー
     */
    public function trigger_github_deployment($post_id, $post, $update) {
        // 自動保存や改訂版は除外
        if (wp_is_post_autosave($post_id) || wp_is_post_revision($post_id)) {
            return;
        }

        // 投稿タイプが'post'の場合のみ実行
        if ($post->post_type !== 'post') {
            return;
        }

        // 公開済みの記事のみ対象
        if ($post->post_status !== 'publish') {
            return;
        }

        $this->send_github_webhook($post_id, $post, $update ? 'updated' : 'created');
    }

    /**
     * 記事削除時のトリガー
     */
    public function trigger_github_deployment_on_delete($post_id) {
        $post = get_post($post_id);

        if (!$post || $post->post_type !== 'post') {
            return;
        }

        $this->send_github_webhook($post_id, $post, 'deleted');
    }

    /**
     * GitHub Webhookを送信
     */
    private function send_github_webhook($post_id, $post, $action) {
        $github_url = sprintf(
            'https://api.github.com/repos/%s/%s/dispatches',
            GENCHO_GITHUB_REPO_OWNER,
            GENCHO_GITHUB_REPO_NAME
        );

        $payload = array(
            'event_type' => 'wordpress-update',
            'client_payload' => array(
                'post_id' => $post_id,
                'post_title' => $post->post_title,
                'post_slug' => $post->post_name,
                'action' => $action,
                'timestamp' => current_time('Y-m-d H:i:s'),
                'site_url' => home_url()
            )
        );

        $response = wp_remote_post($github_url, array(
            'headers' => array(
                'Authorization' => 'token ' . GENCHO_GITHUB_TOKEN,
                'Accept' => 'application/vnd.github.v3+json',
                'Content-Type' => 'application/json',
                'User-Agent' => 'WordPress-Gencho-AutoDeploy/1.0'
            ),
            'body' => json_encode($payload),
            'timeout' => 30,
            'sslverify' => true
        ));

        // ログ記録
        $this->log_webhook_result($response, $post, $action);
    }

    /**
     * Webhook結果をログに記録
     */
    private function log_webhook_result($response, $post, $action) {
        if (is_wp_error($response)) {
            error_log(sprintf(
                '[Gencho Auto Deploy] ERROR: %s (Post: "%s", Action: %s)',
                $response->get_error_message(),
                $post->post_title,
                $action
            ));
        } else {
            $response_code = wp_remote_retrieve_response_code($response);
            if ($response_code === 204) {
                error_log(sprintf(
                    '[Gencho Auto Deploy] SUCCESS: Post "%s" triggered deployment (Action: %s)',
                    $post->post_title,
                    $action
                ));
            } else {
                error_log(sprintf(
                    '[Gencho Auto Deploy] FAILED: Response code %d (Post: "%s", Action: %s)',
                    $response_code,
                    $post->post_title,
                    $action
                ));
            }
        }
    }

    /**
     * 管理画面に通知表示
     */
    public function admin_notice() {
        $screen = get_current_screen();
        if ($screen && in_array($screen->id, ['dashboard', 'edit-post', 'post'])) {
            if (GENCHO_GITHUB_TOKEN === 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN') {
                echo '<div class="notice notice-warning is-dismissible">';
                echo '<p><strong>⚠️ Gencho Auto Deploy:</strong> GitHub Personal Access Tokenが設定されていません。プラグインファイルを編集して設定してください。</p>';
                echo '</div>';
            } else {
                echo '<div class="notice notice-success is-dismissible">';
                echo '<p><strong>🚀 Gencho Auto Deploy:</strong> 自動デプロイが有効です！記事の投稿・更新時に自動でサイトが更新されます。</p>';
                echo '</div>';
            }
        }
    }

    /**
     * 管理メニューを追加
     */
    public function add_admin_menu() {
        add_management_page(
            'Gencho Auto Deploy',
            '🚀 サイト自動更新',
            'manage_options',
            'gencho-auto-deploy',
            array($this, 'admin_page')
        );
    }

    /**
     * 管理ページの表示
     */
    public function admin_page() {
        // 手動デプロイの処理
        if (isset($_POST['manual_deploy']) && wp_verify_nonce($_POST['deploy_nonce'], 'gencho_manual_deploy')) {
            $this->trigger_manual_deploy();
        }

        ?>
        <div class="wrap">
            <h1>🚀 Gencho Auto Deploy</h1>

            <div class="card">
                <h2>自動デプロイ状態</h2>
                <?php if (GENCHO_GITHUB_TOKEN === 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN'): ?>
                    <p><strong>⚠️ 未設定</strong> - GitHub Personal Access Tokenを設定してください</p>
                <?php else: ?>
                    <p><strong>✅ 有効</strong> - 記事の投稿・更新時に自動でサイトが更新されます</p>
                <?php endif; ?>
                <p><strong>リポジトリ:</strong> <?php echo GENCHO_GITHUB_REPO_OWNER; ?>/<?php echo GENCHO_GITHUB_REPO_NAME; ?></p>
                <p><strong>デプロイ時間:</strong> 通常5-15分程度</p>
            </div>

            <div class="card">
                <h2>手動デプロイ</h2>
                <p>記事の変更なしでサイトを再デプロイしたい場合に使用してください。</p>
                <form method="post" style="margin-top: 20px;">
                    <?php wp_nonce_field('gencho_manual_deploy', 'deploy_nonce'); ?>
                    <input type="submit" name="manual_deploy" class="button button-primary" value="手動でデプロイを実行" />
                    <span style="margin-left: 10px; color: #666;">※デプロイには5-15分程度かかります</span>
                </form>
            </div>

            <div class="card">
                <h2>使用方法</h2>
                <ol>
                    <li><strong>記事投稿:</strong> 新しい記事を公開すると自動でサイトが更新されます</li>
                    <li><strong>記事編集:</strong> 既存記事の編集・更新時も自動でサイトが更新されます</li>
                    <li><strong>記事削除:</strong> 記事削除時もサイト更新が実行されます</li>
                    <li><strong>確認方法:</strong> GitHub Actions (<a href="https://github.com/<?php echo GENCHO_GITHUB_REPO_OWNER; ?>/<?php echo GENCHO_GITHUB_REPO_NAME; ?>/actions" target="_blank">こちら</a>) でデプロイ状況を確認できます</li>
                </ol>
            </div>

            <div class="card">
                <h2>設定手順</h2>
                <ol>
                    <li><strong>GitHub Personal Access Token:</strong> GitHubの設定から生成（repo権限必須）</li>
                    <li><strong>プラグインファイル編集:</strong> GENCHO_GITHUB_TOKEN, GENCHO_GITHUB_REPO_OWNERを設定</li>
                    <li><strong>GitHub Secretsの設定:</strong> FTP情報をリポジトリのSecretsに追加</li>
                </ol>
            </div>
        </div>
        <?php
    }

    /**
     * 手動デプロイの実行
     */
    private function trigger_manual_deploy() {
        $github_url = sprintf(
            'https://api.github.com/repos/%s/%s/dispatches',
            GENCHO_GITHUB_REPO_OWNER,
            GENCHO_GITHUB_REPO_NAME
        );

        $payload = array(
            'event_type' => 'wordpress-update',
            'client_payload' => array(
                'action' => 'manual_deploy',
                'timestamp' => current_time('Y-m-d H:i:s'),
                'user' => wp_get_current_user()->display_name,
                'site_url' => home_url()
            )
        );

        $response = wp_remote_post($github_url, array(
            'headers' => array(
                'Authorization' => 'token ' . GENCHO_GITHUB_TOKEN,
                'Accept' => 'application/vnd.github.v3+json',
                'Content-Type' => 'application/json',
                'User-Agent' => 'WordPress-Gencho-AutoDeploy/1.0'
            ),
            'body' => json_encode($payload),
            'timeout' => 30
        ));

        if (!is_wp_error($response) && wp_remote_retrieve_response_code($response) === 204) {
            echo '<div class="notice notice-success is-dismissible"><p><strong>✅ 手動デプロイを開始しました！</strong> 数分後にサイトが更新されます。</p></div>';
            error_log('[Gencho Auto Deploy] Manual deploy triggered by ' . wp_get_current_user()->display_name);
        } else {
            echo '<div class="notice notice-error is-dismissible"><p><strong>❌ 手動デプロイに失敗しました。</strong> 設定を確認してください。</p></div>';
        }
    }
}

// プラグインを初期化
new GenchoAutoDeploy();

// プラグイン有効化時の処理
register_activation_hook(__FILE__, function() {
    error_log('[Gencho Auto Deploy] Plugin activated successfully');
});

// プラグイン無効化時の処理
register_deactivation_hook(__FILE__, function() {
    error_log('[Gencho Auto Deploy] Plugin deactivated');
});
?>