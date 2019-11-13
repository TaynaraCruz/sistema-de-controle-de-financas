const h = require('../../lib/headers');
const db = require('../../lib/db');
const {
    ifAuth
} = require('../../lib/auth');
const SQL = require('sql-template-strings');

module.exports = h(ifAuth(async (req, res) => {
    const {
        id
    } = req.query;

    const result = await db.query(SQL `
        SELECT
            *
        FROM
            Expense
        WHERE
            id = ${id};
    `);
    if (result.error) {
        return res.status(500).json({
            error: 'internal server error',
            details: result.error.toString()
        });
    }

    const checkResident = await db.query(SQL `
        SELECT
            COUNT(*) as count
        FROM
            LiveIn
        WHERE
            user_id = ${+req.user.id} AND house_id = ${result[0].house_id};
    `);
    if (checkResident.error) {
        return res.status(500).json({
            error: 'internal server error',
            details: checkResident.error.toString()
        });
    } else if (checkResident[0].count === 1) {
        return res.status(200).json({
            expense: result[0]
        });
    } else {
        return res.status(403).json({
            error: 'forbidden'
        });
    }
}));