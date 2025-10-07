const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, '../public/_monju/index.html');

let content = fs.readFileSync(inputFile, 'utf8');

// コンセプトセクションの説明文を置換（lines 156-158）
content = content.replace(
  /京都府北部、自然豊かな"海の京都"と<br class="pc">\n呼ばれる地域にある日本三景"天橋立"<br class="pc">\n太古の昔から脈々と受け継がれた自然が今も広がります/,
  '大阪を拠点に全国対応<br class="pc">\nシートシャッター全般の計画・施工から<br class="pc">\nメンテナンスまで、品質を追求する専門施工会社'
);

// 念のため、別パターンでも試行
if (content.includes('京都府北部')) {
  content = content.replace(
    /京都府北部、自然豊かな"海の京都"と<br class="pc">[\s\S]*?太古の昔から脈々と受け継がれた自然が今も広がります/,
    '大阪を拠点に全国対応<br class="pc">\nシートシャッター全般の計画・施工から<br class="pc">\nメンテナンスまで、品質を追求する専門施工会社'
  );
}

// ムービーセクションの説明文から不要な文言を削除（すでに置換済みかチェック）
if (content.includes('NMB48の塩月希依音さんと一緒に、京都府北部の「丹後・天橋立」エリアの魅力を伝えていただいています。')) {
  content = content.replace(
    /NMB48の塩月希依音さんと一緒に、京都府北部の「丹後・天橋立」エリアの魅力を伝えていただいています。[\s\n]*/,
    ''
  );
}

fs.writeFileSync(inputFile, content, 'utf8');
console.log('最終修正完了: ' + inputFile);

// 残りの京都関連テキストをチェック
const remainingKyoto = content.match(/京都|天橋立|丹後|文珠荘|文殊荘/gi);
if (remainingKyoto && remainingKyoto.length > 0) {
  console.log('\n注意: まだ以下のテキストが残っています:');
  console.log(remainingKyoto.slice(0, 10));
} else {
  console.log('\n✓ すべての旧テキストの置換が完了しました');
}
