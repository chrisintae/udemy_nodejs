const express = require('express');
const expressHBS = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.engine('hbs', expressHBS({ layoutsDir: 'views/layouts', defaultLayout: 'main-layout', extname: 'hbs'})); // app.engine('handlebars', expressHBS());
app.set('view engine', 'hbs'); // app.set('views engine', 'handlebars');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Not found' });
})

app.listen(port);