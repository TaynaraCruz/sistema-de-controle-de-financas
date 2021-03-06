//Taynara Lorraine Marcelino da Cruz e João Vítor Campos Teixeira

const mockDB = new (require('../../__mocks__/db'))();
jest.mock('../../../lib/db', () => mockDB);

const { response, authRequest } = require('../../helper');

const constantes = require('../../../lib/constants');
constantes.JWT_SECRET = '1';

const idHandler = require('../../../api/house/[id]');

describe('house/id', () => {
    test('should 200 success', async () => {
        const date = new Date();
        mockDB.__setResult(
            [{ count: 1 }],
            [{ house_id: 1, house_name: 'Casa', admin_id: 1, user_name: 'Tay', user_income: 20, user_email: 'tay@t' }],
            
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
            house: { id: 1, name: 'Casa' },
            admin: { id: 1, name: 'Tay', income: 20, email: 'tay@t' },
        });
    });

    test('should 403 forbidden', async () => {
        const date = new Date();
        mockDB.__setResult(
            [{ count: 0 }],
            [{ house_id: 1, house_name: 'Casa', admin_id: 1, user_name: 'Tay', user_income: 20, user_email: 'tay@t' }],
            
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
            [{ count: 1 }],
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
            [{ house_id: 1, house_name: 'Casa', admin_id: 1, user_name: 'Tay', user_income: 20, user_email: 'tay@t' }],
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
