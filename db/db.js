const { Pool } = require('pg')

// database details for connection
const pool = new Pool({
    user: 'postgres',
    password: 'root',
    database: 'test',
    host: 'localhost',
    port: '5432',
})

/*
pool.connect(()=>{
    console.log("Connected to postgres");
    
})
*/

// export pool to use in another file

module.exports=pool;