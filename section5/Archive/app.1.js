/*
    // app.listen() instead
    const http = require('http');
*/
const express = require('express');

const app = express();
const port = 3000;

// middleware function
// use method
// app.use((req, res, next) = {});
app.use((req, res, next) => {
    console.log('In the middleware!')
    next(); // allow request to move to next middleware function in line
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>'); // auto detects content type and sets header
});

app.listen(port)

/*
    // app.listen() instead
    const server = http.createServer(app);
    server.listen(port);
*/