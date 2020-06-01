const express = require('express');
const router = express.Router();
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const resMessage = require('../modules/responseMessage');
const NewsModel = require('../models/news');
const NoticeModel = require('../models/notice');

/**
 * 모든 게시글 조회
 */
router.get('/', function(req, res, next){
    res.send("게시판");
});


/**
 * 국방 일보
 */
router.get('/news', async(req, res) => {
    const news = await NewsModel.getAllNews();
    res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.READ_NEWS_SUCCESS, news));
});

/**
 * 공지 사항
 */
router.get('/notice', async(req, res) => {
    const notice = await NoticeModel.getAllNotice();
    res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.READ_NOTICE_SUCCESS, notice));
})

module.exports = router;