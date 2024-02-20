var express = require('express');
var router = express.Router();
let fs = require('fs')
var path = require('path');

/* GET users listing. */
router.get('/getCards', function(req, res, next) {
  const cardPath = path.join(__dirname, '../src/assets/cards')
  var cards = []
  let files

  try {
    files = fs.readdirSync(cardPath);
  } catch (err) {
    res.status(422).json({ message: `${err}` });
    return
  }
 
  files.forEach(filepath => {
    const filename = path.parse(filepath).name
    cards.push({
      path: path.join('../src/assets/cards', filepath),
      symbol: filename.split('_', 2)[0],
      value: filename.split('_', 2)[1]
    })
  })
  res.send(cards)
})

module.exports = router;