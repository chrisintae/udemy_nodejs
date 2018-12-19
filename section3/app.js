// section 3, lecture 37
// creating Node server

const http = require('http');
const routes = require('./routes');
const port = 3000;

console.log(routes.someText)

const server = http.createServer(routes.handler)

/*
    // single export
    const server = http.createServer(routes);
*/

server.listen(port);