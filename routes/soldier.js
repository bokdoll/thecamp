var express = require('express');
var router = express.Router();
let statusCode = require('../modules/statusCode');
let util = require('../modules/util');
const soldierModel = require('../models/soldiers');

/**
 * 모든 게시글 조회
 */
router.get('/', async(req, res) => {
    const soldier = await soldierModel.getSoldierInfo();
    
    temp3 = []
    for(var i=0;i<soldier.length;i++){
        temp = []
        const imgList = await soldierModel.getSoldierImage(soldier[i]["soldier_idx"]);
        
        for (var j=0; j<imgList.length; j++){
            temp[j] =  imgList[j]["soldier_imgs"];
        }
        temp2 = soldier[i];
        temp2["imgList"] = temp;
        temp3.push(temp2)
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK, '군인 정보', soldier));
});

module.exports = router;