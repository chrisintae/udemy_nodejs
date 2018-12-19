const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

/*

    // part 2.1
    router.get('/', (req, res, next) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    })

    // part 2
    router.get('/', (req, res, next) => {
        res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    })


    // part 1
    router.get('/', (req, res, next) => {
        res.send('<h1>Hello from Express!</h1>');
    });
*/
module.exports = router;