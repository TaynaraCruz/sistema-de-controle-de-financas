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

const handler = require('../../../api/livein/[id]');

describe('/livein/[id])', () => {


    test('should 403 forbidden', async () => {
        mockDB.__setResult(
            [{
                admin_id: 1
            }],
            []
        );

        const req = authRequest({
            query: {
                residents: 1,
            }
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(403);
        expect(res.json).toBeCalledWith({
            error: 'forbidden'
        })
    });

    test('should 200 success', async () => {
        mockDB.__setResult(
            [{ count: 1 }],
            [{ id: 1, name: 'fulano', income: 500, email: "fulano@bol.com" }],
            
        )

        const req = authRequest({
            query: {
                id: 1,
            },
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            residents: [{ id: 1, name: 'fulano', income: 500, email: "fulano@bol.com" }]
        });
    });

    test('should 500 internal server error', async () => {
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

        await handler(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({ error: 'internal server error', details: 'PROTOCOL_TIMEDOUT_CONNECTION' });
    });

    test('should 500 internal server error', async () => {
        const date = new Date();
        mockDB.__setResult(
            { error: 'PROTOCOL_TIMEDOUT_CONNECTION' },
            [{ id: 1, name: 'fulano', income: 500, email: "fulano@bol.com" }],
        )

        const req = authRequest({
            query: {
                id: 1,
            },
        });

        const res = response();

        await handler(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({ error: 'internal server error', details: 'PROTOCOL_TIMEDOUT_CONNECTION' });
    });

});