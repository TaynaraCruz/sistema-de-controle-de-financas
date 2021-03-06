// João Vítor Campos Teixeira

const mockDB = new (require('../../__mocks__/db'))();
jest.mock('../../../lib/db', () => mockDB);

const { response, authRequest } = require('../../helper');

const constantes = require('../../../lib/constants');
constantes.JWT_SECRET = '1';

const handler = require('../../../api/user/delete');

describe('user/delete', () => {

    test('should 200 success', async () => {
        const date = new Date();
        mockDB.__setResult(
            [{
                id : 1
            }]
        );
        const req = authRequest({
            body: {
                id: 1,
                confirmation: 1,
            },
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            deleted: 1
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

    test('should 403 forbidden', async () => {
        const date = new Date();

        const req = authRequest({
            body: {
                id: 2,
                confirmation: 2,
            },
            user: {
                id: 1,
            }
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(403);
        expect(res.json).toBeCalledWith({
            error: 'forbidden'
        });
    });
    test('should 500 internal server error', async () => {
        const date = new Date();
        mockDB.__setResult(
            {error: 'PROTOCOL_TIMEDOUT_CONNECTION'},
        )

        const req = authRequest({
            body: {
                id: 1,
                confirmation: 1,
            },
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({ error: 'internal server error', details: 'PROTOCOL_TIMEDOUT_CONNECTION' });
    });
})