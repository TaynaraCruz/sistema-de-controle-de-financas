//Taynara Lorraine Marcelino da Cruz

const mockDB = new (require('../../__mocks__/db'))();
jest.mock('../../../lib/db', () => mockDB);

const { response, authRequest } = require('../../helper');

const constantes = require('../../../lib/constants');
constantes.JWT_SECRET = '1';

const newHandler = require('../../../api/expense/new');

describe('expense/new', () => {
    test('should 200 success', async () => {
        const date = new Date();
        mockDB.__setResult(
            [{ admin_id: 1}],
            {insertId: 1},
            
        )

        const req = authRequest({
            body: {
                name: 'Despesa',
                date: date,
                value: 20,
                houseId: 1,
            },
        });

        const res = response();

        await newHandler(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({ created: 1 });
    });

    test('should 400 invalid request', async () => {
        const date = new Date();
        mockDB.__setResult(
            [{ admin_id: 1}],
            {insertId: 1},
            
        )

        const req = authRequest({
            body: 'ola mundo',
        });

        const res = response();

        await newHandler(req, res);
        expect(res.status).toBeCalledWith(400);
        expect(res.json).toBeCalledWith({ error: 'invalid request' });
    });

    test('should 403 forbidden', async () => {
        const date = new Date();
        mockDB.__setResult(
            [{ admin_id: 0}],
            {insertId: 1},
            
        )

        const req = authRequest({
            body: {
                name: 'Despesa',
                date: date,
                value: 20,
                houseId: 1,
            },
        });

        const res = response();

        await newHandler(req, res);
        expect(res.status).toBeCalledWith(403);
        expect(res.json).toBeCalledWith({ error: 'forbidden' });
    });

    test('should 500 internal server error', async () => {
        const date = new Date();
        mockDB.__setResult(
            { error: 'PROTOCOL_TIMEDOUT_CONNECTION' },
            {insertId: 1},
            
        )

        const req = authRequest({
            body: {
                name: 'Despesa',
                date: date,
                value: 20,
                houseId: 1,
            },
        });

        const res = response();

        await newHandler(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({ error: 'internal server error', details: 'PROTOCOL_TIMEDOUT_CONNECTION' });
    });

    test('should 500 internal server error', async () => {
        const date = new Date();
        mockDB.__setResult(
            [{ admin_id: 1}],
            { error: 'PROTOCOL_TIMEDOUT_CONNECTION' },
            
        )

        const req = authRequest({
            body: {
                name: 'Despesa',
                date: date,
                value: 20,
                houseId: 1,
            },
        });

        const res = response();

        await newHandler(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({ error: 'internal server error', details: 'PROTOCOL_TIMEDOUT_CONNECTION' });
    });

});
