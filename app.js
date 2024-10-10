const path = require('path');
const express = require('express');
const defaultRoutes = require('./routes/default');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('/public'));

app.use('/', defaultRoutes);

app.listen(3000);