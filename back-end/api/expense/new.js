const db = require('../../lib/db');
const {
    ifAuth
} = require('../../lib/auth');
const SQL = require('sql-template-strings');

module.exports = ifAuth(async (req, res) => {
    if (typeof req.body !== 'object') {
        return res.status(400).json({
            error: 'invalid request'
        });
    }

    const {
        name,
        date,
        value,
        houseId
    } = req.body;

    const checkAdminQuery = await db.query(SQL `
        SELECT
            admin_id
        FROM
            House
        WHERE
            id = ${houseId};
    `);
    if (checkAdminQuery.error) {
        return res.status(500).json({
            error: 'Internal server error',
            details: result.error.toString()
        });
    } else if (checkAdminQuery[0].admin_id !== +req.user.id) {
        return res.status(403).json({
            error: 'forbidden'
        });
    }

    const result = await db.query(SQL `
        INSERT INTO
            Expense(name, date, value, house_id)
        VALUES
            (${name}, ${date}, ${value}, ${houseId});
    `);
    if (result.error) {
        return res.status(500).json({
            error: 'Internal server error',
            details: result.error.toString()
        });
    } else {
        return res.status(200).json({
            created: result.insertId
        });
    }
});