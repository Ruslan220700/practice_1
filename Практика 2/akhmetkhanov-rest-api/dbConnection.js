const mysql = require("mysql2");

const db_connection = mysql
    .createConnection({
        host: "127.0.0.1", // имя хоста
        user: "root", // имя пользователя
        database: "p-11bs_akhmetkhanov", // имя базы данных
        password: "1234", // пароль от базы данных
    })
    .on("error", (err) => {
        console.log("Failed to connect to Database - ", err);
    });

module.exports = db_connection;