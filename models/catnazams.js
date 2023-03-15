var pool = require('../config/dbConfig')


getCatNazams = async function () {
    const [rows] = await pool.query(`
    SELECT * 
    FROM catnazams
    `)
    return rows
}

getCatNazam = async function (id) {
    const [rows] = await pool.query(`
  SELECT * 
  FROM catnazams
  WHERE id = ?
  `, [id])
    return rows[0]
}


updateCatNazam = async function (title, content, cat_id, id) {
    const [rows] = await pool.query(`
  UPDATE catnazams
  SET title = ?, content = ?, cat_id=?
  WHERE id = ?
  `, [title, content, cat_id, id])
    return rows[0]
}

getCatNazamByCatId = async function (cat_id) {
    const [rows] = await pool.query(`
  SELECT * 
  FROM catnazams
  WHERE cat_id = ?
  `, [cat_id])
    return rows
}

deleteCatNazam = async function (id) {
    const [rows] = await pool.query(`
  DELETE 
  FROM catnazams
  WHERE id = ?
  `, [id])
    return rows[0]
}

createCatNazam = async function (title, content, cat_id) {
    const [result] = await pool.query(`
    INSERT INTO catnazams (title, content, cat_id)
VALUES (?,?, ?)
  `, [title, content, cat_id])
    const id = result.insertId
    return getCatNazam(id)
}


module.exports = { getCatNazams, getCatNazam, createCatNazam, updateCatNazam, deleteCatNazam, getCatNazamByCatId }






