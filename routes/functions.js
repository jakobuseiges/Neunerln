var express = require('express')
var router = express.Router()
const sqlite3 = require('sqlite3')
let sql
let fs = require('fs')
var path = require('path')

const heros = []

/* GET users listing. */
router.get('/getCards', function(req, res, next) {
  const cardPath = path.join(__dirname, '../src/assets/cards')
  var cards = []
  let files

  try {
    files = fs.readdirSync(cardPath);
  } catch (err) {
    res.status(422).json({ message: `${err}` })
    return
  }
 
  files.forEach(filepath => {
    const filename = path.parse(filepath).name
    cards.push({
      path: path.join(cardPath, filepath),
      symbol: filename.split('_', 2)[0],
      value: filename.split('_', 2)[1]
    })
  })
  res.send(cards)
})

router.get('/getPlayers', function(req, res, next) {

  console.log(req.query)
  let db = new sqlite3.Database('mcu.db')
  // funktioniert noch nicht --> Select muss noch überarbeitet werden
  db.all(`SELECT * FROM users`, function (err, rows) {
    rows.forEach(row => {
      console.log(row.ID, row.username, row.playedGames, row.wonGames)
    })
    db.close()
  })
}),

router.get('/addPlayers', function(req, res, next) {
  let db = new sqlite3.Database('mcu.db')

  db.run(`INSERT INTO users (username, playedGames, wonGames) VALUES ('rafael', 1, 1)`, function(err) {
    if (err) {
      return console.log(err.message)
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`)
    db.close()
  })
})

module.exports = router;