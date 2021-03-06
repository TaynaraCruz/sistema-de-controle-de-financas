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
        });
    }

    const checkResident = await db.query(SQL `
        SELECT 
            *
        FROM
            House
        WHERE
            id IN (SELECT 
                    house_id
                FROM
                    LiveIn
                WHERE
                    user_id = ${+req.user.id});
    `);

    if (checkResident.error) {
        return res.status(500).json({
            error: 'internal server error',
            details: checkResident.error.toString()
        });
    } else {
        return res.status(200).json({
            houses: checkResident
        });
    }
}));
