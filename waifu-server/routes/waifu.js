var express = require('express');
var router = express.Router();
var createError = require('http-errors');
let waifuList = require('./testlist.json');

/* GET waifu listing. */
router.get('/', function(req, res, next) {
    res.status(200).send(JSON.stringify(waifuList));
});

/* GET waifu listing. */
router.get('/:id', function(req, res, next) {
    let match = waifuList.find(w => w.id == req.params.id);
    if(match != null){
        res.status(200).send(match);
    }
    else{
        next(createError(404));
    }
});

/* POST waifu inserting. */
router.post('/', function(req, res, next) {
  res.send('you posted a waifu');
});

/* PUT waifu updating. */
router.put('/', function(req, res, next) {
    res.send(`you updated the waifu: ${JSON.stringify(req.params)}`);
});

/* DELETE waifu deleting. */
router.delete('/', function(req, res, next) {
    res.send('you deleted a waifu... why?');
});

module.exports = router;