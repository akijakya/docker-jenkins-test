const request = require('supertest');
const test = require('tape');
const app = require('./greeter');

// test('Groot endpoint', (t) => {
// 	request(app)
//     .get('/groot')
// 		.query( { message: 'somemessage' } )
//     .expect('Content-Type', /json/)
//     .expect(200)
//     .end(function (err, res) {
// 			let expectedResponse = { received: 'somemessage', translated: 'I am Groot!'  }
//       t.error(err, 'No error');
//       t.same(res.body, expectedResponse, 'Correct response from Groot');
//     });
// 	request(app)
//     .get('/groot')
// 		.query( {} )
//     .expect('Content-Type', /json/)
//     .expect(400)
//     .end(function (err, res) {
// 			let expectedResponse = { error: 'No message to translate' }
//       t.error(err, 'No error');
//       t.same(res.body, expectedResponse, 'Correct error message');
//       t.end();
//     });
// });

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
                {greeting: "szervusz"}
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