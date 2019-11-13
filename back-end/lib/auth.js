const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./constants');

const sha256 = str => crypto.createHash('sha256').update(str).digest('hex');

function signToken (payload) {
    return jwt.sign(payload, JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: '3h',
    });
};

function verifyToken (token) {
    return jwt.verify(token, JWT_SECRET, {
        algorithms: ['HS256'],
    });
}

function auth (req) {
    let authorization = (req.headers && req.headers.authorization) || '';
    let [type, token] = authorization.split(' ');

    if (!authorization && req.query && req.query.bearer) {
        type = 'Bearer';
        token = req.query.bearer;
    }
    if (type != 'Bearer') return false;

    try {
        req.user = verifyToken(token);
        return true;
    } catch (err) {
        return false;
    }
}

function unauthorizedHandler (req, res) {
    return res.status(401).json({ error: 'unauthorized' });
}

const ifAuth = handle => (req, res) => auth(req) ? handle(req, res) : unauthorizedHandler(req, res);

module.exports = {
    sha256,
    signToken,
    verifyToken,
    ifAuth,
};

