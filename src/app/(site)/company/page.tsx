import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '会社情報',
  description: '現長株式会社の会社情報をご紹介します。所在地、連絡先、アクセス方法など、詳細な会社概要をご覧いただけます。',
}

export default function CompanyPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">会社情報</h1>
          <p className="text-xl text-blue-100">現長株式会社の詳細情報</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
              <h2 className="text-3xl font-bold text-white">会社概要</h2>
            </div>
            <div className="p-8 md:p-12">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <th className="text-left py-4 px-4 bg-gray-50 font-semibold text-gray-900 w-1/3">会社名</th>
                    <td className="py-4 px-4 text-gray-700">現長株式会社（Gencho Co., Ltd.）</td>
                  </tr>
                  <tr>
                    <th className="text-left py-4 px-4 bg-gray-50 font-semibold text-gray-900">所在地</th>
                    <td className="py-4 px-4 text-gray-700">
                      〒550-0013<br />
                      大阪府大阪市西区新町1-1-26
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left py-4 px-4 bg-gray-50 font-semibold text-gray-900">電話番号</th>
                    <td className="py-4 px-4 text-gray-700">
                      <a href="tel:06-6599-9556" className="text-blue-600 hover:text-blue-800 font-semibold">
                        06-6599-9556
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left py-4 px-4 bg-gray-50 font-semibold text-gray-900">メールアドレス</th>
                    <td className="py-4 px-4 text-gray-700">
                      <a href="mailto:gencho-customer@hotmail.com" className="text-blue-600 hover:text-blue-800 break-all">
                        gencho-customer@hotmail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left py-4 px-4 bg-gray-50 font-semibold text-gray-900">営業時間</th>
                    <td className="py-4 px-4 text-gray-700">平日 9:00 - 18:00</td>
                  </tr>
                  <tr>
                    <th className="text-left py-4 px-4 bg-gray-50 font-semibold text-gray-900">事業内容</th>
                    <td className="py-4 px-4 text-gray-700">
                      <ul className="space-y-1">
                        <li>• 高速シートシャッター施工</li>
                        <li>• 建築・施工</li>
                        <li>• リフォーム</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left py-4 px-4 bg-gray-50 font-semibold text-gray-900">対応エリア</th>
                    <td className="py-4 px-4 text-gray-700">大阪府全域および近畿圏</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">アクセス</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600 text-lg mb-2">〒550-0013</p>
                <p className="text-gray-700 font-semibold">大阪府大阪市西区新町1-1-26</p>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700">
                  詳細なアクセス方法や駐車場の有無につきましては、お電話またはメールにてお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-8 md:p-12 border border-blue-200">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">経営理念</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">トップレベルの技術</h3>
                  <p className="text-gray-700 leading-relaxed">
                    長年の経験と高度な技術力により、常に最高品質の施工を提供します。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">顧客満足の追求</h3>
                  <p className="text-gray-700 leading-relaxed">
                    お客様のニーズに寄り添い、満足いただけるサービスを提供することが私たちの使命です。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">信頼と実績</h3>
                  <p className="text-gray-700 leading-relaxed">
                    幅広い業種のお客様との長年の取引実績が、私たちの信頼の証です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">お気軽にお問い合わせください</h2>
          <p className="text-xl mb-8 text-blue-100">
            ご質問やご相談がございましたら、お電話またはメールにてお気軽にご連絡ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
            >
              お問い合わせフォーム
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
