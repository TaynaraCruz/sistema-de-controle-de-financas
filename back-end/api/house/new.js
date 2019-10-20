const db = require('../../lib/db');
const {
    ifAuth
} = require('../../lib/auth');
const SQL = require('sql-template-strings');

module.exports = ifAuth(async (req, res) => {
    if (typeof req.body !== 'object') {
        return res.status(400).json({
            error: 'invalid request'
        });
    }

    const {
        name
    } = req.body;
    if (!name) {
        return res.status(400).json({
            error: 'incomplete form'
        });
    }

    let results = await db.transaction().query(SQL`
        INSERT INTO
            House(name, admin_id)
        VALUES
            (${name}, ${req.user.id});`
    ).query((r) => [SQL`
        INSERT INTO
            LiveIn(user_id, house_id)
        VALUES
            (${req.user.id}, ${r.insertId});`]
    ).rollback((e) => {
        // TODO: Fix error here.
        res.status(500).json({
            error: 'Internal server error',
            details: e.toString()
        });
    }).commit();

    db.end();

    return res.status(200).json({
        created: results[0].insertId
    })
});