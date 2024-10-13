const express = require('express');

const router = express.Router();

router.get('/', function(req,res) {
    res.render('welcome');
});

router.get('/admin', function(req,res) {
    const inputData = {
        message: ''
    }

    const posts = [''];

    res.render('admin', {posts: posts, inputData: inputData, csrfToken: ''});
});

router.get('/signup', function(req,res) {
    const inputData = {
        message: '',
    };
    res.render('signup', {inputData: inputData, csrfToken: ''});
});

router.get('/login', function(req,res) {
    const inputData = {
        message: ''
    }
    res.render('login', {inputData: inputData, csrfToken: ''});
});

router.post('/logout', function(req,res) {
    res.redirect('/');
});

module.exports = router;