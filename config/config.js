require("dotenv").config();

module.exports = {
    database: {
        host: "icoder.cnwoz6cie7ex.ap-northeast-1.rds.amazonaws.com",
        port: 3306,
        user: "admin",
        password: "password",
        database: "mumr_db",
        dialect: "mysql",
    },
    // pool: {
    //     max: 5,
    //     min: 0,
    //     acquire: 30000,
    //     idle: 10000,
    // },
};
