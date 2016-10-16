var express = require('express');
var app = express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('homepage');
});

app.get('/*', function(req, res){
  // return home
});


var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
