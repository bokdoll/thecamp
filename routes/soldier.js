var express = require('express');
var router = express.Router();
let statusCode = require('../modules/statusCode');
let responseMessage = require('../modules/responseMessage');
let util = require('../modules/util');
const soldierModel = require('../models/soldiers');

           
// 계급 반환 함수
soldierDegree = (_diffMonth,_soldierType)=>{
    if(_soldierType == "의경"){
        if(_diffMonth < 3){
            return "이경";
        }else if(_diffMonth >= 3 &&_diffMonth < 9){
            return "일경";
        }else if(_diffMonth >= 9 && _diffMonth < 15){
            return "상경";
        }else{
            return "수경";
        }
    }else{
        if(_diffMonth < 3){
            return "이병";
        }else if(_diffMonth >= 3 &&_diffMonth < 9){
            return "일병";
        }else if(_diffMonth >= 9 && _diffMonth < 15){
            return "상병";
        }else{
            return "병장";
        }
    }
}

// 계급을 위한 월 차이 계산
diffDate = (date1,date2)=>{
    var diffdate1 = date1 instanceof Date ? date1 : new Date(date1);
    var diffdate2 = date2 instanceof Date ? date2 : new Date(date2);

    diffdate1 = new Date(diffdate1.getFullYear(), diffdate1.getMonth()+1, diffdate1.getDate());
    diffdate2 = new Date(diffdate2.getFullYear(), diffdate2.getMonth()+2, diffdate2.getDate());
    var diff = (diffdate2.getMonth()-diffdate1.getMonth()+(diffdate2.getFullYear() - diffdate1.getFullYear())*12);
    return diff;
}

// 날짜 계산 함수
dateAddDel = (sDate, nNum, type)=> {
    var yy = parseInt(sDate.substr(0, 4), 10);
    var mm = parseInt(sDate.substr(5, 2), 10);
    var dd = parseInt(sDate.substr(8), 10);
    
    if (type == "d") {
        d = new Date(yy, mm - 1, dd + nNum);
    }
    else if (type == "m") {
        d = new Date(yy, mm - 1, dd + (nNum * 31));
    }
    else if (type == "y") {
        d = new Date(yy + nNum, mm - 1, dd);
    }
 
    yy = d.getFullYear();
    mm = d.getMonth() + 1; mm = (mm < 10) ? '0' + mm : mm;
    dd = d.getDate(); dd = (dd < 10) ? '0' + dd : dd;
 
    return '' + yy + '-' +  mm  + '-' + dd;
}

router.get('/', async(req, res) => {
    const result = await soldierModel.info();
    var temp =[];
    var today = new Date();
    // 1. 입대일로 전역일 계산
    // 2. 입대일로 현재 계급 계산
    for(var i=0; i<result.length; i++){
        temp_img = []
        const imgList = await soldierModel.getSoldierImage(soldier[i]["soldier_idx"]);
        const soldierType = result[i]["soldier_type"];
        const joinDate = result[i]["join_date"].substr(0,10);
        var endDate = "";
        var diffMonth ="";
        var degree ="";

        for (var j=0; j<imgList.length; j++){
            temp_img[j] =  imgList[j]["soldier_imgs"];
        }
      
        if(soldierType == "육군" || soldierType == "해병"){
            endDate = dateAddDel(joinDate,+18,'m');
        }
        else if(soldierType == "의경"){
            endDate = dateAddDel(joinDate,+18,'m');
        }else if(soldierType == "해군"){
            endDate = dateAddDel(joinDate,+20,'m');
        }else if(soldierType == "공군"){
            endDate = dateAddDel(joinDate,+22,'m');
        }

        temp_2 = result[i];
        diffMonth = diffDate(joinDate,today);
        degree = soldierDegree(diffMonth,soldierType);
        temp_2["degree"] = degree;
        temp_2["end_date"] = endDate;
        temp_2["imgList"] = temp_img;
        temp.push(temp_2);
    }
    if(!result){
        return res.status(statusCode.BAD_REQUEST)
           .send(util.fail(statusCode.BAD_REQUEST,responseMessage.READ_SOLDIER_FAIL)); 
    }
    return res.status(statusCode.OK)
        .send(util.success(statusCode.OK,responseMessage.READ_SOLDIER_SUCESS,temp));
});

module.exports = router;