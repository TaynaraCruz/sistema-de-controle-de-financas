const h = require('../../lib/headers');
const db = require('../../lib/db');
const { ifAuth } = require('../../lib/auth');
const SQL = require('sql-template-strings');

module.exports = h(ifAuth(async (req, res) => {
    let result = await db.query(SQL`select id, name, income, email from User where id=${req.user.id};`);
    if (result.error) {
        return res.status(500).json({error: 'internal server error', details: result.error.toString()});
    } else {
        return res.status(200).json({
            user: result[0],
        });
    }
}));
