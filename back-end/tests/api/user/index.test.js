const mockDB = new (require('../../__mocks__/db'))();
jest.mock('../../../lib/db', () => mockDB);

const { response, authRequest } = require('../../helper');

const constantes = require('../../../lib/constants');
constantes.JWT_SECRET = '1';

const handler = require('../../../api/user');

describe('visualização do usuário logado', () => {
    test('200 - busca usuário com sucesso', async () => {
        mockDB.__setResult(
            [{ id: 1, name: 'user', income: 1000, email: 'user@email' }]
        )
        const req = authRequest();
        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            user: { id: 1, name: 'user', income: 1000, email: 'user@email' },
        });
    });

    test('500 - bd error', async () => {
        mockDB.__setResult(
            { error: 'ECONREFUSED' }
        )
        const req = authRequest();
        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({
            error: 'internal server error',
            details: 'ECONREFUSED',
        });
    })
})
