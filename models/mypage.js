const pool = require('../modules/pool');
const table = 'mypage';

const mypage = {
    read : async()=>{
        const query = `SELECT * FROM ${table}`;
        try{
            const result = await pool.queryParam(query);
            if(result.length == 0){
                return false;
            }
            else{
                return result;
            }
        }catch(err){
            console.log('ReadMypage ERROR : ', err);
            throw err;
        }
    }
}

module.exports = mypage;