var pool = require('../config/dbConfig')


getShers = async function () {
    const [rows] = await pool.query(`
    SELECT * 
    FROM shers
    `)
    return rows
}

getShersOnPoetId = async function (poet_id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM shers
    WHERE poet_id = ?
    `, [poet_id])
    return rows
}

getSher = async function (id) {
    const [rows] = await pool.query(`
  SELECT * 
  FROM shers
  WHERE id = ?
  `, [id])
    return rows[0]
}

updateSher = async function (content, poet_id, id) {
    const [rows] = await pool.query(`
  UPDATE shers
  SET content = ?, poet_id=?
  WHERE id = ?
  `, [content, poet_id, id])
    return rows[0]
}

deleteSher = async function (id) {
    const [rows] = await pool.query(`
  DELETE 
  FROM shers
  WHERE id = ?
  `, [id])
    return rows[0]
}

createSher = async function (content, poet_id) {
    const [result] = await pool.query(`
    INSERT INTO shers ( content, poet_id)
VALUES (?, ?)
  `, [content, poet_id])
    const id = result.insertId
    return getSher(id)
}


module.exports = { getShers, getSher, createSher, updateSher, deleteSher, getShersOnPoetId }

