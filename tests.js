const request = require('supertest');
const test = require('tape');
const app = require('./routes');

test('/ endpoint', (t) => {
    request(app)
        .get('/')
        .expect('Content-Type', /html/)
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
            t.error(err, 'No error');
            t.end();
    });
});

test('/greetings endpoint', (t) => {
    request(app)
        .get('/greetings')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
            let expectedResponse = [
                {greeting: "hello"},
                {greeting: "bye"},
                {greeting: "hola"},
                {greeting: "szervusz"},
                {greeting: "grüezi"}
            ];
            t.error(err, 'No error');
            t.same(res.body, expectedResponse, 'Correct response');
            t.end();
    });
});

test('/newgreeting endpoint', (t) => {
    request(app)
        .post('/newgreeting')
        .send ({greeting: "hello"})
        .expect(200)
        .end(function(err, res) {
            let expectedResponse = ({greeting: 'hello'});
            t.error(err, 'No error');
            t.same(res.body, expectedResponse, 'Correct response');
            t.end();
    });
});