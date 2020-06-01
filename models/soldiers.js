const pool = require('../modules/pool');
const table = 'soldier';
const imgTable = 'soldierimgs';

const soldier = {
    info: async ()=>{
        const query = `SELECT * FROM ${table}`;
        try{
            const result = await pool.queryParam(query);
            if(result.length == 0){
                return false;
            }
            else{
                return result;
            }
        } catch(err){
            console.log('SOLDIER INFO ERROR : ', err);
            throw err;
        }
    }
}

module.exports = soldier;