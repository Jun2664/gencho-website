const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, '../public/_monju/index.html');
const outputFile = path.join(__dirname, '../public/_monju/index_gencho.html');

let content = fs.readFileSync(inputFile, 'utf8');

// メタタグ置換
content = content.replace(
  /<title>.*?<\/title>/,
  '<title>【公式】現長株式会社｜シートシャッター施工・建築工事</title>'
);

content = content.replace(
  /<meta name="description" content=".*?">/,
  '<meta name="description" content="現長株式会社はシートシャッター全般の計画・施工からメンテナンスまで対応する専門施工会社です。">'
);

content = content.replace(
  /<meta name="keywords" content=".*?">/,
  '<meta name="keywords" content="シートシャッター,施工,建築工事,メンテナンス,現長株式会社,テント倉庫">'
);

// OGP置換
content = content.replace(
  /<meta property="og:title" content=".*?">/,
  '<meta property="og:title" content="【公式】現長株式会社｜シートシャッター施工・建築工事">'
);

content = content.replace(
  /<meta property="og:description" content=".*?">/,
  '<meta property="og:description" content="現長株式会社はシートシャッター全般の計画・施工からメンテナンスまで対応する専門施工会社です。">'
);

content = content.replace(
  /<meta property="og:site_name" content=".*?">/,
  '<meta property="og:site_name" content="【公式】現長株式会社｜シートシャッター施工・建築工事">'
);

// ボタンテキスト置換
content = content.replace(/> 宿泊予約</g, '> お問い合わせ<');
content = content.replace(/「ネット」で予約/g, '「ネット」で問い合わせ');

// メニュー置換
content = content.replace(/文珠荘について/g, '現長株式会社について');
content = content.replace(/客　室/g, '施工実績');
content = content.replace(/温　泉/g, '保守・メンテナンス');
content = content.replace(/料　理/g, '取扱製品・資材');
content = content.replace(/館　内/g, '会社情報');
content = content.replace(/>ウェディング</g, '>採用情報<');

// サブメニュー置換
content = content.replace(/周辺観光/g, '対応エリア');
content = content.replace(/映像アルバム/g, '施工事例動画');
content = content.replace(/宿泊約款/g, '取引規約');

// ウェディングリンクを採用情報に置換
content = content.replace(/<li><a href="07wedd\/index\.html">採用情報<\/a><\/li>/, '<li><a href="https://en-gage.net/gencho/" target="_blank">採用情報</a></li>');

