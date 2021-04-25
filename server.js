var express = require('express')
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
})

app.listen(port, function() {
	console.log('app running')
})

app.use(function(req, res, next) {
	res.status(404).render("public/assets/js/404.html");
});