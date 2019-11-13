const jwt = require('jsonwebtoken');

const constantes = require('../../lib/constants');
constantes.JWT_SECRET = '1';

const { response, authRequest } = require('../helper');

const auth = require('../../lib/auth');

describe('autenticação', () => {
    test('deve produzir hash sha-256', () => {
        expect(auth.sha256('123456')).toBe('8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92');
    });
    test('deve assinar um token com expiração para três horas no futuro', () => {
        const token = auth.signToken({ pay: 'load'});
        const future = parseInt(Date.now()/1000) + 3*60*60;
        let payload = jwt.verify(token, constantes.JWT_SECRET)
        expect(payload.exp).toBe(future);
    });
    test('deve verificar um token', () => {
        const token = auth.verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAZW1haWwiLCJpYXQiOjE1NzMxMzIwNjksImV4cCI6NTM2MDA0NDA2OX0.5LutJfge3wwvJjhh5nVBj_rslvOHSDSDt7RjRzzTagU');
        expect(token).toBeTruthy();
    });
});

describe('middleware autenticação', () => {
    test('[POST] deve setar user no req e chamar handler com usuário autenticado', () => {
        const handler = jest.fn();
        const req = authRequest();
        const res = response();
        
        auth.ifAuth(handler)(req, res);

        expect(req.user).toStrictEqual({ id: 1, name: 'user', email: 'user@email', 'exp': 5360044069, 'iat': 1573132069 })

        expect(res.end.mock.calls.length).toBe(0);
        expect(handler).toBeCalled();
    });

    test('[GET] deve setar user no req e chamar handler com usuário autenticado', () => {
        const handler = jest.fn();
        const req = {
            method: 'GET',
            query: {
                bearer: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAZW1haWwiLCJpYXQiOjE1NzMxMzIwNjksImV4cCI6NTM2MDA0NDA2OX0.5LutJfge3wwvJjhh5nVBj_rslvOHSDSDt7RjRzzTagU',
            },
        };
        const res = response();
        
        auth.ifAuth(handler)(req, res);

        expect(req.user).toStrictEqual({ id: 1, name: 'user', email: 'user@email', 'exp': 5360044069, 'iat': 1573132069 })

        expect(res.end.mock.calls.length).toBe(0);
        expect(handler).toBeCalled();
    });

    test('401 - token não fornecido - usuário não autenticado, deve finalizar requisição com unauthorized', () => {
        const handler = jest.fn();
        const req = {};
        const res = response();
        
        auth.ifAuth(handler)(req, res);

        expect(res.status).toBeCalledWith(401)
        expect(res.json).toBeCalledWith({ error: 'unauthorized' })

        expect(handler.mock.calls.length).toBe(0);
    });

    test('401 - token inválido - usuário não autenticado, deve finalizar requisição com unauthorized', () => {
        const handler = jest.fn();
        const req = {
            method: 'GET',
            query: {
                bearer: 'token_invalido',
            },
        };
        const res = response();
        
        auth.ifAuth(handler)(req, res);

        expect(res.status).toBeCalledWith(401)
        expect(res.json).toBeCalledWith({ error: 'unauthorized' })

        expect(handler.mock.calls.length).toBe(0);
    });
});
