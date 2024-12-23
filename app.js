const path = require('path');
const express = require('express');
const db = require('./data/database');
const defaultRoutes = require('./routes/default');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', defaultRoutes);

db.connectDb().then(
    function() {
        app.listen(3000);
    }
);