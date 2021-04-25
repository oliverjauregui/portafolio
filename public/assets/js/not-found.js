var express = require('express')
var app = express();

app.use(function(req, res, next) {
	res.status(404).render('not-found.html');
});