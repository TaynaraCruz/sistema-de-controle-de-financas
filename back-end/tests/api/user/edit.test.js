// José Carlos de Oliveira Júnior

const mockDB = new(require('../../__mocks__/db'))();
jest.mock('../../../lib/db', () => mockDB);

const {
    response,
    authRequest
} = require('../../helper');

const constantes = require('../../../lib/constants');
constantes.JWT_SECRET = '1';

const handler = require('../../../api/user/edit');

const {
    verifyToken
} = require('../../../lib/auth');

describe('user/edit', () => {
    test('should 200 with no password', async () => {
        mockDB.__setResult([]);

        const user = {
            id: 1,
            name: 'User',
            income: '500',
            email: 'user@gmail.com'
        }

        const req = authRequest({
            body: user
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json.mock.calls.length).toBe(1);
        expect(res.json.mock.calls[0][0].user).toStrictEqual({
            id: 1,
            name: 'User',
            email: 'user@gmail.com'
        });
        expect(() => verifyToken(res.json.mock.calls[0][0].token)).not.toThrow();
    })

    test('should 200 email already in use', async () => {
        mockDB.__setResult({
            error: {
                code: 'ER_DUP_ENTRY'
            }
        });

        const user = {
            id: 1,
            name: 'User',
            income: '500',
            email: 'user@gmail.com',
            password: '500'
        }

        const req = authRequest({
            body: user
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            error: 'email already in use'
        });
    });

    test('should 500 internal server error', async () => {
        mockDB.__setResult({
            error: 'PROTOCOL_TIMEDOUT_CONNECTION'
        });

        const user = {
            id: 1,
            name: 'User',
            income: '500',
            email: 'user@gmail.com',
            password: '500'
        }

        const req = authRequest({
            body: user
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({
            error: 'internal server error',
            details: 'PROTOCOL_TIMEDOUT_CONNECTION'
        });
    })

    test('should 200 success', async () => {
        mockDB.__setResult([]);

        const user = {
            id: 1,
            name: 'User',
            income: '500',
            email: 'user@gmail.com',
            password: '500'
        }

        const req = authRequest({
            body: user
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json.mock.calls.length).toBe(1);
        expect(res.json.mock.calls[0][0].user).toStrictEqual({
            id: 1,
            name: 'User',
            email: 'user@gmail.com'
        });
        expect(() => verifyToken(res.json.mock.calls[0][0].token)).not.toThrow();
    });

});