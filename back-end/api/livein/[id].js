const db = require('../../lib/db');
const {
    ifAuth
} = require('../../lib/auth');
const SQL = require('sql-template-strings');

module.exports = ifAuth(async (req, res) => {
    const {
        id
    } = req.query;

    const checkResident = await db.query(SQL `
        SELECT 
            COUNT(*) as count
        FROM
            LiveIn
        WHERE
            user_id = ${+req.user.id} AND house_id = ${id};
    `)
    if (checkResident.error) {
        return res.status(500).json({
            error: 'internal server error',
            details: result.error.toString()
        });
    }

    if (checkResident[0].count === 1) {
        const result = await db.query(SQL `
            SELECT 
                id, name, income, email
            FROM
                User
                    INNER JOIN
                LiveIn ON User.id = LiveIn.user_id
            WHERE
                house_id = ${id};
        `);
        if (result.error) {
            return res.status(500).json({
                error: 'internal server error',
                details: result.error.toString()
            });
        } else {
            return res.status(200).json({
                residents: result
            });
        }
    } else {
        return res.status(403).json({
            error: 'forbidden'
        });
    }

    
});