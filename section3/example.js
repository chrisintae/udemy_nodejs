const http = require('http');
const fs = require('fs');
 
const Server= http.createServer((req, res) => {
 
    const url = req.url;
    const method = req.method;
 
    if(url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('');
        res.write('Sign in Today!')
        res.write(`Send`);
        res.write('');
        return res.end();
 
    }
    if(url === '/users') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('');
        res.write(`KarlDieter`);
        res.write('/');
        return res.end();
        
    }
    if(url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
            console.log(chunk)
        });
        req.on('end', () => {
            const requeststring = Buffer.concat(body).toString();
            const message = requeststring.split('=')[1];
            fs.writeFile('formular.txt', message, err => {
                console.log(message)
                res.writeHead(302, {'Location': '/users'});
                return res.end();
            });
        });
    }
});
 
Server.listen(3000)