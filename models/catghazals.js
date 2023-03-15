var pool = require('../config/dbConfig')

getCatGhazals = async function () {
    const [rows] = await pool.query(`
    SELECT * 
    FROM catghazals
    `)
    return rows
}

getCatGhazal = async function (id) {
    const [rows] = await pool.query(`
  SELECT * 
  FROM catghazals
  WHERE id = ?
  `, [id])
    return rows[0]
}


getCatGhazalByCatId = async function (cat_id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM catghazals
    WHERE cat_id = ?
    `, [cat_id])
    return rows
}


updateCatGhazal = async function (content, cat_id, id) {
    const [rows] = await pool.query(`
  UPDATE catghazals
  SET content = ?, cat_id=?
  WHERE id = ?
  `, [content, cat_id, id])
    return rows[0]
}

deleteCatGhazal = async function (id) {
    const [rows] = await pool.query(`
  DELETE 
  FROM catghazals
  WHERE id = ?
  `, [id])
    return rows[0]
}

createCatGhazal = async function (content, cat_id) {
    const [result] = await pool.query(`
    INSERT INTO catghazals ( content, cat_id)
VALUES (?, ?)
  `, [content, cat_id])
    const id = result.insertId
    return getCatGhazal(id)
}


module.exports = { getCatGhazals, getCatGhazal, createCatGhazal, updateCatGhazal, deleteCatGhazal, getCatGhazalByCatId }



