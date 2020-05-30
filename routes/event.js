var express = require('express');
var router = express.Router();
let statusCode = require('../modules/statusCode');
let util = require('../modules/util');

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
    res.status(statusCode.OK).send(util.success(200, '이벤트'));
})

module.exports = router;