// João Vítor Campos Teixeira

const mockDB = new (require('../../__mocks__/db'))();
jest.mock('../../../lib/db', () => mockDB);

const { response, authRequest } = require('../../helper');

const constantes = require('../../../lib/constants');
constantes.JWT_SECRET = '1';

const handler = require('../../../api/user/new');

describe('user/new', () => {
    test('200 - novo usuário criado com sucesso', async () => {
        mockDB.__setResult(
            {insertId: 1},
        )
        const req = authRequest({
            body: {
                name: 'user',
                income: 1000,
                email: 'user@email',
                password: '123456',
            },
        });
        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            created: 1,
        });
    });
    test('should 400 invalid request', async () => {
        const req = authRequest({
            body: undefined,
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(400);
        expect(res.json).toBeCalledWith({
            error: 'invalid request'
        });
    });

    test('should 400 incomplete form', async () => {
        const req = authRequest({
            body: {}
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(400);
        expect(res.json).toBeCalledWith({
            error: 'incomplete form'
        });
    });

    test('500 - bd error', async () => {
        mockDB.__setResult(
            { error: 'ECONREFUSED' }
        )
        const req = authRequest({
            body: {
                name: 'user',
                income: 1000,
                email: 'user@email',
                password: '123456',
            }
        });
        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({
            error: 'internal server error',
            details: 'ECONREFUSED',
        });
    })

    test('200 - email in use', async () => {
        mockDB.__setResult(
            { error:{code:'ER_DUP_ENTRY'}},
        )
        const req = authRequest({
            body: {
                name: 'user',
                income: 1000,
                email: 'user@email',
                password: '123456',
            }
        });
        const res = response();
        await handler(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            error: 'email already in use',
        });
    })
})