const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("VibeMap", "postgres", "admin", {
    host: "localhost",
    dialect: "postgres",
    port: 5433,
});

module.exports = sequelize