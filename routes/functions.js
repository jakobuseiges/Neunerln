var express = require('express')
var router = express.Router()
const sqlite3 = require('sqlite3')
let fs = require('fs')
var path = require('path')

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

router.get('/getPlayer', function(req, res, next) {

  console.log('query: ', req.query)
  let db = new sqlite3.Database('neunerln.db')
  // funktioniert noch nicht --> Select muss noch überarbeitet werden
  db.all(`SELECT * FROM users WHERE username="${req.query.username}" AND password="${req.query.password}"`, function (err, rows) {
    rows.forEach(row => {
      console.log(row.username, row.password, row.playedGames, row.wonGames)
    })
    db.close()
  })
}),

router.get('/addPlayer', function(req, res, next) {
  let db = new sqlite3.Database('neunerln.db')
  console.log(req.query)

  db.run(`INSERT INTO users (username, password, playedGames, wonGames) VALUES ('${req.query.username}', '${req.query.password}', 0, 0)`, function(err) {
    if (err) {
      return console.log(err.message)
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`)
    db.close()
  })
})

module.exports = router;