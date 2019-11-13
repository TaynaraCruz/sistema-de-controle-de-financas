// João Vitor Campos Teixeira

const { response } = require('../helper');

const index = require('../../api/index');

describe('index api', () => {
    test('should 200 oi', async () => {
        const req = {};
        const res = response();
        await index(req, res);
        expect(res.end).toBeCalledWith('Housefly\n');
    });
});
