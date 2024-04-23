const request = require('supertest');
const { app } = require('../../src/app');

describe('Integration Tests', () => {
    describe('GET /', () => {
        it('responds with status 200', (done) => {
            request(app())
                .get('/')
                .expect(200, done);
        });

        it('responds with "Hello, World!"', (done) => {
            request(app())
                .get('/')
                .expect('Hello, World!', done);
        });
    });
});
