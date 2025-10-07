export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">
          Gencho Website
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          WordPress連携機能搭載
        </p>
        <div className="bg-blue-50 p-6 rounded-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">🚀 自動デプロイ機能</h2>
          <ul className="text-left space-y-2">
            <li>✅ WordPress記事の投稿・更新時に自動デプロイ</li>
            <li>✅ GitHub Actionsによる自動ビルド</li>
            <li>✅ 静的サイト生成（SSG）対応</li>
            <li>✅ 手動デプロイも可能</li>
          </ul>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          このページは仮のトップページです。今後コンテンツを追加していきます。
        </p>
      </div>
    </main>
  )
}