var express = require('express');
var app = express();
var port = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.use('/assets/', express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index', {theUrl: req.url});
});


app.listen(port, function(){
    console.log('Express app started, listening on port ' + port);
});