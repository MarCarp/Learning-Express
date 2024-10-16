const csrf = require('csurf');
const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../data/database');

const router = express.Router();

router.get('/', function(req,res) {
    res.render('welcome');
});

router.get('/admin', function(req,res) {
    const inputData = {
        message: ''
    }

    const posts = [''];

    const csrfToken = req.csrfToken();

    res.render('admin', {posts: posts, inputData: inputData, csrfToken: csrfToken});
});

router.get('/signup', function(req,res) {
    const inputData = {
        message: '',
    };

    const csrfToken = req.csrfToken();

    res.render('signup', {inputData: inputData, csrfToken: csrfToken});
});

router.post('/signup', async function(req,res){
    const data = req.body;

    const inputMail = data.email;
    const mailConfirm = data['confirm-email'];
    const inputPass = data.password;

    if(inputMail !== mailConfirm) {
        console.log('mail not match');
        return res.redirect('/signup');
    }

    const existingUser = await db.getDb().collection('users').findOne({email: data.mail});

    if(existingUser) {
        console.log('Mail exist');
        return res.redirect('/signup');
    }

    const hashedPass = await bcrypt.hash(data.password, 12);

    const user = {
        email: inputMail,
        password: hashedPass
    }

    const response = await db.getDb().collection('users').insertOne(user);

    res.redirect('/login');
});

router.get('/login', function(req,res) {
    const inputData = {
        message: ''
    }

    const csrfToken = req.csrfToken();

    res.render('login', {inputData: inputData, csrfToken: csrfToken});
});

router.post('/logout', function(req,res) {
    res.redirect('/');
});

module.exports = router;