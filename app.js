const express = require('express');
const path = require('path');
const app = express();

// 设置EJS模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 静态资源中间件
app.use(express.static(path.join(__dirname, 'public')));
// 工具数据
const tools = [
  {
    id: 'image-compressor',
    title: '图片压缩',
    description: '无损压缩图片，支持JPG/PNG/WebP格式',
    icon: 'fa-compress',
    category: '图片处理'
  },
  {
    id: 'image-converter',
    title: '图片格式转换',
    description: 'JPG、PNG、WebP、GIF格式互转',
    icon: 'fa-file-image',
    category: '格式转换'
  },
];

// 首页路由 - 工具集合页面
app.get('/', (req, res) => {
  let page_data = {
    title: '云河工具站 - 免费在线工具集合',
    tools: tools,
    description: '云河工具站 - 提供免费在线工具集合，包括JSON格式化、单位换算、图片压缩、密码生成等多种实用工具，随时随地便捷使用',
    keywords: '在线工具,免费工具,JSON格式化,单位换算,图片压缩,密码生成,开发工具,文本处理',
  }
  res.render('home', { ...page_data }, (err, html) => {
    if (err) { console.log(err); }
    res.render('layout', {
      ...page_data,
      main: html
    });
  });
});

// 图片格式转换器路由
app.get('/image-converter', (req, res) => {
  let page_data = {
    title: '云河工具站 - 批量图片格式转换器',
    description: '云河工具站 - 免费在线批量图片格式转换工具，支持JPG、PNG、WebP、GIF格式互转，一次性上传最多10张图片，在线转换无需上传服务器，安全高效。',
    keywords: '批量图片转换,在线图片转换,图片格式转换,JPG转PNG,PNG转WebP,WebP转换,GIF转换,免费图片处理'
  };

  res.render('image-converter', { ...page_data }, (err, html) => {
    if (err) { console.log(err); }
    res.render('layout', {
      ...page_data,
      main: html
    });
  });
});

// 图片压缩器路由
app.get('/image-compressor', (req, res) => {
  let page_data = {
    title: '云河工具站 - 批量图片压缩器',
    description: '云河工具站 - 免费在线批量图片压缩工具，支持JPG、PNG、WebP格式，一次性上传最多10张图片，自定义压缩质量，有效减小图片体积，提升网站加载速度',
    keywords: '批量图片压缩,在线图片压缩,图片压缩工具,JPG压缩,PNG压缩,WebP转换,免费图片处理'
  }
  res.render('image-compressor', { ...page_data }, (err, html) => {
    if (err) { console.log(err); }
    res.render('layout', {
      ...page_data,
      main: html
    });
  });
});


// 启动服务器
const PORT = process.env.PORT || 5412;
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});