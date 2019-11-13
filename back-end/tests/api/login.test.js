const mockDB = new (require('../__mocks__/db'))();
jest.mock('../../lib/db', () => mockDB);

const { response } = require('../helper');

const constantes = require('../../lib/constants');
constantes.JWT_SECRET = '1';

const { verifyToken } = require('../../lib/auth');

const login = require('../../api/login');

describe('login', () => {
    test('should 400 invalid request', async () => {
        const req = {
            body: 'email=tay;password=123',
        };

        const res = response();

        await login(req, res);
        expect(res.status).toBeCalledWith(400);
        expect(res.json).toBeCalledWith({error: 'invalid request'});
    });

    test('should 400 incomplete form', async () => {        
        const req = {
            body: {
                email: 'tay@t',
            },
        };

        const res = response();

        await login(req, res);
        expect(res.status).toBeCalledWith(400);
        expect(res.json).toBeCalledWith({error: 'incomplete form'});
    });

    test('should 404 user not found', async () => {
        mockDB.__setResult([])

        const req = {
            body: {
                email: 'tay@t',
                password: '123',
            },
        };

        const res = response();

        await login(req, res);
        expect(res.status).toBeCalledWith(404);
        expect(res.json).toBeCalledWith({error: 'invalid email or password'});
    });


    test('should 500 db error', async () => {
        mockDB.__setResult({error: 'TIMEDOUT'})

        const req = {
            body: {
                email: 'tay@t',
                password: '123',
            },
        };

        const res = response();

        await login(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({error: 'internal server error: TIMEDOUT'});
    });

    test('should 200 success with user tay', async () => {
        mockDB.__setResult(
            [{ id: 1, name: 'Tay', email: 'tay@t' }],
        );

        const req = {
            body: {
                email: 'tay@t',
                password: 'sim',
            },
        };

        const res = response();

        await login(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json.mock.calls.length).toBe(1);
        expect(res.json.mock.calls[0][0].user).toStrictEqual({id:1, name: 'Tay', email: 'tay@t'});
        expect(() => verifyToken(res.json.mock.calls[0][0].token)).not.toThrow();
    });
});
