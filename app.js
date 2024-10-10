const express = require('express');
const defaultRoutes = require('./routes/default');

const app = express();

app.use('/', defaultRoutes);

app.listen(3000);