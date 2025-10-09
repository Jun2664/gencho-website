import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '採用情報',
  description: '現長株式会社の採用情報です。建設現場管理、軽作業スタッフを募集しています。未経験者歓迎、男女平等な職場環境で一緒に働きませんか。',
}

export default function RecruitPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">採用情報</h1>
          <p className="text-xl text-blue-100">一緒に働く仲間を募集しています</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">私たちと一緒に働きませんか</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              現長株式会社では、一緒に成長していける仲間を募集しています。<br />
              未経験者も丁寧に指導しますので、安心してご応募ください。<br />
              男女問わず活躍できる職場環境を整えています。
            </p>
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">募集職種</h2>

          {/* Mid-Career Positions */}
          <div className="mb-12">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-t-lg">
              <h3 className="text-2xl font-bold">中途採用</h3>
            </div>
            <div className="bg-white rounded-b-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Construction Site Manager */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    建設現場管理
                  </h4>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900 min-w-[80px]">給与:</span>
                      <span>月給 25万円〜40万円</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900 min-w-[80px]">勤務地:</span>
                      <span>大阪</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900 min-w-[80px]">仕事内容:</span>
                      <span>シートシャッター施工の現場管理、工程管理、品質管理</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900 min-w-[80px]">応募資格:</span>
                      <span>建設業界での経験者優遇（未経験者も応相談）</span>
                    </div>
                  </div>
                </div>

                {/* General Worker */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    軽作業スタッフ
                  </h4>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900 min-w-[80px]">給与:</span>
                      <span>月給 20万円〜</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900 min-w-[80px]">勤務地:</span>
                      <span>大阪</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900 min-w-[80px]">仕事内容:</span>
                      <span>シートシャッター施工の補助作業、資材運搬など</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900 min-w-[80px]">応募資格:</span>
                      <span className="text-blue-600 font-semibold">未経験者歓迎、男女問わず募集</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Graduate Positions */}
          <div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-t-lg">
              <h3 className="text-2xl font-bold">新卒採用</h3>
            </div>
            <div className="bg-white rounded-b-lg shadow-lg p-8">
              <div className="border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  軽作業スタッフ
                </h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-gray-900 min-w-[80px]">給与:</span>
                    <span>月給 20万円〜</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-gray-900 min-w-[80px]">勤務地:</span>
                    <span>大阪</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-gray-900 min-w-[80px]">仕事内容:</span>
                    <span>シートシャッター施工の補助作業から開始</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-gray-900 min-w-[80px]">応募資格:</span>
                    <span>2026年3月卒業見込みの方</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">会社の特徴</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">男女平等な職場環境</h3>
                <p className="text-gray-700">性別に関係なく、それぞれの能力を活かして活躍できる環境を整えています。</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">競争力のある給与体系</h3>
                <p className="text-gray-700">業界水準以上の給与を設定し、頑張りを正当に評価します。</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">未経験者も丁寧に指導</h3>
                <p className="text-gray-700">経験がなくても大丈夫。先輩スタッフが一から丁寧に教えます。</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">技術を身につけられる</h3>
                <p className="text-gray-700">高速シートシャッター施工など、専門技術を身につけることができます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">応募方法</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                お電話またはメールにてお気軽にお問い合わせください。<br />
                ご質問だけでも大歓迎です。
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    電話でのお問い合わせ
                  </h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">
                    <a href="tel:06-6599-9556" className="hover:text-blue-800">06-6599-9556</a>
                  </p>
                  <p className="text-sm text-gray-600">平日 9:00 - 18:00</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    メールでのお問い合わせ
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 mb-2 break-all">
                    <a href="mailto:gencho-customer@hotmail.com" className="hover:text-blue-800">
                      gencho-customer@hotmail.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-600">24時間受付</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-700 mb-4">詳細情報は採用サイトでもご確認いただけます</p>
                <a
                  href="https://en-gage.net/gencho/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  採用サイトを見る
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">一緒に成長しましょう</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            現長株式会社は、やる気のある方を全力でサポートします。<br />
            まずはお気軽にご連絡ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:06-6599-9556"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
            >
              電話で問い合わせる
            </a>
            <a
              href="mailto:gencho-customer@hotmail.com"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-300 border-2 border-white shadow-lg"
            >
              メールで問い合わせる
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
