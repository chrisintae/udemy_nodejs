const express = require('express');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res,) => {
    const products = adminData.products;
    res.render('shop', {
        pageTitle: 'shop',
        path: '/',
        prods: products,
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
        // layout: false // to NOT use default layout
        });
    })

module.exports = router;