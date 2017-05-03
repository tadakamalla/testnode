'use strict';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8085;
var app = express();



app.get('/', function (req, res) {
	  res.send('Purple Belt Demo!')
	})

app.listen(PORT, function () {
    console.log('listening on port ' + PORT)

});