// SNSリンク置換
content = content.replace(/https:\/\/www\.instagram\.com\/amanohashidate_monjuso\//g, 'https://twitter.com/gencho416');
content = content.replace(/https:\/\/www\.facebook\.com\/kyoto\.ryokan\.monjusou/g, 'https://www.facebook.com/gencho416');
content = content.replace(/fa-brands fa-instagram/g, 'fa-brands fa-x-twitter');

// LINE削除（空白タグに）
content = content.replace(/<a href="https:\/\/page\.line\.me\/939wicec\?openQrModal=true"[^>]*>.*?<\/a>/g, '');

// コンセプトセクション置換
content = content.replace(
  /目の前に広がる絶景と上質な空間<br>\n天橋立のほとりにあるリゾート旅館/,
  '確かな技術と誠実な施工で信頼を築く<br>\nシートシャッター専門施工会社'
);

content = content.replace(/Resort Ryokan by Amanohashidate/g, 'Professional Construction Company');

content = content.replace(
  /京都府北部、自然豊かな"海の京都"と<br class="pc">\n呼ばれる地域にある日本三景"天橋立"<br class="pc">\n太古の昔から脈々と受け継がれた自然が今も広がります/,
  '大阪を拠点に全国対応<br class="pc">\nシートシャッター全般の計画・施工から<br class="pc">\nメンテナンスまで、品質を追求する専門施工会社'
);

// お知らせリンク先を全てgencho.bizに
content = content.replace(/https:\/\/monjusou\.com\/info\/\d+\//g, 'https://www.gencho.biz/');

// お知らせテキスト
content = content.replace(/冬の味覚「カニコース」ご予約受付中/, '新規施工事例を追加しました');
content = content.replace(/天橋立ビーチサイドBAR『Les Pins』8\/30、31/, '夏季休業のお知らせ');
content = content.replace(/宿泊招待券プレゼントキャンペーンのお知らせ/, 'ホームページをリニューアルしました');
content = content.replace(/Tripadvisor トラベラーズチョイス2025 受賞/, '新サービスのご案内');

// ムービータイトル置換
content = content.replace(/JTB<br>\nぶらり 丹後・天橋立 ムービー/, '現長株式会社<br>施工事例紹介ムービー');
content = content.replace(/Burari Tango Amanohashidate vol\.1/, 'GENCHO Construction Cases');
content = content.replace(
  /「ぶらり 丹後・天橋立」で当館「文珠荘」が紹介されました。\nNMB48の塩月希依音さんと一緒に、京都府北部の「丹後・天橋立」エリアの魅力を伝えていただいています。/,
  '現長株式会社のシートシャッター施工事例をご紹介します。\n確かな技術と品質管理により、お客様のニーズに最適なソリューションを提供しています。'
);

// セクション見出し置換
content = content.replace(/客　室<span class="pc">　　　<\/span>/g, '施工実績<span class="pc">　　　</span>');
content = content.replace(/>Rooms</g, '>Construction Cases<');

content = content.replace(/温　泉<span class="pc">　　　<\/span>/g, '保守・メンテナンス<span class="pc">　　　</span>');
content = content.replace(/>Onsen</g, '>Maintenance<');

content = content.replace(/料　理<span class="pc">　　　<\/span>/g, '取扱製品・資材<span class="pc">　　　</span>');
content = content.replace(/>Cuisine</g, '>Products<');

content = content.replace(/館　内<span class="pc">　　　<\/span>/g, '会社情報<span class="pc">　　　</span>');
content = content.replace(/>facility</g, '>Company Info<');

// セクション説明文置換
content = content.replace(
  /窓の外には天橋立の松並木<br>\nテラスに吹き込む心地よい風<br>\n天橋立を存分にご堪能いただける空間/,
  '全国各地の現場で培った確かな技術<br>\n各メーカーに対応した施工ノウハウ<br>\n高品質な施工をご提供いたします'
);

content = content.replace(
  /肌に染み入るしっとりとした泉質<br>\n四季が織り成す開放的な空間<br>\n上質なサウナで心身共にととのえる/,
  '定期点検から緊急対応まで<br>\n設備の長寿命化をサポート<br>\n安心の保守・メンテナンスサービス'
);

content = content.replace(
  /四季折々の豊かな旬素材<br>\n匠の技で吟選の器に落とし込まれた<br>\n至福の料理に舌鼓/,
  '各種メーカーの製品を取り扱い<br>\n現場に最適な資材をご提案<br>\n品質にこだわった製品ラインナップ'
);

content = content.replace(
  /天橋立の自然と景観を五感で感じる<br>\n広々とした上質な空間<br>\nそこは海の京都に佇むリゾート地/,
  '大阪本社をはじめ全国に拠点を展開<br>\n必要資格を保有した技術者が在籍<br>\nお客様に寄り添う施工会社'
);

// スペシャルムービー
content = content.replace(/和のリゾート「文珠荘」<br>\nスペシャルムービー/, '現長株式会社<br>スペシャルムービー');

content = content.replace(
  /吉村順三氏の意志を受け継ぎながら、「和のリゾート」をテーマに心和む水際の風景、快適な泊まり心地、天橋立の絶景と自然美の癒しを感じていただける空間をご提供しています。/,
  'シートシャッター全般の計画・施工からメンテナンスまで、各メーカーに対応。必要資格を取得し、品質を追求する施工会社として、お客様のニーズに最適なソリューションを提供いたします。'
);

// ケーキリンクを採用情報に
content = content.replace(/https:\/\/cake\.jp\/inn\/cart\/monjusou\/\?r=1/g, 'https://en-gage.net/gencho/');

// モーダル内のコンテンツ
content = content.replace(/<div class="otoi01">ご予約<\/div>/, '<div class="otoi01">お問い合わせ</div>');

// 予約リンクをお問い合わせに
content = content.replace(
  /https:\/\/reserve\.489ban\.net\/client\/monjusou\/.*?(?=['"])/g,
  'https://www.gencho.biz/%E8%A4%87%E8%A3%BD-%E4%BA%8B%E6%A5%AD%E5%86%85%E5%AE%B9'
);

// モーダルボタンテキスト
content = content.replace(/「日付」で選ぶ（空室状況）/, 'お問い合わせフォーム');
content = content.replace(/「プラン」で選ぶ/, '「サービス」で選ぶ');
content = content.replace(/「お部屋」で選ぶ/, '「施工実績」を見る');
content = content.replace(/ご予約内容の確認・変更・取消/, '電話で問い合わせ: 06-6585-9068');

// モーダル詳細リンク置換
const modalSection = content.match(/<div id="signup-lightbox"[\s\S]*?<!-- Signup Modal End -->/);
if (modalSection) {
  let newModal = modalSection[0];
  newModal = newModal.replace(
    /<div class="column width-6">\s*<a href="[^"]*"[^>]*>　> お問い合わせフォーム<\/a>/,
    '<div class="column width-6">\n<a href="https://www.gencho.biz/%E8%A4%87%E8%A3%BD-%E4%BA%8B%E6%A5%AD%E5%86%85%E5%AE%B9" target="_blank" class="button xlarge bkg-theme-blk bkg-hover-theme-blk1 w100 mb-10">　> お問い合わせフォーム</a>'
  );
  newModal = newModal.replace(
    /<div class="column width-6">\s*<a href="[^"]*"[^>]*>　>「サービス」で選ぶ<\/a>/,
    '<div class="column width-6">\n<a href="https://www.gencho.biz/services-4" target="_blank" class="button xlarge bkg-theme-blk bkg-hover-theme-blk1 w100 mb-10">　>「サービス」で選ぶ</a>'
  );
  newModal = newModal.replace(
    /<div class="column width-6">\s*<a href="[^"]*"[^>]*>　>「施工実績」を見る<\/a>/,
    '<div class="column width-6">\n<a href="02room/index.html" class="button xlarge bkg-theme-blk bkg-hover-theme-blk1 w100 mb-10">　>「施工実績」を見る</a>'
  );
  newModal = newModal.replace(
    /<div class="column width-12 mt-10">\s*<a href="[^"]*"[^>]*>　> 電話で問い合わせ[^<]*<\/a>/,
    '<div class="column width-12 mt-10">\n<a href="tel:06-6585-9068" class="button medium bkg-theme-gry bkg-hover-theme-blk1 w100">　> 電話で問い合わせ: 06-6585-9068</a>'
  );
  content = content.replace(modalSection[0], newModal);
}

