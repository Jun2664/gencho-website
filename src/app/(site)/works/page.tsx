import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '施工実績',
  description: '現長株式会社の施工実績をご紹介します。大阪を中心に、工場・倉庫・物流施設など幅広い業種のお客様に高速シートシャッター施工を提供しています。',
}

export default function WorksPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">施工実績</h1>
          <p className="text-xl text-blue-100">数多くのお客様に選ばれてきました</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">豊富な施工実績</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              現長株式会社は、大阪を中心に数多くの高速シートシャッター施工、建築・施工、リフォームを手掛けてまいりました。<br />
              幅広い業種のお客様から信頼をいただき、確かな技術とサービスで応えています。
            </p>
          </div>
        </div>
      </section>

      {/* Industry Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">対応業種</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">製造業の工場</h3>
              <p className="text-gray-700 text-sm">生産効率向上のための高速シャッター施工</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">物流倉庫</h3>
              <p className="text-gray-700 text-sm">スムーズな物流のためのシャッター設置</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">商業施設</h3>
              <p className="text-gray-700 text-sm">店舗・施設の快適な環境づくりをサポート</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">その他施設</h3>
              <p className="text-gray-700 text-sm">多様なニーズに対応した施工実績</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">対応エリア</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">大阪府全域</h3>
                  <p className="text-gray-700 leading-relaxed">
                    大阪市をはじめ、堺市、東大阪市、豊中市など、大阪府内全域で施工対応しております。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">近畿圏</h3>
                  <p className="text-gray-700 leading-relaxed">
                    兵庫県、京都府、奈良県、和歌山県など、近畿圏内でも施工対応可能です。お気軽にご相談ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">施工の特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">高品質な施工</h3>
              <p className="text-gray-700 leading-relaxed">
                長年の経験とトップレベルの技術力により、確実で高品質な施工を実現します。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">迅速な対応</h3>
              <p className="text-gray-700 leading-relaxed">
                お客様のスケジュールに合わせ、迅速かつ丁寧な施工を心がけています。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">アフターフォロー</h3>
              <p className="text-gray-700 leading-relaxed">
                施工後のメンテナンスやアフターサポートも充実。安心してお任せください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">お客様の声</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              幅広い業種のお客様から、高い評価をいただいております。<br />
              トップレベルの技術と顧客満足を追求し、常に最高のサービスを提供できるよう努めています。
            </p>
            <p className="text-gray-600">
              具体的な施工事例やお客様の声については、お問い合わせいただければ詳しくご紹介いたします。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">施工のご相談はお気軽に</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            お客様のご要望に合わせた最適な施工プランをご提案いたします。<br />
            まずはお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
            >
              お問い合わせ
            </a>
            <a
              href="tel:06-6599-9556"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-300 border-2 border-white shadow-lg"
            >
              電話: 06-6599-9556
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
