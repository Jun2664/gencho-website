'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: '会社情報', href: '/company' },
    { label: '施工実績', href: '/works' },
    { label: '採用情報', href: '/recruit' },
    { label: 'お問い合わせ', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link href="/_monju/" className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300">
              <Image
                src="/img/logo_menu01_new.png"
                alt="現長株式会社ロゴ"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 border-b-2 border-transparent hover:border-blue-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-all duration-300"
              aria-expanded={isMenuOpen}
              aria-label="メニューを開く"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
