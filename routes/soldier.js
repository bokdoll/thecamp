var express = require('express');
var router = express.Router();
let statusCode = require('../modules/statusCode');
let util = require('../modules/util');
const soldierModel = require('../models/soldiers');

/**
 * 모든 게시글 조회
 */
router.get('/', async(req, res) => {
    
});

module.exports = router;