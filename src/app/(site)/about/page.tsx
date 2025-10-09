import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '現長について',
  description: '現長株式会社の会社概要、代表挨拶、経営理念をご紹介します。トップレベルの技術と顧客満足を追求する高速シートシャッター施工の専門会社です。',
}

export default function AboutPage() {
  return (
    <>
      {/* Monjusou style CSS */}
      <link rel="stylesheet" href="/css/core.min.css" />
      <link rel="stylesheet" href="/css/style.css" />

      <div>
        {/* Hero Section with vertical text */}
        <section className="section-block bkg-info02 pt-120a mb-40">
          <div className="row">
            <div className="column width-12 center_sp horizon" data-animate-in="preset:slideInRightShort;duration:3000ms;">
              <h2 className="ls02 f16a lh18">現長について<br />
                <span className="allura f16 f_grn ls01 mb-10">About Gencho</span>
              </h2>
              <p className="p1">
                確かな技術と上質な施工<br className="pc" />
                シートシャッター専門の建設会社
              </p>
            </div>
          </div>
        </section>

        {/* President Message */}
        <section className="section-block feature-2 right no-padding-bottom">
          <div className="row flex">
            <div className="column width-8">
              <div className="feature-image mb-mobile-50">
                <div className="feature-image-inner horizon" data-animate-in="preset:slideInLeftShort;duration:3000;" data-threshold="0.3">
                  <div className="pc"><img src="/img/top01.jpg" alt="代表挨拶" /></div>
                  <div className="sp"><img src="/img/top01_sp.jpg" alt="代表挨拶" /></div>
                </div>
              </div>
            </div>
            <div className="column width-3 offset-1 tategaki02">
              <div className="feature-content">
                <div className="feature-content-inner left center_sp horizon" data-animate-in="preset:slideInRightShort;duration:3000;delay:300ms;" data-threshold="0.3">
                  <h2 className="lspacing-medium f16 ml-20 lh15">代表挨拶<span className="pc">　　　</span><br className="sp" /><span className="allura f_grn shin ls01 ml-20">Message</span></h2>
                  <p className="p1 ml-20">
                    現長株式会社のウェブサイトをご覧いただき、誠にありがとうございます。<br /><br />

                    当社は、高速シートシャッター施工を中心に、建築・施工、リフォームなど、幅広いサービスを提供している会社です。<br /><br />

                    「トップレベルの技術と顧客満足」を経営理念に掲げ、お客様に最高品質の施工とサービスを提供することを使命としております。<br /><br />

                    お客様には、工場、倉庫、物流施設、商業施設など、実に多様な業種の方々がおられ、私たちは多くの経験を積んでまいりました。この豊富な経験とノウハウを活かし、あらゆるシートシャッターの施工・工事に対応できることが当社の強みです。<br /><br />

                    何かご質問やご要望がございましたら、お気軽にお問い合わせください。皆様からのご連絡を心よりお待ちしております。
                  </p>
                  <div className="p1 ml-20" style={{textAlign: 'right', marginTop: '30px'}}>
                    <strong>現長株式会社</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Strengths */}
        <section className="section-block feature-2 no-padding-bottom">
          <div className="row flex">
            <div className="column width-8 push-3 offset-1">
              <div className="feature-image mb-mobile-50">
                <div className="feature-image-inner center-on-mobile horizon" data-animate-in="preset:slideInRightShort;duration:3000;delay:300ms;" data-threshold="0.3">
                  <div className="img-wrap1">
                    <div className="pc"><img src="/img/top02.jpg" alt="技術力" /></div>
                    <div className="sp"><img src="/img/top02_sp.jpg" alt="技術力" /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column width-3 pull-9 tategaki02">
              <div className="feature-content">
                <div className="feature-content-inner left center_sp horizon" data-animate-in="preset:slideInLeftShort;duration:3000;" data-threshold="0.3">
                  <h2 className="lspacing-medium f16 ml-20 lh15">現長の強み<span className="pc">　　　</span><br className="sp" /><span className="allura f_grn shin ls01 ml-20">Strengths</span></h2>
                  <p className="p1 ml-20">
                    <strong className="f_grn">トップレベルの技術力</strong><br />
                    長年の経験と高度な技術力で、高品質な施工を実現します。<br /><br />

                    <strong className="f_grn">顧客満足の追求</strong><br />
                    お客様のニーズに寄り添い、最高のサービスを提供します。<br /><br />

                    <strong className="f_grn">幅広い業種への対応</strong><br />
                    工場、倉庫、物流施設、商業施設など、多様な業種に対応。<br /><br />

                    <strong className="f_grn">豊富な施工実績</strong><br />
                    数多くの施工実績から培った確かなノウハウがあります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section-block feature-2 right">
          <div className="row flex">
            <div className="column width-8">
              <div className="feature-image mb-mobile-50">
                <div className="feature-image-inner center-on-mobile horizon" data-animate-in="preset:slideInLeftShort;duration:3000;" data-threshold="0.3">
                  <div className="pc"><img src="/img/top03.jpg" alt="経営理念" /></div>
                  <div className="sp"><img src="/img/top03_sp.jpg" alt="経営理念" /></div>
                </div>
              </div>
            </div>
            <div className="column width-3 offset-1 tategaki02">
              <div className="feature-content">
                <div className="feature-content-inner left center_sp horizon" data-animate-in="preset:slideInRightShort;duration:3000;delay:300ms;" data-threshold="0.3">
                  <h2 className="lspacing-medium f16 ml-20 lh15">経営理念<span className="pc">　　　</span><br className="sp" /><span className="allura f_grn shin ls01 ml-20">Philosophy</span></h2>
                  <p className="p1 ml-20">
                    トップレベルの技術と顧客満足<br /><br />

                    私たちは、お客様に最高品質の施工とサービスを提供することを使命としています。<br /><br />

                    常に技術革新を追求し、お客様の期待を超える価値を創造してまいります。<br /><br />

                    信頼と実績を積み重ね、建設業界のリーディングカンパニーを目指します。
                  </p>
                  <a href="/contact/" className="button large bkg-btn01 bkg-hover-btn01">>　お問い合わせ</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animation Script */}
        <Script src="/js/plugins.js" strategy="lazyOnload" />
        <Script src="/js/scripts.js" strategy="lazyOnload" />
      </div>
    </>
  )
}
