const express = require('express');
const app = express();
const port = 3000;

app.use('/users', (req, res) => {
    console.log('This is the users page.');
    res.send('<h1>Users</h1>')
});

app.use('/', (req, res) => {
    console.log('This is the home page.');
    res.send('<h1>Home</h1>')
});

app.listen(port);