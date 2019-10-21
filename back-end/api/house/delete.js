const db = require('../../lib/db');
const {
    ifAuth
} = require('../../lib/auth');
const SQL = require('sql-template-strings');

module.exports = ifAuth(async (req, res) => {
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

    const checkAdmin = await db.query(SQL `
        SELECT
            admin_id
        FROM
            House
        WHERE
            id = ${id};
    `);
    if (checkAdmin.error) {
        return res.status(500).json({
            error: 'internal server error',
            details: result.error.toString()
        });
    }

    if (checkAdmin[0].admin_id === req.user.id) {
        const result = await db.query(SQL `
            DELETE FROM House
            WHERE
                id = ${id};
        `);
        if (result.error) {
            return res.status(500).json({
                error: 'internal server error',
                details: result.error.toString()
            });
        } else {
            return res.status(200).json({
                deleted: id
            });
        }
    } else {
        return res.status(403).json({
            error: 'forbidden'
        });
    }

});