const sqlite3 = require('sqlite3').verbose()
let sql

const db = new sqlite3.Database('./neunerln.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
      console.error(err)
  }
})

// sql = `CREATE TABLE users(username TEXT PRIMARY KEY, password TEXT, playedGames INTEGER, wonGames INTEGER)`
// db.run(sql)

// sql = `ALTER TABLE users ADD password NVARCHAR(255)`
// db.run(sql)

// db.run(`DROP TABLE users`)

const setData = `INSERT INTO users (username, password, playedGames, wonGames) VALUES ('jakob', 'test', 1, 1)` 
db.run(setData)