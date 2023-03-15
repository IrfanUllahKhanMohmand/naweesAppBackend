var pool = require('../config/dbConfig')


getCatShers = async function () {
    const [rows] = await pool.query(`
    SELECT * 
    FROM catshers
    `)
    return rows
}



getCatSher = async function (id) {
    const [rows] = await pool.query(`
  SELECT * 
  FROM catshers
  WHERE id = ?
  `, [id])
    return rows[0]
}

updateCatSher = async function (content, cat_id, id) {
    const [rows] = await pool.query(`
  UPDATE catshers
  SET content = ?, cat_id=?
  WHERE id = ?
  `, [content, cat_id, id])
    return rows[0]
}

getCatShersOnCatId = async function (cat_id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM catshers
    WHERE cat_id = ?
    `, [cat_id])
    return rows
}

deleteCatSher = async function (id) {
    const [rows] = await pool.query(`
  DELETE 
  FROM catshers
  WHERE id = ?
  `, [id])
    return rows[0]
}

createCatSher = async function (content, cat_id) {
    const [result] = await pool.query(`
    INSERT INTO catshers ( content, cat_id)
VALUES (?, ?)
  `, [content, cat_id])
    const id = result.insertId
    return getCatSher(id)
}


module.exports = { getCatShers, getCatSher, createCatSher, updateCatSher, deleteCatSher, getCatShersOnCatId }

