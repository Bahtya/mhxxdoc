const fs = require('fs');
const path = require('path');

// 页面头部模板
const getHeader = (pageTitle, breadcrumb, rootPath) => `<!DOCTYPE html>
<html lang="zh-CN" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${pageTitle} - MHXX怪物猎人XX攻略大全">
  <title>${pageTitle} - MHXX攻略大全</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Russo+One&display=swap" rel="stylesheet">
  <link rel="icon" href="${rootPath}index/favicon.ico" sizes="any">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: { DEFAULT: '#7C3AED', light: '#A78BFA', dark: '#5B21B6' },
            accent: { DEFAULT: '#F43F5E', light: '#FB7185' },
            dark: { DEFAULT: '#0F0F23', 50: '#1A1A2E', 100: '#16162A', 200: '#121226', 300: '#0F0F23', 400: '#0B0B1F' },
          },
          fontFamily: { display: ['Russo One', 'sans-serif'], body: ['Chakra Petch', 'sans-serif'] },
        },
      },
    }
  </script>
  <style>
    body{font-family:'Chakra Petch',sans-serif;background:#0F0F23;background-image:radial-gradient(ellipse at top,rgba(124,58,237,0.15) 0%,transparent 50%),linear-gradient(rgba(124,58,237,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.03) 1px,transparent 1px);background-size:100% 100%,50px 50px,50px 50px}
    .font-display{font-family:'Russo One',sans-serif}
    .text-neon{text-shadow:0 0 5px #7C3AED,0 0 10px #7C3AED,0 0 20px #7C3AED}
    .shadow-neon{box-shadow:0 0 5px #7C3AED,0 0 20px #7C3AED}
    ::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#0B0B1F}::-webkit-scrollbar-thumb{background:#7C3AED;border-radius:4px}
    .nav-link::after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:0;height:2px;background:#7C3AED;box-shadow:0 0 10px #7C3AED;transition:width .3s}
    .nav-link:hover::after,.nav-link.active::after{width:75%}
    .sidebar-link{display:block;padding:8px 16px;color:#9CA3AF;font-size:14px;transition:all .2s}
    .sidebar-link:hover{padding-left:24px;background:rgba(124,58,237,0.1);color:#fff}
    .data-table{width:100%;border-collapse:collapse}
    .data-table th{background:rgba(124,58,237,0.2);color:#A78BFA;font-family:'Russo One',sans-serif;text-align:left;padding:12px 16px;border-bottom:1px solid rgba(124,58,237,0.3)}
    .data-table td{padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.1)}
    .data-table tr:hover td{background:rgba(124,58,237,0.1)}
    .breadcrumb{display:flex;align-items:center;gap:8px;font-size:14px;color:#9CA3AF;margin-bottom:24px}
    .breadcrumb a{color:#A78BFA}.breadcrumb a:hover{color:#7C3AED}
    .tag{display:inline-block;padding:2px 8px;font-size:12px;border-radius:4px;margin:2px}
    .tag-new{background:rgba(168,85,247,0.2);color:#C084FC}
    .tag-g{background:rgba(236,72,153,0.2);color:#F472B6}
    .th1{background:rgba(124,58,237,0.3);color:#fff;font-family:'Russo One',sans-serif;padding:12px 16px}
    .th4{background:rgba(124,58,237,0.15);color:#A78BFA;padding:8px 16px;font-size:14px}
    .t0{width:100%;border-collapse:collapse;margin-bottom:16px;background:rgba(22,22,42,0.8);border-radius:8px;overflow:hidden}
    .t0 td{padding:10px 16px;border-bottom:1px solid rgba(124,58,237,0.1)}
    .t0 tr:last-child td{border-bottom:none}
    .t0 a{color:#A78BFA;transition:color .2s}.t0 a:hover{color:#7C3AED}
    .b{font-weight:bold}.box1{background:rgba(22,22,42,0.8);border-radius:12px;padding:20px;margin-bottom:24px;border:1px solid rgba(124,58,237,0.2)}
    .icon1{display:inline-block;width:8px;height:8px;background:#7C3AED;border-radius:50%;margin-right:8px;box-shadow:0 0 10px #7C3AED}
  </style>
</head>
<body class="min-h-screen text-gray-100 antialiased">
<nav class="fixed top-4 left-4 right-4 z-50 bg-dark-100/90 backdrop-blur-md border border-primary/20 rounded-2xl shadow-2xl">
<div class="max-w-7xl mx-auto px-6">
<div class="flex items-center justify-between h-16">
<a href="${rootPath}index/index.html" class="flex items-center gap-3">
<div class="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
</div>
<span class="font-display text-xl text-neon">MHXX DOC</span>
</a>
<div class="hidden md:flex flex-1 max-w-md mx-8">
<div class="relative w-full">
<input type="text" placeholder="搜索怪物、武器、任务..." class="w-full px-4 py-2 pl-10 bg-dark-200 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:shadow-neon transition-all">
<svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
</div>
</div>
<div class="hidden md:flex items-center gap-1">
<a href="${rootPath}index/index.html" class="nav-link relative px-4 py-2 text-gray-300 hover:text-primary transition-colors">首页</a>
<a href="${rootPath}data/2501.html" class="nav-link relative px-4 py-2 text-gray-300 hover:text-primary transition-colors">怪物</a>
<a href="${rootPath}data/1900.html" class="nav-link relative px-4 py-2 text-gray-300 hover:text-primary transition-colors">武器</a>
<a href="${rootPath}data/2300.html" class="nav-link relative px-4 py-2 text-gray-300 hover:text-primary transition-colors">防具</a>
<a href="${rootPath}data/2859.html" class="nav-link relative px-4 py-2 text-gray-300 hover:text-primary transition-colors">任务</a>
</div>
</div>
</div>
</nav>
<main class="pt-24 pb-12">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<nav class="breadcrumb">
<a href="${rootPath}index/index.html">首页</a>
<span>/</span>
<span>${breadcrumb}</span>
</nav>
`;

