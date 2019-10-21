const db = require('../../lib/db');
const {
    ifAuth
} = require('../../lib/auth');
const SQL = require('sql-template-strings');

module.exports = ifAuth(async (req, res) => {
    const {
        id
    } = req.query;

    const checkResident = await db.query(SQL`
        SELECT 
            COUNT(*) as count
        FROM
            LiveIn
        WHERE
            user_id = ${+req.user.id} AND house_id = ${id};
    `);
    if (checkResident.error) {
        return res.status(500).json({
            error: 'internal server error',
            details: result.error.toString()
        });
    }

    if (checkResident[0].count === 1) {
        const result = await db.query(SQL `
            SELECT
                House.id as house_id,
                House.name as house_name,
                House.admin_id as admin_id,
                User.name as user_name,
                User.income as user_income,
                User.email as user_email
            FROM
                House
                    INNER JOIN
                User ON User.id = House.admin_id
            WHERE
                House.id = 14;
        `);
        if (result.error) {
            return res.status(500).json({
                error: 'internal server error',
                details: result.error.toString()
            });
        } else {
            return res.status(200).json({
                house: {
                    id: result[0].house_id,
                    name: result[0].house_name,
                },
                admin: {
                    id: result[0].admin_id,
                    name: result[0].user_name,
                    income: result[0].user_income,
                    email: result[0].user_email
                }
            });
        }
    }
});
