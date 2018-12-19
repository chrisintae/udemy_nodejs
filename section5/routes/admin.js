const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

/* 
    // implicitly add /admin
    // /admin/add-product => GET
    router.get('/add-product', (req, res, next) => {
        res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>')
    })
*/

// /admin/product => POST
router.post('/add-product', (req, res, next) => { // only fires for incoming POST requests
    console.log(req.body); // need to parse
    res.redirect('/');
});

module.exports = router;