const express = require('express');

const router = express.Router();

router.get('/', function(req,res) {
    res.render('default', {content: 'template ok'});
});

router.get('/signup', function(req,res) {
    res.send('<h1>Page Signup</h1>');
});

router.get('/login', function(req,res) {
    res.send('<h1>Router ok</h1>');
});

module.exports = router;