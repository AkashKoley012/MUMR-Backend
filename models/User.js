const { Sequelize, DataTypes } = require("sequelize");

const db = require("../config/db");

const sequelize = db.sequelize;

const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = User;
