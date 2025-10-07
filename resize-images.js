const sharp = require('sharp');
const path = require('path');

const imgDir = path.join(__dirname, 'public/img');
const origDir = path.join(imgDir, 'original');

async function resizeImages() {
  try {
    // スライダー画像 (2000x1280)
    const sliders = [
      '95ad7d43287adbbb0811160d6cf702c3.jpg',
      'e82cf91f655b813bd450cee8ed9874c0.jpg',
      '6ea691b1a938acf1265ab0f6ed34c4f0.jpg',
      '3c451c263d9ddfd9cd44923161401cb5.jpg',
      'c72139febef1db4a95832aa08bb566af.jpg'
    ];

    for (let i = 0; i < sliders.length; i++) {
      const num = String(i + 1).padStart(2, '0');
      await sharp(path.join(origDir, sliders[i]))
        .resize(2000, 1280, { fit: 'cover', position: 'center' })
        .jpeg({ quality: 85 })
        .toFile(path.join(imgDir, `00slider${num}.jpg`));
      console.log(`✓ 00slider${num}.jpg`);
    }

    // トップ画像 PC版 (1200x800)
    const topPC = [
      { src: '1e5bd33cfea2ba7b16b640a0b058a08b.jpg', dest: 'top01.jpg' },
      { src: '493ab989a93aa43cc759b61534d2b6ba.jpg', dest: 'top02.jpg' },
      { src: '52b8bfed7f1c19062ae19c5a48e8c932.jpg', dest: 'top03.jpg' },
      { src: '396989221601a8d0d5bdaa186c51d451.jpg', dest: 'top04.jpg' }
    ];

    for (const img of topPC) {
      await sharp(path.join(origDir, img.src))
        .resize(1200, 800, { fit: 'cover', position: 'center' })
        .jpeg({ quality: 85 })
        .toFile(path.join(imgDir, img.dest));
      console.log(`✓ ${img.dest}`);
    }

    // トップ画像 SP版 (600x450)
    const topSP = [
      { src: '12cb2ba539fdff1f9fcef380d736ef79.jpg', dest: 'top01_sp.jpg' },
      { src: '9dc421cd31afe6dcfdccf8b2044d3fa9.jpg', dest: 'top02_sp.jpg' },
      { src: 'fcdfcb44f1d7dcb3f843065f8898ba24.jpg', dest: 'top03_sp.jpg' },
      { src: 'e0ba663e054501f887a86a069fbb067d.jpg', dest: 'top04_sp.jpg' }
    ];

    for (const img of topSP) {
      await sharp(path.join(origDir, img.src))
        .resize(600, 450, { fit: 'cover', position: 'center' })
        .jpeg({ quality: 85 })
        .toFile(path.join(imgDir, img.dest));
      console.log(`✓ ${img.dest}`);
    }

    // 背景画像 (1920x1080)
    await sharp(path.join(origDir, '4cecf48f476f4a22948811556806041a.jpg'))
      .resize(1920, 1080, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 85 })
      .toFile(path.join(imgDir, '00back12_sp01.jpg'));
    console.log('✓ 00back12_sp01.jpg');

    await sharp(path.join(origDir, '66be339a42c4e15ab5b2f32a93e821e0.jpg'))
      .resize(1920, 1080, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 85 })
      .toFile(path.join(imgDir, '00back21.jpg'));
    console.log('✓ 00back21.jpg');

    // ケーキ画像
    await sharp(path.join(origDir, '4c8772a5b3538a94399233d45337cad5.jpg'))
      .resize(800, 600, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 85 })
      .toFile(path.join(imgDir, '01cake01.jpg'));
    console.log('✓ 01cake01.jpg');

    await sharp(path.join(origDir, '9d7da18ea30ecd033456ab10dcb29768.jpg'))
      .resize(600, 450, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 85 })
      .toFile(path.join(imgDir, '01cake01_sp.jpg'));
    console.log('✓ 01cake01_sp.jpg');

    console.log('\n✅ すべての画像のリサイズが完了しました');
  } catch (error) {
    console.error('エラー:', error);
  }
}

resizeImages();
