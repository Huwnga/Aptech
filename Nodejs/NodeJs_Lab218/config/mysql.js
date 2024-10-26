const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mysql',
  password: '12345678'
});

module.exports = connection;
