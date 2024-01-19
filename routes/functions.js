var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getCards', function(req, res, next) {
  res.send('test');
});

module.exports = router;