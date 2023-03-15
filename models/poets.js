var pool = require('../config/dbConfig')

getPoets = async function () {
  const [rows] = await pool.query(`
    SELECT * 
    FROM poets
    `)
  return rows
}

getPoet = async function (id) {
  const [rows] = await pool.query(`
  SELECT * 
  FROM poets
  WHERE id = ?
  `, [id])
  return rows[0]
}

updatePoet = async function (name, father_name, birth_date, death_date, description, pic, id) {
  const [rows] = await pool.query(`
  UPDATE poets
  SET name = ?, father_name=?, birth_date=?, death_date=?,description=?, pic=?
  WHERE id = ?
  `, [name, father_name, birth_date, death_date, description, pic, id])
  return rows[0]
}

deletePoet = async function (id) {
  const [rows] = await pool.query(`
  DELETE 
  FROM poets
  WHERE id = ?
  `, [id])
  return rows[0]
}

createPoet = async function (name, father_name, birth_date, death_date, description, pic) {
  const [result] = await pool.query(`
    INSERT INTO poets (name, father_name, birth_date, death_date, description, pic)
VALUES (?, ?, ?, ?, ?,?)
  `, [name, father_name, birth_date, death_date, description, pic])
  const id = result.insertId
  return getPoet(id)
}


module.exports = { getPoets, getPoet, createPoet, updatePoet, deletePoet }























// var mysql = require('mysql2')



// const pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "naweesdb"
// }).promise()

// getNotes = async function () {
//     const [rows] = await pool.query("SELECT * FROM notes")
//     return rows
// }

// getNote = async function (id) {
//     const [rows] = await pool.query(`
//   SELECT *
//   FROM notes
//   WHERE id = ?
//   `, [id])
//     return rows[0]
// }

// updateNote = async function (title, id) {
//     const [rows] = await pool.query(`
//   UPDATE notes
//   SET title = ?
//   WHERE id = ?
//   `, [title, id])
//     return rows[0]
// }

// deleteNote = async function (id) {
//     const [rows] = await pool.query(`
//   DELETE
//   FROM notes
//   WHERE id = ?
//   `, [id])
//     return rows[0]
// }

// createNote = async function (title, contents) {
//     const [result] = await pool.query(`
//   INSERT INTO notes (title, contents)
//   VALUES (?, ?)
//   `, [title, contents])
//     const id = result.insertId
//     return getNote(id)
// }


// module.exports = { getNotes, getNote, createNote, updateNote, deleteNote }