
const mysql = require('mysql2')
const connection = mysql.createConnection({
  
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.PASS,
    database: process.env.NAME,


})

connection.connect((error)=>{

    if(error) throw error
    console.log('conectado com sucesso')


})

module.exports = connection
