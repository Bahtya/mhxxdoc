const fs = require('fs');
const path = require('path');

// Translation mappings
const translations = {
  // Navigation labels
  '[大型ア行]': '[大型-A行]',
  '[大型カ行]': '[大型-K行]',
  '[大型サ行]': '[大型-S行]',
  '[大型タ行]': '[大型-T行]',
  '[大型ナ～ハ行]': '[大型-N~H行]',
  '[大型マ～ラ行]': '[大型-M~R行]',
  'あ行': 'A行',
  'か行': 'K行',
  'さ行': 'S行',
  'た行': 'T行',
  '之行': 'N行',
  'は行': 'H行',
  'ま行': 'M行',
  'や行': 'Y行',
  'ら行': 'R行',
  'わ行': 'W行',

  // Common terms
  'lang="ja"': 'lang="zh"',
  '剥ぎ取り': '剥取',
  '落与し物': '掉落物',
  '特徴': '特征',
  '掲載': '收录',
  '全データ': '全部数据',
  '鋭利': '锐利',
  '強靭': '强韧',
  '覆われた': '覆盖',
  '持つ': '拥有',
  '赤热化': '赤热化',
  '状況下': '状况下',
  '変わる': '改变',
  '激しい': '激烈',
  '繰り出す': '使出',
  '起こる': '发生',
  '含む': '包含',
  '必要': '需要',
  '素材': '素材',
  '武器': '武器',
  '防具': '防具',
  '装飾品': '装饰品',
  'スキル': '技能',
  '狩技': '狩技',
  'アイテム': '道具',
  'クエスト': '任务',
  'モンスター': '怪物',
  'マップ': '地图',
};

function translateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    let changed = false;

    for (const [jp, zh] of Object.entries(translations)) {
      if (content.includes(jp)) {
        content = content.split(jp).join(zh);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf-8');
      return true;
    }
    return false;
  } catch (err) {
    console.error(`Error processing ${filePath}: ${err.message}`);
    return false;
  }
}

function processDirectory(dir) {
  let count = 0;
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      count += processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      if (translateFile(filePath)) {
        count++;
        console.log(`Translated: ${filePath}`);
      }
    }
  }
  return count;
}

// Run
const dataDir = path.join(__dirname, 'data');
console.log('Starting translation...');
const count = processDirectory(dataDir);
console.log(`\nTranslation complete. ${count} files updated.`);
