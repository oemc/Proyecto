var express = require('express');
var router = express.Router();
var createError = require('http-errors');
let storage = require('./storage.js');
let cache = require('./cache.js');
let props = ['pic', 'name', 'origin', 'occupation', 'hairColor', 'alias'];
    
/* GET waifu listing. */
router.get('/', function(req, res, next) {
    cache.get('*', (err, reply) => {
        if(err){
            console.log(err);
        }
        if(reply == null){
            storage.readAll((err, docs) =>{
                if(err){
                    next(createError(500));
                }
                res.status(200).json(docs);
                cache.append('*', docs, 20);
            });
        }
        else{
            res.status(200).type('json').send(reply);
        }
    });
});

/* GET specific waifu searching. */
router.get('/:id', function(req, res, next) {
    cache.get(req.params.id, (err, reply) => {
        if(err){
            console.log(err);
        }
        if(reply == null){
            storage.read(req.params.id, (err, docs) =>{
                if(err){
                    next(createError(500));
                }
                else if(docs == null){
                    next(createError(404));
                }
                else{
                    res.status(200).json(docs);
                    cache.append(req.params.id, docs, 60);
                }
            });
        }
        else{
            res.status(200).type('json').send(reply);
        }
    });
});

/* POST waifu inserting. */
router.post('/', function(req, res, next) {
    if(!props.every(prop => (req.body[prop] != ''))){
        next(createError(400));
    }
    else{
        storage.create(req.body, (err, docs) => {
            if(err){
                next(createError(500));
            }
            res.status(201).json({ id: docs._id });
        });
    }
});

/* PUT waifu updating. */
router.put('/:id', function(req, res, next) {
    if(!props.every(prop => (req.body[prop] != ''))){
        next(createError(400));
    }
    else{
        storage.update(req.params.id, req.body, (err, docs) => {
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
    }
});

/* DELETE waifu deleting. */
router.delete('/:id', function(req, res, next) {
    storage.delete(req.params.id, (err, docs) => {
        if(err){
            next(createError(500));
        }
        else if(docs.n == 0){
            next(createError(404));
        }
        else{
            console.log(docs);
            res.status(204).send();
        }
    });
});

module.exports = router;