// 会社詳細セクション
content = content.replace(/文珠荘 ご案内<br><span class="allura f_grn f09">Monjusou Details/, '現長株式会社 ご案内<br><span class="allura f_grn f09">GENCHO Details');

// 住所と電話番号
content = content.replace(/〒626-0001京都府宮津市天の橋立海岸　TEL：0772-22-7111/, '〒550-0013 大阪府大阪市西区新町1-1-26　TEL：06-6585-9068');

// 求人情報を採用情報に
content = content.replace(/https:\/\/en-gage\.net\/monjusou_saiyo\//g, 'https://en-gage.net/gencho/');
content = content.replace(/求人情報/, '採用情報');

// フッター
content = content.replace(/---　MONJUSOU GROUP　---/, '---　GENCHO GROUP　---');
content = content.replace(/文珠荘グループ/, '現長株式会社');
content = content.replace(/松露亭/, '関東支店');
content = content.replace(/対橋楼/, '東海支店');
content = content.replace(/勘七茶屋/, '名古屋営業所');

content = content.replace(/https:\/\/shourotei\.com\//g, 'https://www.gencho.biz/');
content = content.replace(/https:\/\/taikyourou\.com\//g, 'https://www.gencho.biz/');
content = content.replace(/_monju\/group\/chaya\//g, 'https://www.gencho.biz/');
content = content.replace(/_monju\/group\//g, 'https://www.gencho.biz/');

content = content.replace(/Copyright\(C\) MONJUSOU GROUP , All Rights Reserved\./, 'Copyright(C) GENCHO Corporation , All Rights Reserved.');

// TODO コメント追加
content = content.replace(/<div class="trip01">/, '<!-- TODO: 未確定 - バナー画像 -->\n<div class="trip01">');

content = content.replace(/<div id="post-142" class="line_box02">/, '<!-- TODO: 未確定 - お知らせコンテンツ -->\n<div id="post-142" class="line_box02">');

content = content.replace(/<h2 class="ls02 f16 center_sp">現長株式会社<br>施工事例紹介ムービー<\/h2>/, '<h2 class="ls02 f16 center_sp">現長株式会社<br>施工事例紹介ムービー</h2>\n<div class="allura f12 f_grn mb-10">GENCHO Construction Cases</div>\n<!-- TODO: 未確定 - 施工事例動画の説明文 -->');

fs.writeFileSync(outputFile, content, 'utf8');
console.log('変換完了: ' + outputFile);
console.log('次のコマンドで元のファイルを置き換えてください:');
console.log('mv public/_monju/index_gencho.html public/_monju/index.html');
