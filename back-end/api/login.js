const db = require('../lib/db');
const { sha256, signToken } = require('../lib/auth');
const SQL = require('sql-template-strings');

module.exports = async (req, res) => {
    if (typeof req.body !== 'object') {
        return res.status(400).json({error: 'invalid request'});
    }
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({error: 'incomplete form'});
    }
    let result = await db.query(SQL`select * from User where email=${email} and password=${sha256(password)};`);
    if (result.error) {
        return res.status(500).json({error: 'internal server error: '+result.error.toString()});
    } else if (result.length === 0){
        return res.status(404).json({error: 'invalid email or password'});
    } else {
        let user = {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
        }
        return res.status(200).json({
            user,
            token: signToken(user),
        });
    }
}
