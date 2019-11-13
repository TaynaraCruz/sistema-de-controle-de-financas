//Taynara Lorraine Marcelino da Cruz

const mockDB = new (require('../../__mocks__/db'))();
jest.mock('../../../lib/db', () => mockDB);

const { response, authRequest } = require('../../helper');

const constantes = require('../../../lib/constants');
constantes.JWT_SECRET = '1';

const expenseHandler = require('../../../api/expense');

describe('expense', () => {
    test('should 200 success', async () => {
        const date = new Date();
        mockDB.__setResult(
            [{ count: 1 }],
            [{ id: 1, name: 'despesa', date: date, value: 20}],
            
        )

        const req = authRequest({
            body: {
                id: 1,
            },
        });

        const res = response();

        await expenseHandler(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            expenses: [{ id: 1, name: 'despesa', date: date, value: 20 }],
        });
    });

    test('should 400 invalid request', async () => {
        const date = new Date();
        mockDB.__setResult(
            [{ count: 1 }],
            [{ id: 1, name: 'despesa', date: date, value: 20}],
            
        )

        const req = authRequest({
            body: 'ola mundo',
        });

        const res = response();

        await expenseHandler(req, res);
        expect(res.status).toBeCalledWith(400);
        expect(res.json).toBeCalledWith({ error: 'invalid request' });
    });

    test('should 400 incomplete form', async () => {
        const date = new Date();
        mockDB.__setResult(
            [{ count: 1 }],
            [{ id: 1, name: 'despesa', date: date, value: 20}],
            
        )

        const req = authRequest({
            body: {
                
            },
        });

        const res = response();

        await expenseHandler(req, res);
        expect(res.status).toBeCalledWith(400);
        expect(res.json).toBeCalledWith({ error: 'incomplete form' });
    });


    test('should 500 internal server error', async () => {
        const date = new Date();
        mockDB.__setResult(
            { error: 'PROTOCOL_TIMEDOUT_CONNECTION' },
            [{ id: 1, name: 'despesa', date: date, value: 20}],
            
        )

        const req = authRequest({
            body: {
                id: 1,
            },
        });

        const res = response();

        await expenseHandler(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({ error: 'internal server error', details: 'PROTOCOL_TIMEDOUT_CONNECTION' });
    });

    test('should 500 internal server error', async () => {
        const date = new Date();
        mockDB.__setResult(
            [{ count: 1 }],
            { error: 'PROTOCOL_TIMEDOUT_CONNECTION' },
            
        )

        const req = authRequest({
            body: {
                id: 1,
            },
        });

        const res = response();

        await expenseHandler(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({ error: 'internal server error', details: 'PROTOCOL_TIMEDOUT_CONNECTION' });
    });

});
