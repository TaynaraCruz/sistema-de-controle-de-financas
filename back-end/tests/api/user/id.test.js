// José Carlos de Oliveira Júnior

const mockDB = new (require('../../__mocks__/db'))();
jest.mock('../../../lib/db', () => mockDB);

const { response, authRequest } = require('../../helper');

const constantes = require('../../../lib/constants');
constantes.JWT_SECRET = '1';

const handler = require('../../../api/user/[id]');

describe('user/id', () => {
    test('should 500 internal server error', async () => {
        mockDB.__setResult ({
            error: 'PROTOCOL_TIMEDOUT_CONNECTION'
        });

        const req = authRequest({
            query: 0
        });

        const res = response();

        await handler(req, res);

        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({
            error: 'internal server error',
            details: 'PROTOCOL_TIMEDOUT_CONNECTION'
        });
    });

    test('should 404 not found or forbidden', async () => {
        mockDB.__setResult([]);

        const req = authRequest({
            query: 0
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(404);
        expect(res.json).toBeCalledWith({
            error: 'not found or forbidden'
        });
    });

    test('should 200 success', async () => {
        const user = {
            id: 0,
            name: 'User',
            income: '400',
            email: 'user@gmail.com',
            password: '123'
        };

        mockDB.__setResult([user]);

        const req = authRequest({
            query: 0
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            user
        });
    });
});