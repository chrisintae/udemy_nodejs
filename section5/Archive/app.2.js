const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>')
})

app.post('/product', (req, res, next) => { // only fires for incoming POST requests
    console.log(req.body); // need to parse
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(port)