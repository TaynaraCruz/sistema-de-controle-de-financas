const db = require('../../lib/db');
const { sha256 } = require('../../lib/auth');
const SQL = require('sql-template-strings');

module.exports = async (req, res) => {
    if (typeof req.body !== 'object') {
        return res.status(400).json({error: 'Invalid request'})
    }
    const { name, income, email, password } = req.body;
    if (!name || !income || !email || !password) {
        return res.status(400).json({error: 'Incomplete form'});
    }
    let result = await db.query(SQL`insert into User (name, income, email, password) values (${name}, ${income}, ${email}, ${sha256(password)});`);
    if (result.error) {
        if (result.error.code === 'ER_DUP_ENTRY') {
            return res.status(200).json({error: 'email already in use'});
        } else {
            return res.status(500).json({error: 'internal server error', details: result.error.toString()});
        }
    } else {
        return res.status(200).json({created: result.insertId});
    }
}
