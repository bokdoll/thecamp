var express = require('express');
var router = express.Router();
let statusCode = require('../modules/statusCode');
let responseMessage = require('../modules/responseMessage');
let util = require('../modules/util');
const mypage = require('../models/mypage');

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
    const result = await mypage.read();
    if(!result){
        return res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST,responseMessage.READ_MYPAGE_FAIL)); 
    }
    return res.status(statusCode.OK)
        .send(util.success(statusCode.OK,responseMessage.READ_MYPAGE_SUCCESS,result));
});

module.exports = router;