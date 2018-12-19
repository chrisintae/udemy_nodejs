const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">submit</button><form></html>')
        return res.end();
    }

    if (url === '/users') {
        res.write('<html><h2>Users</h2></html>');
        return res.end();
    }

    if (url === '/create-user') {
        const reqBody = [];
        req.on('data', chunk => {
            reqBody.push(chunk);
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(reqBody).toString();
            console.log(parsedBody.split('=')[1]);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end();
    }
});

server.listen(port);