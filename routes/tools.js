const express = require('express');
const router = express.Router();
const split_string = "C93BDC78EBB83EAA";

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
  {
    id: 'audio-converter',
    title: '音频格式转换',
    description: '在线音频格式转换工具，支持多种音频格式互转',
    icon: 'fa-volume-up',
    category: '格式转换'
  },
  {
    id: 'audio-cutter',
    title: '音频裁切',
    description: '在线音频裁切工具，支持精确截取音频片段',
    icon: 'fa-cut',
    category: '音频处理'
  },
  {
    id: 'video-to-audio',
    title: '音频提取',
    description: '从视频中提取音频，支持多种视频格式',
    icon: 'fa-video',
    category: '音频处理'
  },
  {
    id: 'base64',
    title: 'Base64加解密',
    description: 'Base64加解密工具、编码解码操作',
    icon: 'fa-shuffle',
    category: 'Base64解密'
  },
  {
    id: 'json-format',
    title: 'JSON格式化',
    description: 'JSON格式化工具、支持语法高亮',
    icon: 'fa-file-code me-1',
    category: 'Base64解码'
  },
];

// 首页路由 - 工具集合页面
router.get('/', (req, res) => {
  let page_data = {
    title: '云河工具站 - 免费在线工具集合',
    tools: tools,
    description: '云河工具站 - 提供免费在线工具集合，包括JSON格式化、单位换算、图片压缩、密码生成等多种实用工具，随时随地便捷使用',
    keywords: '在线工具,免费工具,JSON格式化,单位换算,图片压缩,密码生成,开发工具,文本处理',
  }
  res.render('home', { ...page_data }, (err, html_template) => {
    if (err) { console.log(err); };
    let [html, page_script, page_style] = html_template.split(split_string);
    res.render('layout', {
      ...page_data,
      main: html,
      page_script,
      page_style
    });
  });
});

// 图片格式转换器路由
router.get('/image-converter', (req, res) => {
  let page_data = {
    title: '云河工具站 - 批量图片格式转换器',
    description: '云河工具站 - 免费在线批量图片格式转换工具，支持JPG、PNG、WebP、GIF格式互转，一次性上传最多10张图片，在线转换无需上传服务器，安全高效。',
    keywords: '批量图片转换,在线图片转换,图片格式转换,JPG转PNG,PNG转WebP,WebP转换,GIF转换,免费图片处理'
  };

  res.render('image-converter', { ...page_data }, (err, html_template) => {
    if (err) { console.log(err); };
    let [html, page_script, page_style] = html_template.split(split_string);
    res.render('layout', {
      ...page_data,
      main: html,
      page_script,
      page_style
    });
  });
});

// 图片压缩器路由
router.get('/image-compressor', (req, res) => {
  let page_data = {
    title: '云河工具站 - 批量图片压缩器',
    description: '云河工具站 - 免费在线批量图片压缩工具，支持JPG、PNG、WebP格式，一次性上传最多10张图片，自定义压缩质量，有效减小图片体积，提升网站加载速度',
    keywords: '批量图片压缩,在线图片压缩,图片压缩工具,JPG压缩,PNG压缩,WebP转换,免费图片处理'
  }
  res.render('image-compressor', { ...page_data }, (err, html_template) => {
    let [html, page_script, page_style] = html_template.split(split_string);
    if (err) { console.log(err); }
    res.render('layout', {
      ...page_data,
      main: html,
      page_script,
      page_style
    });
  });
});

// base64加解密
router.get('/base64', (req, res) => {
  let page_data = {
    title: 'Base64加解密工具 - 云河工具站',
    description: '云河工具站 - Base64加解密工具，支持文本的Base64编码解码操作',
    keywords: 'Base64,Base64编码,Base64解码,Base64转换,在线Base64工具,Base64加密,Base64解密,文本转Base64,Base64转换器,字符串编码'
  }
  res.render('base64', { ...page_data }, (err, html_template) => {
    let [html, page_script, page_style] = html_template.split(split_string);
    if (err) { console.log(err); }
    res.render('layout', {
      ...page_data,
      main: html,
      page_script,
      page_style
    });
  });
});

// json格式化
router.get('/json-format', (req, res) => {
  let page_data = {
    title: 'JSON格式化工具 - 云河工具站',
    description: '云河工具站 - JSON格式化工具，支持语法高亮、压缩、校验等功能，适配移动端设备',
    keywords: 'JSON格式化,JSON美化,JSON校验,JSON在线工具,JSON高亮,JSON转格式,JSON解析器,代码格式化,在线JSON,移动端JSON工具,JSON压缩'
  }
  res.render('json-format', { ...page_data }, (err, html_template) => {
    let [html, page_script, page_style] = html_template.split(split_string);
    if (err) { console.log(err); }
    res.render('layout', {
      ...page_data,
      main: html,
      page_script,
      page_style
    });
  });
});

// 音频格式转换路由
router.get('/audio-converter', (req, res) => {
  let page_data = {
    title: '音频格式转换工具 - 云河工具站',
    description: '云河工具站 - 免费在线音频格式转换工具，支持多种音频格式互转，无需上传服务器，安全高效',
    keywords: '音频格式转换,在线音频转换,音频转换工具,MP3转换,WAV转换,OGG转换,免费音频处理'
  };
  
  res.render('audio-converter', { ...page_data }, (err, html_template) => {
    if (err) { console.log(err); };
    let [html, page_script, page_style] = html_template.split(split_string);
    res.render('layout', {
      ...page_data,
      main: html,
      page_script,
      page_style
    });
  });
});

// 音频裁切路由
router.get('/audio-cutter', (req, res) => {
  let page_data = {
    title: '音频裁切工具 - 云河工具站',
    description: '云河工具站 - 免费在线音频裁切工具，支持精确截取音频片段，无需上传服务器，安全高效',
    keywords: '音频裁切,在线音频裁切,音频截取,音频剪辑,免费音频处理'
  };
  
  res.render('audio-cutter', { ...page_data }, (err, html_template) => {
    if (err) { console.log(err); };
    let [html, page_script, page_style] = html_template.split(split_string);
    res.render('layout', {
      ...page_data,
      main: html,
      page_script,
      page_style
    });
  });
});

// 视频转音频路由
router.get('/video-to-audio', (req, res) => {
  let page_data = {
    title: '视频转音频工具 - 云河工具站',
    description: '云河工具站 - 免费在线视频转音频工具，从视频中提取音频，支持多种视频格式',
    keywords: '视频转音频,视频提取音频,在线视频转音频,视频音频分离,免费音频处理'
  };
  
  res.render('video-to-audio', { ...page_data }, (err, html_template) => {
    if (err) { console.log(err); };
    let [html, page_script, page_style] = html_template.split(split_string);
    res.render('layout', {
      ...page_data,
      main: html,
      page_script,
      page_style
    });
  });
});

module.exports = router;