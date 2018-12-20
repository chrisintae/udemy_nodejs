const express = require('express');
const router = express.Router();

const users = [];

router.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'Home Page',
        path: '/'
    })
})

router.post('/', (req, res) => {
    users.push({ user: req.body.username });
    res.redirect('/users');
})

exports.routes = router;
exports.users  = users;