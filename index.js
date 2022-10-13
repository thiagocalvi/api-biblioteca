const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 8080;
const conection = require('./database/database');
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


//statics file
app.use(express.static('views'));


//Database
conection.authenticate()
.then(()=>{
    console.log('Conectado com o database');
})
.catch((error)=>{
    console.log(error);
})


//Models
const Book = require('./Models/Book.js');
// const User = require('./Models/User.js');


//Router
const BookRouters = require('./routers/books');
// const UserRouters = require('./routers/users');


app.use('/', BookRouters);
// app.use('/', UserRouters);


//home
app.get('/', (req, res)=>{
    res.render('index')
});


app.listen(port, ()=>console.log(`Serviço rodando, porta ${port}`));