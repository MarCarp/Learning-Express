const express = require('express');

const app = express();

app.get('/', function(req,res){
 res.send('<h1>Hello Warudo');
})

app.listen(3000);