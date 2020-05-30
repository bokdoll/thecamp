var express = require('express');
var router = express.Router();
let statusCode = require('../modules/statusCode');
let util = require('../modules/util');

/**
 * 모든 게시글 조회
 */
router.get('/', function(req, res, next){
    res.send("마이페이지");
});

/**
 * 마이페이지 : 얼굴 사진
 */
router.get('/main', async(req, res) => {
    res.status(statusCode.OK).send(util.success(200, '마이 페이지'));
})

module.exports = router;