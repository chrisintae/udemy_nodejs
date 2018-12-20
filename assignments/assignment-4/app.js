const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

const usersRoute = require('./routes/users')
const homeRoute = require('./routes/home');

app.use(usersRoute);
app.use(homeRoute.routes);

app.listen(port);