import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '現長について',
  description: '現長株式会社の会社概要、代表挨拶、経営理念をご紹介します。トップレベルの技術と顧客満足を追求する高速シートシャッター施工の専門会社です。',
}

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">現長について</h1>
          <p className="text-xl text-blue-100">トップレベルの技術と顧客満足が私たちの誇りです</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-4 border-blue-600 pb-3">代表挨拶</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                現長株式会社のウェブサイトをご覧いただき、誠にありがとうございます。
              </p>
              <p>
                当社は、高速シートシャッター施工を中心に、建築・施工、リフォームなど、
                幅広いサービスを提供している会社です。
              </p>
              <p>
                「トップレベルの技術と顧客満足」を経営理念に掲げ、お客様に
                最高品質の施工とサービスを提供することを使命としております。
              </p>
              <p>
                お客様には、工場、倉庫、物流施設、商業施設など、実に多様な
                業種の方々がおられ、私たちは多くの経験を積んでまいりました。
                この豊富な経験とノウハウを活かし、あらゆるシートシャッターの
                施工・工事に対応できることが当社の強みです。
              </p>
              <p>
                何かご質問やご要望がございましたら、お気軽にお問い合わせください。
                皆様からのご連絡を心よりお待ちしております。
              </p>
              <p className="text-right mt-8">
                <span className="text-lg font-semibold">現長株式会社</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Strengths */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">現長株式会社の強み</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">トップレベルの技術力</h3>
              <p className="text-gray-600">長年の経験と高度な技術力で、高品質な施工を実現します。</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">顧客満足の追求</h3>
              <p className="text-gray-600">お客様のニーズに寄り添い、最高のサービスを提供します。</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">幅広い業種への対応</h3>
              <p className="text-gray-600">工場、倉庫、物流施設、商業施設など、多様な業種に対応。</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">豊富な施工実績</h3>
              <p className="text-gray-600">数多くの施工実績から培った確かなノウハウがあります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">お気軽にご相談ください</h2>
          <p className="text-xl mb-8 text-blue-100">
            高速シートシャッター施工、建築・施工、リフォームのことなら、現長株式会社にお任せください。
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
