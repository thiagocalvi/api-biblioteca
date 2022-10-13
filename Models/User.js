// const {Sequelize} = require('sequelize');
// const connection = require('../database/database');

// const User = connection.define('users', {
//     id: {
//         type: Sequelize.INTEGER,
//         allownull: false,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     carteirinha_id: {
//         type: Sequelize.INTEGER,
//         allownull: false,
//         // autoIncrement: true
//     },
//     first_name: {
//         type: Sequelize.STRING,
//         allownull: false
//     },
//     last_name: {
//         type: Sequelize.STRING,
//         allownull: false
//     },
//     endereco: {
//         type: Sequelize.STRING,
//         allownull: false
//     },
//     cel: {
//         type: Sequelize.INTEGER,
//         allownull: false
//     }
// });


// User.sync({force: false}).then(()=>console.log('-----------------------------------'))
// module.exports = User