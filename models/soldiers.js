const pool = require('../modules/pool');
const table = 'soldier';
const imgTable = 'soldierimgs';

const soldier = {
    getSoldierInfo : async () => {
        const query = `SELECT * FROM ${table};`
        try{
            return await pool.queryParam(query);
        } catch(err){
            console.log('getSoldierInfo err : ', err);
            throw err;
        }
    },
    getSoldierImage: async (soldier_idx) => {
        const query = `SELECT soldier_imgs FROM ${imgTable} where soldier_idx=${soldier_idx}`
        try{
            return await pool.queryParam(query);
        } catch(err){
            console.log('getSoldierInfo err : ', err);
            throw err;
        }
    },
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