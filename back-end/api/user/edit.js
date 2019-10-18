const db = require('../../lib/db');
const { sha256, ifAuth, signToken } = require('../../lib/auth');
const SQL = require('sql-template-strings');

module.exports = ifAuth(async (req, res) => {
    if (typeof req.body !== 'object') {
        return res.status(400).json({error: 'Invalid request'})
    }
    const { id, name, income, email, password } = req.body;
    if (!id || !name || !income || !email) {
        return res.status(400).json({error: 'Incomplete form'});
    } else if (+id !== req.user.id) {
        return res.status(403).json({error: 'forbidden'});
    }
    let query;
    if (password) {
        query = SQL`update User set name=${name}, income=${income}, email=${email}, password=${sha256(password)} where id=${id};`;
    } else {
        query = SQL`update User set name=${name}, income=${income}, email=${email} where id=${id};`;
    }
    let result = await db.query(query);
    if (result.error) {
        if (result.error.code === 'ER_DUP_ENTRY') {
            return res.status(200).json({error: 'email already in use'});
        } else {
            return res.status(500).json({error: 'internal server error', details: result.error.toString()});
        }
    } else {
        let user = { id, name, email };
        return res.status(200).json({
            user,
            token: signToken(user),
        });
    }
});
