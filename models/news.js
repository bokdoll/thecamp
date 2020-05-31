const pool = require('../modules/pool');
const table = 'news';

const news = {
    getAllNews : async () => {
        const query = `select * from ${table}`;
        try{
            return await pool.queryParam(query);
        } catch(err){
            console.log('getAllNews err : ', err);
            throw err;
        }
    }
}

module.exports = news;
