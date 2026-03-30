const express = require('express');
const router = express.Router();
const toolsRouter = require('./tools');

// 主路由
router.use('/', toolsRouter);

module.exports = router;