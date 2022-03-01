const { Pool } = require('pg');


const PG_URI = 'postgres://xoksaqef:8d-J7bMyJWzd27EDFsrcCWuqD6c8yyWg@jelani.db.elephantsql.com/xoksaqef'; 

const pool = new Pool({ 
    connectionString: PG_URI,

}); 

module.exports = { 
    query: (text, params, callback) => { 
        console.log('executed query', text); 
        return pool.query(text, params, callback);
    }
}; 

