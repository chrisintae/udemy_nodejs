const express = require('express');
const router = express.Router();

const usernameData = require('./home');

router.get('/users', (req, res) => {
    const users = usernameData.users;
    console.log(users);

    res.render('users', {
        pageTitle: 'Users Page',
        path: '/users',
        usersList: users
    })
})

module.exports = router;