var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());

consign().
	include('app/models').
	then('app/api').
	then('app/routes').
	into(app);

module.exports = app;