var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var waifuStorage = require('./waifuStorage.js');

let myStorage = new waifuStorage();

/* GET waifu listing. */
router.get('/', function(req, res, next) {
    myStorage.readAll((err, docs) =>{
        if(err){
            next(createError(500));
        }
        res.status(200).send(docs);
    });
});

/* GET specific waifu searching. */
router.get('/:id', function(req, res, next) {
    myStorage.read(req.params.id, (err, docs) =>{
        if(err){
            next(createError(500));
        }
        else if(docs == null){
            next(createError(404));
        }
        else{
            res.status(200).send(docs);
        }
    });
});

/* POST waifu inserting. */
router.post('/', function(req, res, next) {
    myStorage.create(req.body, (err, docs) => {
        if(err){
            next(createError(500));
        }
        res.status(201).send(docs._id);
    });
});

/* PUT waifu updating. */
router.put('/:id', function(req, res, next) {
    myStorage.update(req.params.id, req.body, (err, docs) => {
        if(err){
            next(createError(500));
        }
        else if(docs.n == 0){
            console.log(docs);
            next(createError(404));
        }
        else{
            console.log(docs);
            res.status(204).send();
        }
    });
});

/* DELETE waifu deleting. */
router.delete('/:id', function(req, res, next) {
    if(myStorage.delete(req.params.id)){
        res.status(204).send();
    }
    else{
        next(createError(404));
    }
});

module.exports = router;