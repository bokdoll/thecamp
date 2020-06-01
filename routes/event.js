var express = require('express');
var router = express.Router();
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const event = require('../models/event');
/**
 * 모든 게시글 조회
 */
router.get('/', function(req, res, next){
    res.send("이벤트");
});

/**
 * 진행 중인 이벤트
 */
router.get('/now', async(req, res) => {
    const result = await event.read();
    if(!result){
        return res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST,responseMessage.READ_EVENT_FAIL)); 
    }
    return res.status(statusCode.OK)
        .send(util.success(statusCode.OK,responseMessage.READ_EVENT_SUCCESS,result));
});

module.exports = router;