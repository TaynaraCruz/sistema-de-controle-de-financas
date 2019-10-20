const db = require('../../lib/db');
const { ifAuth } = require('../../lib/auth');
const SQL = require('sql-template-strings');

module.exports = ifAuth(async (req, res) => {
    if (typeof req.body !== 'object') {
        return res.status(400).json({
            error: 'invalid request'
        });
    }

    const { name } = req.body;
    if (!name) {
        return res.status(400).json({
            error: 'incomplete form'
        });
    }

    const result = await db.query(SQL`INSERT INTO
            House(name, admin_id) VALUES (
                "${name}", ${req.user.id}
            );`)
    
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