var pool = require('../config/dbConfig')


getNazams = async function () {
  const [rows] = await pool.query(`
    SELECT * 
    FROM nazams
    `)
  return rows
}

getNazam = async function (id) {
  const [rows] = await pool.query(`
  SELECT * 
  FROM nazams
  WHERE id = ?
  `, [id])
  return rows[0]
}

getNazamByPoetId = async function (poet_id) {
  const [rows] = await pool.query(`
SELECT * 
FROM nazams
WHERE poet_id = ?
`, [poet_id])
  return rows
}

updateNazam = async function (title, content, poet_id, id) {
  const [rows] = await pool.query(`
  UPDATE nazams
  SET title = ?, content = ?, poet_id=?
  WHERE id = ?
  `, [title, content, poet_id, id])
  return rows[0]
}

deleteNazam = async function (id) {
  const [rows] = await pool.query(`
  DELETE 
  FROM nazams
  WHERE id = ?
  `, [id])
  return rows[0]
}

createNazam = async function (title, content, poet_id) {
  const [result] = await pool.query(`
    INSERT INTO nazams (title, content, poet_id)
VALUES (?,?, ?)
  `, [title, content, poet_id])
  const id = result.insertId
  return getNazam(id)
}


module.exports = { getNazams, getNazam, createNazam, updateNazam, deleteNazam, getNazamByPoetId }






