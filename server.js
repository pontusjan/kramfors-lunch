var express = require('express');
var moment = require('moment');
var app = express();
var port = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.use('/assets/', express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index', {theUrl: req.url});
});

app.use('/:id', function(req, res){
    var timeInUnix = new Date(Number(req.params.id)).getTime() || new Date(req.params.id).getTime();
    var timeInLang = moment(timeInUnix).format('MMMM D, YYYY');
    if (timeInUnix){
        res.json({
            unix: timeInUnix,
            natural: timeInLang
        })
    } else {
        res.json({
            unix: null,
            natural: null
        });
    }
})

app.listen(port, function(){
    console.log('Express app started, listeing on port ' + port);
});