var pool = require('../config/dbConfig')

getCategories = async function () {
    const [rows] = await pool.query(`
    SELECT * 
    FROM category
    `)
    return rows
}

getCategory = async function (id) {
    const [rows] = await pool.query(`
  SELECT * 
  FROM category
  WHERE id = ?
  `, [id])
    return rows[0]
}

updateCategory = async function (name, description, pic, id) {
    const [rows] = await pool.query(`
  UPDATE category
  SET name = ?,description=?, pic=?
  WHERE id = ?
  `, [name, description, pic, id])
    return rows[0]
}

deleteCategory = async function (id) {
    const [rows] = await pool.query(`
  DELETE 
  FROM category
  WHERE id = ?
  `, [id])
    return rows[0]
}

createCategory = async function (name, description, pic) {
    const [result] = await pool.query(`
    INSERT INTO category (name, description, pic)
VALUES (?, ?, ?)
  `, [name, description, pic])
    const id = result.insertId
    return getCategory(id)
}


module.exports = { getCategories, getCategory, createCategory, updateCategory, deleteCategory }

