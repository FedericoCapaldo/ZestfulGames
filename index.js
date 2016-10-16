var express = require('express');
var app = express();
var partials = require('express-partials');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(partials());

app.get('/', function (req, res) {
  res.render('homepage');
});

app.get('/*', function(req, res){
  res.render('homepage');
});


var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
