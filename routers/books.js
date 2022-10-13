const express = require('express');
const router = express.Router();


//Models
const Book = require('../Models/Book.js');

//List book

router.get('/books', (req, res)=>{
    Book.findAll().then(books => {
        return res.json(books)
    }).catch(err => {
        return res.json({
            error: err,
            message: "Problemas de conecção com API"
        })
    })
});

//save a new book
router.post('/book/save', (req, res)=>{
    
    var book_name = req.body.book_name;
    var author_name = req.body.author_name; 
    var initial_author = req.body.initial_author;
    var initial_book = req.body.initial_book;
    var cdd = req.body.cdd;
    var ex = req.body.ex;
    var reg = req.body.reg; 
    var emprestado = req.body.emprestado; 

    Book.create(
        {
            book_name: book_name,
            author_name: author_name,
            initial_author: initial_author,
            initial_book: initial_book,
            cdd: cdd,
            ex: ex,
            reg: reg,
            emprestado: emprestado
        }
    )
    .then(()=>{
        return res.json({
            status: "OK", 
            message: "Livro cadastrado"
        })})
    .catch(err=>{
        return res.json({
            error: err,
            message: "Problemas de conecção com API"
        })
    })
});

router.put('/book/update/save', async (req, res)=>{

    var idBody = req.body.idBook;
    
    Book.update({
        book_name: req.body.book_name,
        author_name: req.body.author_name
    },
    {
        where: {id:idBody}
    }).then(()=>{
        return res.json({atu: 'atualizado com sucesso'})
    }).catch(err => {
        return res.json({error: err})
    })
});


router.get('/countBooks', (req, res)=>{
    Book.findAndCountAll().then((all)=>{return res.json(all)})
})

router.delete('/book/destroy', (req, res)=>{
    
    //var id = req.params.id;

    Book.destroy({
        where: {id: req.body.id}
    }).then(()=>{
        res.json({
            info : "Feito",
            del: 'Deletado id-> '+ req.body.id
        })
    }).catch(()=>{
        
    })
})

module.exports = router;