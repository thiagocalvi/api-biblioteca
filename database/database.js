const Sequelize = require('sequelize');

const connection = new Sequelize('biblioteca', 'root', 'install', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;