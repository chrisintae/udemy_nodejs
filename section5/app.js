const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes); // add common beginning route
app.use(shopRoutes); // adminRoutes before shopRoutes('/')

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(port)