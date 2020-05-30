var express = require('express');
var router = express.Router();
let statusCode = require('../modules/statusCode');
let util = require('../modules/util');

/**
 * 모든 게시글 조회
 */
router.get('/', function(req, res, next){
    res.send("군인 정보");
});

module.exports = router;