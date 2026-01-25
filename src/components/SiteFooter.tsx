import Link from 'next/link'
import Image from 'next/image'

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 border-t-4 border-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/img/logo_wht08_new.png"
                alt="現長株式会社ロゴ"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">現長株式会社</h3>
            <p className="text-gray-400 mb-4 leading-relaxed text-sm">
              現長株式会社では、シートシャッターの施工をご要望のお客様に対し、
              優れた施工・サービスを提供しております。トップレベルの技術と、
              顧客満足が当社の誇りです。
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/gencho416"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/gencho416"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-600 pb-2 inline-block">
              サイトマップ
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/works" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                  施工実績
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                  会社情報
                </Link>
              </li>
              <li>
                <Link href="/recruit" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-600 pb-2 inline-block">
              お問い合わせ
            </h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>〒550-0013</p>
              <p>大阪府大阪市西区新町1-1-26</p>
              <p className="mt-3">
                <a href="tel:06-6599-9556" className="hover:text-blue-400 transition-colors">
                  TEL: 06-6599-9556
                </a>
              </p>
              <p>
                <a href="mailto:gencho-customer@hotmail.com" className="hover:text-blue-400 transition-colors break-all">
                  gencho-customer@hotmail.com
                </a>
              </p>
              <p className="mt-3">平日 9:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col items-center text-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} 現長株式会社 (GENCHO Co., Ltd.). All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                サイトマップ
              </Link>
              <Link href="/access" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                アクセス
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
