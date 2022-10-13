// const express = require('express')
// const router = express.Router();

// //Model
// const User = require('../Models/User')


// router.get('/users', (req, res)=>{
//     User.findAll().then(users => {
//         return res. json(users);
//     }).catch(err => {
//         console.log('Falhou')
//     })

// })

// router.post('/user/save', (req, res)=> {
//     User.create({
//         name : req.body.name,
//         password: req.body.password
//     }).then(res.json({on:"deu"})).catch('erro de inserção ')
// })


// module.exports = router