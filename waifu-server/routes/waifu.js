var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var waifuStorage = require('./waifuStorage.js');

let myStorage = new waifuStorage();

/* GET waifu listing. */
router.get('/', function(req, res, next) {
    res.status(200);
    res.send(JSON.stringify(myStorage.readAll()));
});

/* GET specific waifu searching. */
router.get('/:id', function(req, res, next) {
    let match = myStorage.read(req.params.id);
    if(match != null){
        res.status(200).send(match);
    }
    else{
        next(createError(404));
    }
});

/* POST waifu inserting. */
router.post('/', function(req, res, next) {
    res.status(201).send(`you posted a waifu ${myStorage.create(req.body)}`);
});

/* PUT waifu updating. */
router.put('/:id', function(req, res, next) {
    if(myStorage.update(req.params.id, req.body)){
        res.status(204).send();
    }
    else{
        next(createError(404));
    }
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