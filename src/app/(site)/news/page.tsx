import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お知らせ',
  description: '現長株式会社からのお知らせ一覧です。会社の最新情報、施工事例、イベント情報などをご覧いただけます。',
}

export default function NewsPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">お知らせ</h1>
          <p className="text-xl text-blue-100">現長株式会社からの最新情報</p>
        </div>
      </section>

      {/* News List */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Placeholder Message */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">お知らせページを準備中です</h2>
            <p className="text-lg text-gray-700 mb-6">
              現在、お知らせページのコンテンツを準備しております。<br />
              最新情報はお電話またはメールにてお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="tel:06-6599-9556"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                電話で問い合わせる
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                お問い合わせフォーム
              </a>
            </div>
          </div>

          {/* Sample News Structure (for future use) */}
          {/* <div className="space-y-6">
            <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">お知らせ</span>
                  <time className="text-gray-600 text-sm">2025年1月1日</time>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  <a href="#">お知らせのタイトル</a>
                </h3>
                <p className="text-gray-700">お知らせの本文がここに入ります。</p>
              </div>
            </article>
          </div> */}
        </div>
      </section>

      {/* Service Promotion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">サービスのご案内</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/services" className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-200">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">高速シートシャッター施工</h3>
              <p className="text-gray-700 text-sm">小松電機産業製「門番」シリーズの専門施工</p>
            </a>

            <a href="/services" className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-200">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">建築・施工</h3>
              <p className="text-gray-700 text-sm">新築から増改築まで幅広く対応</p>
            </a>

            <a href="/services" className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-200">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">リフォーム</h3>
              <p className="text-gray-700 text-sm">改修からメンテナンスまで対応</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
