const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></body>')
        res.write('</html>')
        return res.end(); // to return from the anonymous function
    }

    if (url === '/message' && method === 'POST') {
        const reqBody = []; // this is the request body; empty array
        req.on('data', (chunk) => { // register event listener; fired when new 'chunk' is ready to be read
            console.log(chunk);  // shows how often JS runs until it's done, and what's inside
            reqBody.push(chunk); // adding element to (empty) array
        });
        req.on('end', () => { // fires when done parsing incoming request data or request
            const parsedBody = Buffer.concat(reqBody).toString();
            console.log(parsedBody); // key:value pairs; key is message, value is input
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message); // executes after res.setHeader and rest of code
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    /* fs.writeFileSync('message.txt', message); // moved into 'end', so it executes in within 'end' function*/
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My Node.js Page</title></head>')
    res.write('<body><h1>Hello from my Node.js server!</h1></body>')
    res.write('</html>')
    res.end();
}

module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
}

/*
    // individual
    module.exports = requestHandler;

    // other multiple
    module.exports.request = requestHandler;
    module.exports.someText = 'Some hard coded text';

    *****
    // Node.js supports shortcut
    exports.request = requestHandler;
    exports.someText = 'Some hard coded text';

*/