const mysql = require('serverless-mysql')
const { DB_HOST, DB_NAME, DB_USER, DB_PASS, DB_PORT } = require('./constants');

const db = mysql({
  config: {
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASS,
    port: DB_PORT,
  }
})

exports.query = async query => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}
