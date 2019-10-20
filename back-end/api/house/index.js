const db = require('../../lib/db')
const SQL = require('sql-template-strings')

module.exports = async (req, res) => {
  let page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 9
  if (page < 1) page = 1
  const houses = await db.query(SQL`
      SELECT *
      FROM House
      ORDER BY id
      LIMIT ${(page - 1) * limit}, ${limit}
    `)
  const count = await db.query(SQL`
      SELECT COUNT(*)
      AS housesCount
      FROM House
    `)
  const { housesCount } = count[0]
  const pageCount = Math.ceil(housesCount / limit)
  res.status(200).json({ houses, pageCount, page })
}
