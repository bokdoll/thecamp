const pool = require('../modules/pool');
const table = 'notice';

const notice = {
    getAllNotice : async () => {
        const query = `select * from ${table}`;
        try{
            return await pool.queryParam(query);
        } catch(err){
            console.log('getAllNotice err : ', err);
            throw err;
        }
    }
}

module.exports = notice;