// 页面底部模板
const getFooter = (rootPath) => `
</div>
</main>
<footer class="border-t border-gray-800 py-8 mt-12">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex flex-col md:flex-row justify-between items-center gap-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
</div>
<span class="font-display text-gray-400">MHXX DOC</span>
</div>
<div class="text-sm text-gray-500">
<a href="https://github.com/Bahtya/mhxxdoc" class="hover:text-primary transition-colors">GitHub</a>
<span class="mx-2">|</span>
<a href="https://mhxxdoc.vercel.app" class="hover:text-primary transition-colors">Vercel</a>
</div>
<div class="text-xs text-gray-600">Monster Hunter XX © CAPCOM</div>
</div>
</div>
</footer>
</body>
</html>`;

// 翻译映射
const translations = {
  // 导航标签
  '[大型ア行]': '[大型-A行]', '[大型カ行]': '[大型-K行]', '[大型サ行]': '[大型-S行]',
  '[大型タ行]': '[大型-T行]', '[大型ナ～ハ行]': '[大型-N~H行]', '[大型マ～ラ行]': '[大型-M~R行]',
  'あ行': 'A行', 'か行': 'K行', 'さ行': 'S行', 'た行': 'T行', '之行': 'N行',
  'は行': 'H行', 'ま行': 'M行', 'や行': 'Y行', 'ら行': 'R行', 'わ行': 'W行',
  // 常用词汇
  'lang="ja"': 'lang="zh"', '剥ぎ取り': '剥取', '落とし物': '掉落物',
  '特徴': '特征', '掲載': '收录', '全データ': '全部数据',
  '鋭利': '锐利', '強靭': '强韧', '覆われた': '覆盖', '持つ': '拥有',
  '赤热化': '赤热化', '状況下': '状况下', '変わる': '改变',
  '激しい': '激烈', '繰り出す': '使出', '起こる': '发生',
  // 标题翻译
  '武器派生': '武器派生', '防具': '防具', '装飾品': '装饰品',
  '道具': '道具', '地图': '地图', '任务': '任务', '怪物': '怪物',
  '技能': '技能', '狩技': '狩技', '猫饭': '猫饭',
  // CSS类
  'class="b"': 'class="b"', 'class="th1"': 'class="th1"', 'class="th4"': 'class="th4"',
  // 颜色
  'orangered': '#F97316', 'color:orangered': 'color:#F97316',
};

// 从文件名获取页面标题
const getPageTitle = (filename, content) => {
  // 尝试从title标签获取
  const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i);
  if (titleMatch) {
    return titleMatch[1].replace(/【MHXX】/, '').replace(/攻略大全/, '').trim();
  }
  return filename;
};

// 获取根路径 - ida目录需要 ../ 返回根目录
const getRootPath = (filePath) => {
  return '../';
};

// 处理单个文件
const processFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');

    // 跳过已经处理过的文件
    if (content.includes('font-display') && content.includes('Russo One')) {
      return { skipped: true };
    }

    const filename = path.basename(filePath, '.html');
    const rootPath = getRootPath(filePath);
    const pageTitle = getPageTitle(filename, content);

    // 提取主要内容
    let mainContent = '';

    // 尝试提取body内容
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    if (bodyMatch) {
      mainContent = bodyMatch[1];
      // 移除旧的导航和页脚
      mainContent = mainContent.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '');
      mainContent = mainContent.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '');
      mainContent = mainContent.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
      mainContent = mainContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    }

    // 翻译
    for (const [jp, zh] of Object.entries(translations)) {
      mainContent = mainContent.split(jp).join(zh);
    }

    // 生成新页面
    const newPage = getHeader(pageTitle, pageTitle, rootPath) +
                   `<div class="lg:col-span-3">
                     <div class="bg-dark-100/80 backdrop-blur border border-primary/20 rounded-xl p-6">
                       <header class="mb-6">
                         <h1 class="font-display text-2xl md:text-3xl text-white mb-2">${pageTitle}</h1>
                       </header>
                       ${mainContent}
                     </div>
                   </div>` +
                   getFooter(rootPath);

    fs.writeFileSync(filePath, newPage, 'utf-8');
    return { success: true, title: pageTitle };
  } catch (err) {
    return { error: err.message };
  }
};

// 主函数
const main = () => {
  const idaDir = path.join(__dirname, 'ida');

  if (!fs.existsSync(idaDir)) {
    console.error('ida directory not found!');
    return;
  }

  const files = fs.readdirSync(idaDir);
  let processed = 0, skipped = 0, errors = 0;

  console.log('Starting ida directory page redesign...\n');
  console.log(`Found ${files.filter(f => f.endsWith('.html')).length} HTML files\n`);

  for (const file of files) {
    if (!file.endsWith('.html')) continue;

    const filePath = path.join(idaDir, file);
    const result = processFile(filePath);

    if (result.skipped) {
      skipped++;
    } else if (result.success) {
      processed++;
      if (processed % 100 === 0) {
        console.log(`Processed: ${processed} files...`);
      }
    } else if (result.error) {
      errors++;
      console.error(`Error: ${file} - ${result.error}`);
    }
  }

  console.log(`\n=== Complete ===`);
  console.log(`Processed: ${processed}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Errors: ${errors}`);
};

main();
