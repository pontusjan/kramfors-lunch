var express = require('express');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.use('/assets/', express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/login', function(req, res){
    res.render('login');
});

app.post('/login', function(req, res){
    res.send('Logging in');
});

app.get('/user', function(req, res){
    res.render('user');
});


app.listen(port, function(){
    console.log('Express app started, listening on port ' + port);
});