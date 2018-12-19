const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Input Username</title></head>')
        res.write('<body><h2>Hello, please create a username</h2><form action="/create-user" method="POST"><input type="text" name="Username"><button type="submit">Submit</button></body>')
        res.write('</html>')
        return res.end();
    }

    if (url === '/users') {
        res.write('<html>')
        res.write('<head><title>Usernames</title></head>')
        res.write('<body><h2>Usernames</h2><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>')
        res.write('</html>')
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const reqBody = [];
        req.on('data', (chunk) => {
            reqBody.push(chunk);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(reqBody).toString();
            console.log(parsedBody);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
})

server.listen(port);