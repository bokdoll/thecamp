var express = require('express');
var router = express.Router();
let statusCode = require('../modules/statusCode');
let util = require('../modules/util');

/**
 * 모든 게시글 조회
 */
router.get('/', function(req, res, next){
    res.send("게시판");
});


/**
 * 국방 일보
 */
router.get('/notice', async(req, res) => {
    res.status(statusCode.OK).send(util.success(200, '국방 일보'));
});

/**
 * 공지 사항
 */
router.get('/news', async(req, res) => {
    res.status(statusCode.OK).send(util.success(200, '공지 사항'));
})

module.exports = router;