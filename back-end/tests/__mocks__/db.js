'use strict';

class mockDB {
    constructor () {
        this.__result = []
        this.__idx = 0;
        this.__query = jest.fn().mockImplementation(query => {
            return Promise.resolve(this.__result[this.__idx++] || [])
        });
        this.__commit = jest.fn().mockImplementation(_ => Promise.resolve());
        this.__rollback = jest.fn().mockImplementation(_ => Promise.resolve());
        this.query = jest.fn().mockImplementation(async query => {
            let r = await this.__query(query);
            await this.end();
            return r;
        }); 
        this.transaction = jest.fn().mockImplementation(_ => ({
            query: this.__query,
            commit: this.__commit,
            rollback: this.__rollback,
        }));
        this.end = jest.fn().mockImplementation(_ => Promise.resolve());
    }
    __setResult(...result) {
        this.__result = result || [];
        this.__idx = 0;
        this.__query.mockClear();
        this.__commit.mockClear();
        this.__rollback.mockClear();
        this.query.mockClear();
        this.transaction.mockClear();
        this.end.mockClear();
    }
};

module.exports = mockDB;
