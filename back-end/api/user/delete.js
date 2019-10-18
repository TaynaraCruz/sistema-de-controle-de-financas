const db = require('../../lib/db');
const { ifAuth } = require('../../lib/auth');
const SQL = require('sql-template-strings');

module.exports = ifAuth(async (req, res) => {
    if (typeof req.body !== 'object') {
        return res.status(400).json({error: 'invalid request'})
    }
    const { id, confirmation } = req.body;
    if (!id || !confirmation) {
        return res.status(400).json({error: 'incomplete form'});
    } else if (+id !== req.user.id) {
        return res.status(403).json({error: 'forbidden'});
    }
    let hash = require('crypto').randomBytes(60).toString('hex');
    let result = await db.query(SQL`update User set name='Usuário excluído', income=0, email=${hash}, password='0' where id=${id};`);
    if (result.error) {
        return res.status(500).json({error: 'internal server error', details: result.error.toString()});
    } else {
        return res.status(200).json({
            deleted: id,
        });
    }
});
