var pool = require('../config/dbConfig')

getGhazals = async function () {
  const [rows] = await pool.query(`
    SELECT * 
    FROM ghazals
    `)
  return rows
}

getGhazal = async function (id) {
  const [rows] = await pool.query(`
  SELECT * 
  FROM ghazals
  WHERE id = ?
  `, [id])
  return rows[0]
}

getGhazalByPoetId = async function (poet_id) {
  const [rows] = await pool.query(`
  SELECT * 
  FROM ghazals
  WHERE poet_id = ?
  `, [poet_id])
  return rows
}



updateGhazal = async function (content, poet_id, id) {
  const [rows] = await pool.query(`
  UPDATE ghazals
  SET content = ?, poet_id=?
  WHERE id = ?
  `, [content, poet_id, id])
  return rows[0]
}

deleteGhazal = async function (id) {
  const [rows] = await pool.query(`
  DELETE 
  FROM ghazals
  WHERE id = ?
  `, [id])
  return rows[0]
}

createGhazal = async function (content, poet_id) {
  const [result] = await pool.query(`
    INSERT INTO ghazals ( content, poet_id)
VALUES (?, ?)
  `, [content, poet_id])
  const id = result.insertId
  return getGhazal(id)
}


module.exports = { getGhazals, getGhazal, createGhazal, updateGhazal, deleteGhazal, getGhazalByPoetId }






