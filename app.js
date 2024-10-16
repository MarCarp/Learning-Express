const path = require('path');
const express = require('express');
const session = require('express-session');
const mongodbStore = require('connect-mongodb-session');

const db = require('./data/database');
const defaultRoutes = require('./routes/default');

const MongoDBStore = mongodbStore(session);

const sessionStore = new MongoDBStore({
    uri: 'mongodb://localhost:27017',
    databaseName: 'auth-demo',
    collection: 'session'
});

const csrf = require('csurf');

const app = express();


//MiddleWare
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'vtvj5e+1*u1e6!1be_ebL984',
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}));

//CSRF Token
app.use(csrf());

app.use('/', defaultRoutes);

db.connectDb().then(
    function() {
        app.listen(3000);
    }
);