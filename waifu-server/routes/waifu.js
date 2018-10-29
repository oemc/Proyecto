var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var waifuStorage = require('./waifuStorage.js');
var redis = require('redis');
var redisClient = redis.createClient();
let myStorage = new waifuStorage();

redisClient.on("error", (err) => {
    console.log("Error: " + err);
});



/* GET waifu listing. */
router.get('/', function(req, res, next) {
    redisClient.get('*', (err, reply) => {
        if(err){
            console.log(err);
        }
        if(reply == null){
            myStorage.readAll((err, docs) =>{
                if(err){
                    next(createError(500));
                }
                res.status(200).send(docs);
                redisClient.append("*", JSON.stringify(docs));
                redisClient.expire("*", 60);
            });
        }
        else{
            res.status(200).send(reply);
        }
    });
});

/* GET specific waifu searching. */
router.get('/:id', function(req, res, next) {
    redisClient.get(req.params.id, (err, reply) => {
        if(err){
            console.log(err);
        }
        if(reply == null){
            myStorage.read(req.params.id, (err, docs) =>{
                if(err){
                    next(createError(500));
                }
                else if(docs == null){
                    next(createError(404));
                }
                else{
                    res.status(200).send(docs);
                    redisClient.append(req.params.id, JSON.stringify(docs));
                    redisClient.expire(req.params.id, 300);
                }
            });
        }
        else{
            res.status(200).send(reply);
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
    myStorage.delete(req.params.id, (err, docs) => {
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