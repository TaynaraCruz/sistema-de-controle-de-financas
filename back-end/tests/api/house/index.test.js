// José Carlos de Oliveira Júnior

const mockDB = new(require('../../__mocks__/db'))();
jest.mock('../../../lib/db', () => mockDB);

const {
    response,
    authRequest
} = require('../../helper');

const constantes = require('../../../lib/constants');
constantes.JWT_SECRET = '1';

const handler = require('../../../api/house/index');

describe('house/index', () => {
    test('should 500 internal server error', async () => {
        mockDB.__setResult({
            error: 'PROTOCOL_TIMEDOUT_CONNECTION'
        });

        const req = authRequest({});

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({
            error: 'internal server error',
            details: 'PROTOCOL_TIMEDOUT_CONNECTION'
        });
    });

    test('should 200 success', async () => {
        const houses = [{
            id: 0,
            name: 'House 1',
            admin_id: 1
        }, {
            id: 0,
            name: 'House 2',
            admin_id: 1
        }]

        mockDB.__setResult(houses);

        const req = authRequest({});

        const res = response({});

        await handler(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            houses
        });
    });
});