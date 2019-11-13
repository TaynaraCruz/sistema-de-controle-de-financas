//Taynara Lorraine Marcelino da Cruz

const mockDB = new (require('../../__mocks__/db'))();
jest.mock('../../../lib/db', () => mockDB);

const { response, authRequest } = require('../../helper');

const constantes = require('../../../lib/constants');
constantes.JWT_SECRET = '1';

const idHandler = require('../../../api/expense/[id]');

describe('expense/id', () => {
    test('should 200 success', async () => {
        const date = new Date();
        mockDB.__setResult(
            [{ id: 1, name: 'despesa', date: date, value: 20, house_id: 1 }],
            [{ count: 1 }],
        )

        const req = authRequest({
            query: {
                id: 1,
            },
        });

        const res = response();

        await idHandler(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            expense: { id: 1, name: 'despesa', date: date, value: 20, house_id: 1 }
        });
    });

    test('should 403 forbidden', async () => {
        const date = new Date();
        mockDB.__setResult(
            [{ id: 1, name: 'despesa', date: date, value: 20, house_id: 1 }],
            [{ count: 0 }],
        )

        const req = authRequest({
            query: {
                id: 1,
            },
        });

        const res = response();

        await idHandler(req, res);
        expect(res.status).toBeCalledWith(403);
        expect(res.json).toBeCalledWith({ error: 'forbidden' });
    });

    test('should 500 internal server error', async () => {
        const date = new Date();
        mockDB.__setResult(
            [{ id: 1, name: 'despesa', date: date, value: 20, house_id: 1 }],
            { error: 'PROTOCOL_TIMEDOUT_CONNECTION' },
        )

        const req = authRequest({
            query: {
                id: 1,
            },
        });

        const res = response();

        await idHandler(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({ error: 'internal server error', details: 'PROTOCOL_TIMEDOUT_CONNECTION' });
    });

    test('should 500 internal server error', async () => {
        const date = new Date();
        mockDB.__setResult(
            { error: 'PROTOCOL_TIMEDOUT_CONNECTION' },
            [{ count: 0 }],
        )

        const req = authRequest({
            query: {
                id: 1,
            },
        });

        const res = response();

        await idHandler(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({ error: 'internal server error', details: 'PROTOCOL_TIMEDOUT_CONNECTION' });
    });

});
