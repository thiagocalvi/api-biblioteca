const Sequelize = require('sequelize');
// const User = require('./User');
const connection = require('../database/database');

const Book = connection.define('books', {
    id: {
        type: Sequelize.INTEGER,
        allownull: false,
        autoIncrement: true,
        primaryKey: true
    },
    book_name: {
        type: Sequelize.STRING, 
        allownull: false
    },
    author_name: {
        type: Sequelize.STRING,
        allownull: false
    },
    initial_book: {
        type: Sequelize.STRING,
        allownull: false
    },
    initial_author: {
        type: Sequelize.STRING,
        allownull: false
    },
    ex: {
        type: Sequelize.INTEGER,
        allownull: false
    },
    reg: {
        type: Sequelize.STRING,
        allownull: false
    },
    cdd: {
        type: Sequelize.INTEGER,
        allownull: false
    },
    emprestado: {
        type: Sequelize.INTEGER,
        allownull: true
    }
});


// Book.belongsTo(User, {foreignKey: 'idBook'})
// User.hasMany(Book, {foreignKey: 'idUser'})

Book.sync({force: false}).then(()=>console.log('-----------------------------------'))
module.exports = Book;