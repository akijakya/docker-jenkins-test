'use strict';

// requiring path
const path = require('path');

// requiring express
const express = require('express');
const app = express();
const PORT = 3000;

// // connection with the database
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: 'db',
//     port: '3306',
//     user: 'mysql',
//     password: 'password', 
//     database: 'dockertest',
// });

// connection.connect(function(err) {
//     if (err) {
//       console.log('Error connecting to database');
//       return;
//     }
//     console.log('Connection to database established');
// });

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

app.get('/', function (req, res) {
    res.status(200);
    res.sendFile(path.join(__dirname, 'index.html'));
});

let result = [
    {greeting: "hello"},
    {greeting: "bye"},
    {greeting: "hola"},
    {greeting: "szervusz"}
];

app.get('/greetings', function(req, res) {
    // connection.query('SELECT * FROM greetings;', function(err, result) {
    //     if (err) {
    //         res.status(500).send('Database error');
    //         return;
    //     }
        res.status(200);
        res.setHeader("Content-type", "application/json");
        res.send(result);
    // });
});

app.post('/newgreeting', function(req, res) {
    // connection.query(`INSERT INTO greetings (greeting) VALUES (?);`, [req.body.greeting], function(err, result) {
    //     if (err) {
    //         res.status(500).send('Database error');
    //         return;
    //     }
        result.push({greeting: `${req.body.greeting}`});
        res.status(200);
        // res.sendFile(path.join(__dirname, 'index.html'));
    // });
});

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});

module.exports = app;