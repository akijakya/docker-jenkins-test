const request = require('supertest');

const app = require('./greeter');

request(app)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200)
    .end(function(err, res) {
        if (err) throw err;
});

request(app)
    .get('/greetings')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
        if (err) throw err;
});

request(app)
    .post('/newgreeting')
    .expect(200)
    .end(function(err, res) {
        if (err) throw err;
});