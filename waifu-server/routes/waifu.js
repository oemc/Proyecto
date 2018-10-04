var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('you got a waifu');
});

router.post('/', function(req, res, next) {
  res.send('you posted a waifu');
});

router.put('/', function(req, res, next) {
    res.send('you updated a waifu');
});

router.delete('/', function(req, res, next) {
    res.send('you deleted a waifu... why?');
});

module.exports = router;