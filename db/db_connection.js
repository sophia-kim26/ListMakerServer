const dotenv = require('dotenv');
dotenv.config();

const mysql = require('mysql2');

// TODO
// const dbConfig = {
//     host: "sqlclassdb-instance-1.cqjxl5z5vyvr.us-east-2.rds.amazonaws.com",
//     port: 3306,
//     user: "sopsyl",
//     password: "wXbVfbg4WL9F",
//     database: "web_apps_project_2324t2_TF_sopsyl",
//     connectTimeout: 10000
// }

// replace dbConfig with this later
const dbConfig = {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectTimeout: parseInt(process.env.DB_CONNECT_TIMEOUT || "10000")
};

const connection = mysql.createConnection(dbConfig);

module.exports = connection;
