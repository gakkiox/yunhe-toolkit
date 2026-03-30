const express = require('express');
const path = require('path');
const app = express();
const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');
const { Readable } = require('stream');

// 导入路由
const routes = require('./routes');

// 设置EJS模板引擎
app.engine('ejs', require('ejs-mate')) // 关键
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 静态资源中间件
app.use(express.static(path.join(__dirname, 'public')));

const HOSTNAME = 'https://tools.useai.sbs'; // 替换为你的域名
let sitemapCache = null;
const CACHE_TTL = 3600 * 1000; // 1小时过期

// 使用路由
app.use('/', routes);

// 生成 sitemap.xml 路由
app.get('/sitemap.xml', async (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.header('Content-Encoding', 'gzip');

  if (sitemapCache) {
    return res.send(sitemapCache);
  }

  try {
    // 1. 你的链接列表（必须至少1个）
    const links = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/image-converter', changefreq: 'weekly', priority: 0.8 },
      { url: '/image-compressor', changefreq: 'weekly', priority: 0.8 },
      { url: '/audio-converter', changefreq: 'weekly', priority: 0.8 },
      { url: '/audio-cutter', changefreq: 'weekly', priority: 0.8 },
      { url: '/base64', changefreq: 'weekly', priority: 0.8 },
      { url: '/json-format', changefreq: 'weekly', priority: 0.8 },
    ];

    // 2. 创建流
    const smStream = new SitemapStream({ hostname: HOSTNAME });
    const gzip = createGzip();

    // ✅ 修复：正确管道顺序：数据 → sitemap → gzip
    const stream = Readable.from(links)
      .pipe(smStream)
      .pipe(gzip);

    // 3. 等待生成完成
    const sitemap = await streamToPromise(stream);
    sitemapCache = sitemap;
    setTimeout(() => sitemapCache = null, CACHE_TTL);

    // 返回
    res.send(sitemap);

  } catch (err) {
    console.error('Sitemap 生成错误:', err);
    res.status(500).end();
  }
});

app.use((req, res) => {
  res.status(404).render('404');
});

// 启动服务器
const PORT = process.env.PORT || 5412;
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});