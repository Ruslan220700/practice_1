const mysql = require('mysql2');

const dbConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'akhmetkhanov_login'
});

module.exports = dbConnection.promise();