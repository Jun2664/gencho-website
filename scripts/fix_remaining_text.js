const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, '../public/_monju/index_gencho.html');
const outputFile = path.join(__dirname, '../public/_monju/index_gencho_fixed.html');

let content = fs.readFileSync(inputFile, 'utf8');

// コンセプトセクションの見出しを修正
content = content.replace(
  /目の前に広がる絶景と上質な空間<br>\s*天橋立のほとりにあるリゾート旅館<\/h2>/,
  '確かな技術と誠実な施工で信頼を築く<br>\nシートシャッター専門施工会社</h2>'
);

// コンセプトセクションの説明文を修正
content = content.replace(
  /京都府北部、自然豊かな"海の京都"と<br class="pc">\s*呼ばれる地域にある日本三景"天橋立"<br class="pc">\s*太古の昔から脈々と受け継がれた自然が今も広がります/,
  '大阪を拠点に全国対応<br class="pc">\nシートシャッター全般の計画・施工から<br class="pc">\nメンテナンスまで、品質を追求する専門施工会社'
);

// ムービータイトルを修正
content = content.replace(
  /JTB<br>\s*ぶらり 丹後・天橋立 ムービー<\/h2>/,
  '現長株式会社<br>施工事例紹介ムービー</h2>'
);

// ムービー説明文を修正  
content = content.replace(
  /「ぶらり 丹後・天橋立」で当館「文珠荘」が紹介されました。\s*NMB48の塩月希依音さんと一緒に、京都府北部の「丹後・天橋立」エリアの魅力を伝えていただいています。/,
  '<!-- TODO: 未確定 - 施工事例動画の説明文 -->\n現長株式会社のシートシャッター施工事例をご紹介します。\n確かな技術と品質管理により、お客様のニーズに最適なソリューションを提供しています。'
);

// 各セクションの説明文を修正
content = content.replace(
  /窓の外には天橋立の松並木<br>\s*テラスに吹き込む心地よい風<br>\s*天橋立を存分にご堪能いただける空間/,
  '全国各地の現場で培った確かな技術<br>\n各メーカーに対応した施工ノウハウ<br>\n高品質な施工をご提供いたします'
);

content = content.replace(
  /肌に染み入るしっとりとした泉質<br>\s*四季が織り成す開放的な空間<br>\s*上質なサウナで心身共にととのえる/,
  '定期点検から緊急対応まで<br>\n設備の長寿命化をサポート<br>\n安心の保守・メンテナンスサービス'
);

content = content.replace(
  /四季折々の豊かな旬素材<br>\s*匠の技で吟選の器に落とし込まれた<br>\s*至福の料理に舌鼓/,
  '各種メーカーの製品を取り扱い<br>\n現場に最適な資材をご提案<br>\n品質にこだわった製品ラインナップ'
);

content = content.replace(
  /天橋立の自然と景観を五感で感じる<br>\s*広々とした上質な空間<br>\s*そこは海の京都に佇むリゾート地/,
  '大阪本社をはじめ全国に拠点を展開<br>\n必要資格を保有した技術者が在籍<br>\nお客様に寄り添う施工会社'
);

// スペシャルムービータイトルを修正
content = content.replace(
  /和のリゾート「文珠荘」<br>\s*スペシャルムービー/,
  '現長株式会社<br>スペシャルムービー'
);

// フッターのリンクを修正（重複スラッシュ修正）
content = content.replace(
  /href="\/https:\/\/www\.gencho\.biz\/"/g,
  'href="https://www.gencho.biz/"'
);

fs.writeFileSync(outputFile, content, 'utf8');
console.log('修正完了: ' + outputFile);
console.log('次のコマンドで元のファイルを置き換えてください:');
console.log('mv public/_monju/index_gencho_fixed.html public/_monju/index.html');
