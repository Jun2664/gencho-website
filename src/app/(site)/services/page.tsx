import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '事業内容',
  description: '現長株式会社の事業内容をご紹介します。高速シートシャッター施工、建築・施工、リフォームなど、幅広いサービスを提供しております。',
}

export default function ServicesPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">事業内容</h1>
          <p className="text-xl text-blue-100">優れた施工・サービスを提供しております</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Service 1: High-Speed Sheet Shutter */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">高速シートシャッター施工</h2>
                <p className="text-blue-600 font-semibold">小松電機産業製「門番」シリーズ</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                現長株式会社は、小松電機産業製の高速シートシャッター「門番」シリーズの
                施工を専門に行っております。
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">特徴</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>スチールシャッターの約20倍の高速開閉</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>工場・倉庫の空調効果向上</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>防虫・防塵効果</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1985年発売以来の高い信頼性と実績</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">対応タイプ</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• パイプ式タイプ（屋外用）</li>
                    <li>• パイプレスタイプ（屋内用）</li>
                  </ul>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">対象施設</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 工場</li>
                    <li>• 倉庫</li>
                    <li>• 物流施設</li>
                    <li>• 商業施設</li>
                    <li>• その他、各種施設</li>
                  </ul>
                </div>
              </div>

              <p className="mt-6 text-lg">
                当社のトップレベルの技術力により、お客様のニーズに合わせた
                最適な施工を提供いたします。
              </p>
            </div>
          </div>

          {/* Service 2: Construction */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">建築・施工</h2>
                <p className="text-blue-600 font-semibold">新築から増改築まで対応</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                新築工事から増改築まで、幅広い建築・施工サービスを提供しております。
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">サービス内容</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>新築工事</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>増改築工事</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>各種建設工事</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>設計・施工管理</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">私たちの強み</h4>
                  <p className="text-gray-700 leading-relaxed">
                    豊富な経験とノウハウを活かし、お客様のご要望に沿った
                    高品質な建築・施工を実現いたします。お客様との綿密な
                    コミュニケーションを大切にし、満足いただける仕上がりを
                    お約束します。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: Renovation */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">リフォーム</h2>
                <p className="text-blue-600 font-semibold">改修からメンテナンスまで</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                既存建物の改修から、シャッター交換・修理、メンテナンスまで、
                あらゆるリフォームニーズに対応いたします。
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">サービス内容</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>既存建物の改修</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>シャッター交換・修理</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>定期メンテナンス</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>設備更新</span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-lg">
                お客様の建物を長く快適にご使用いただけるよう、
                きめ細やかなサービスを提供いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">サービスに関するご相談</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            高速シートシャッター、建築・施工、リフォームなど、どのようなご要望でもお気軽にご相談ください。
            お客様のニーズに合わせた最適なソリューションをご提案いたします。
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
