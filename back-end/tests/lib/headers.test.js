const headersMiddleware = require('../../lib/headers');

const { response } = require('../helper');

describe('CORS', () => {
    test('[OPTIONS] deve inserir headers de cors na requisição e finalizar', async () => {
        const handler = jest.fn();
        const req = {
            method: 'OPTIONS',
        }
        const res = response();
        
        headersMiddleware(handler)(req, res);

        expect(res.setHeader).toBeCalledWith('Access-Control-Allow-Origin', '*');
        expect(res.setHeader).toBeCalledWith('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
        expect(res.setHeader).toBeCalledWith('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        expect(handler.mock.calls.length).toBe(0);
        expect(res.end).toBeCalled();
    })

    test('[GET] deve inserir headers de cors na requisição e chamar handler', async () => {
        const handler = jest.fn();
        const req = {
            method: 'GET',
        }
        const res = response();
        
        headersMiddleware(handler)(req, res);

        expect(res.setHeader).toBeCalledWith('Access-Control-Allow-Origin', '*');
        expect(res.setHeader).toBeCalledWith('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
        expect(res.setHeader).toBeCalledWith('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        expect(res.end.mock.calls.length).toBe(0);
        expect(handler).toBeCalled();
    })
})
