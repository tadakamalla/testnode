'use strict';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8085;
var app = express();
var fs = require("fs");



app.get('/', function (req, res) {
	  res.send('Hello DevCS')
	})

app.listen(PORT, function () {
    console.log('listening on port ' + PORT)

});
