const db = require('../../lib/db');
const { ifAuth } = require('../../lib/auth');
const SQL = require('sql-template-strings');

module.exports = ifAuth(async (req, res) => {
    let { id } = req.query;
    let result = await db.query(SQL`select id, name, income, email from User join (SELECT user_id from LiveIn where house_id in (select house_id from LiveIn where user_id=${req.user.id})) sel on id = user_id where user_id = ${id};`);
    if (result.error) {
        return res.status(500).json({error: 'internal server error', details: result.error.toString()});
    } else if (result.length === 0) {
        return res.status(404).json({error: 'not found or forbidden'});
    } else {
        return res.status(200).json({
            user: result[0],
        });
    }
});
