const db = require('../../lib/db')
const SQL = require('sql-template-strings')

module.exports = async (req, res) => {
    const [house] = await db.query(SQL`
    SELECT *
    FROM House
    WHERE id = ${req.query.id}
    `)
    res.status(200).json({ house })
}
