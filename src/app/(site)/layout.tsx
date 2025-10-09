import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: {
    template: '%s | 現長株式会社',
    default: '現長株式会社 | シートシャッター施工・建築工事',
  },
  description: '現長株式会社はシートシャッター全般の計画・施工からメンテナンスまで対応する専門施工会社です。基礎工事、テント倉庫改修、建具工事など幅広い建築工事に対応。お客様のニーズに最適なソリューションを提供いたします。',
  keywords: 'シートシャッター,施工,建築工事,メンテナンス,現長株式会社,テント倉庫,建具工事,基礎工事,塗装工事',
  openGraph: {
    title: '現長株式会社 | シートシャッター施工・建築工事',
    description: '現長株式会社はシートシャッター全般の計画・施工からメンテナンスまで対応する専門施工会社です。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-16 sm:pt-20">
        {children}
      </main>
      <SiteFooter />
    </>
  )
}
