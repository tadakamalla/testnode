'use strict';

var http = require('http');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8085;
var app = express();
var fs = require("fs");



app.get('/', function (req, res) {
	fs.readFile( __dirname + "/" + "employee.json", 'utf8', function (err, data) {
	       console.log( data );
	       res.send( data );
	   });

	})

app.listen(PORT, function () {
    console.log('listening on port ' + PORT)

});
