const config = require("./config");
// const mysql = require("mysql2");

const Sequelize = require("sequelize");

module.exports = db = {};

// create db if it doesn't already exist
const { host, port, user, password, database } = config.database;
// const pool = mysql.createPool({ host, port, user, password });
// pool.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

// connect to db
const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: "mysql",
    // pool: {
    //     max: config.pool.max,
    //     min: config.pool.min,
    //     acquire: config.pool.acquire,
    //     idle: config.pool.idle,
    // },
});

db.sequelize = sequelize;

//init models
const User = require("../models/User");

db.User = User;

// Connect to db
db.sequelize
    .authenticate()
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err.message);
        process.exit();
    });

// sync all models with database
sequelize.sync();
