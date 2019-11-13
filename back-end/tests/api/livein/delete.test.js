// Larissa Gomes Malagoli

// inicializações //

// mock do banco de dados 
const mockDB = new (require('../../__mocks__/db'))();
jest.mock('../../../lib/db', () => mockDB);

// mock de requisição (autenticada) e resposta 
const { response, authRequest } = require('../../helper');

// configuração da variável de segurança do token JWT (quase que um mock tbm)
const constantes = require('../../../lib/constants');
constantes.JWT_SECRET = '1';

const handler = require('../../../api/livein/delete');

describe('/livein/delete)', () => {
    test('shound 400 invalid request', async () => {
        const req = authRequest({
            body: undefined
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
        mockDB.__setResult(
            [{
                admin_id: 2,
            }]
        );

        const req = authRequest({
            body: {
                userId: 1,
                houseId: 1,
            },
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(403);
        expect(res.json).toBeCalledWith({
            error: 'forbidden'
        });
    });
    
    test('should 500 internal server error on check', async () => {
        mockDB.__setResult(
            {
                error: 'PROTOCOL_TIMEDOUT_CONNECTION'
            }
        );

        const req = authRequest({
            body: {
                userId: 1,
                houseId: 1,
            }
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({
            error: 'internal server error',
            details: 'PROTOCOL_TIMEDOUT_CONNECTION'
        });
    });

    test('should 500 internal server error on delete', async () => {
        mockDB.__setResult(
            [{
                admin_id: 1
            }], {
                error: 'PROTOCOL_TIMEDOUT_CONNECTION'
            }
        );

        const req = authRequest({
            body: {
                userId: 1,
                houseId: 1,
            }
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({
            error: 'Internal server error',
            details: 'PROTOCOL_TIMEDOUT_CONNECTION'
        });
    });

    test('should 200 success', async () => {
        mockDB.__setResult(
            [{
                admin_id: 1
            }],
            []
        );

        const req = authRequest({
            body: {
                userId: 1,
                houseId: 1,
            }
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            deleted: {
                userId: 1,
                houseId: 1
            }
        })
    });

});