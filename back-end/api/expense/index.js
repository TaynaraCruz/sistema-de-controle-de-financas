const h = require('../../lib/headers');
const db = require('../../lib/db');
const {
    ifAuth
} = require('../../lib/auth');
const SQL = require('sql-template-strings');

module.exports = h(ifAuth(async (req, res) => {
    if (typeof req.body !== 'object') {
        return res.status(400).json({
            error: 'invalid request'
        })
    }

    const {
        id
    } = req.body;
    if (!id) {
        return res.status(400).json({
            error: 'incomplete form'
        });
    }

    const checkResident = await db.query(SQL `
        SELECT 
            COUNT(*) as count
        FROM
            LiveIn
        WHERE
            user_id = ${+req.user.id} AND house_id = ${id};
    `);
    if (checkResident.error) {
        return res.status(500).json({
            error: 'internal server error',
            details: checkResident.error.toString()
        });
    }

    const result = await db.query(SQL `
       SELECT
            id, name, date, value
        FROM
            Expense
        WHERE
            house_id = 1;
    `);
    if (result.error) {
        return res.status(500).json({
            error: 'internal server error',
            details: result.error.toString()
        });
    } else {
        return res.status(200).json({
            expenses: result
        });
    }
}));