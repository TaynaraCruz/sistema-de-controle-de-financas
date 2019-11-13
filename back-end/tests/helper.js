function response () {
    let res = {};
    res.setHeader = jest.fn();
    res.end = jest.fn();
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn();
    return res;
}

/**
 * Retorna uma request do método 'POST' com o usuário { id: 1, name: 'user', email: 'user@email', 'exp': 5360044069, 'iat': 1573132069 } logado
 * @param {object} [request] 
 */
function authRequest (request) {
    let req = request || {};
    req.method = 'POST';
    req.headers = req.headers || {};
    req.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAZW1haWwiLCJpYXQiOjE1NzMxMzIwNjksImV4cCI6NTM2MDA0NDA2OX0.5LutJfge3wwvJjhh5nVBj_rslvOHSDSDt7RjRzzTagU';
    return req;
}

module.exports = {
    response,
    authRequest,
}
