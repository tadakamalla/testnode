'use strict';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8085;
var app = express();
var fs = require("fs");
var jsonData = '';


app.get('/', function (req, res) {
	fs.readFile('./employee.json', 'utf8', function (err, data) {
		  if(err) throw err;
		  jsonData = JSON.parse(data);
		  res.send(jsonData);
		});

	})

app.listen(PORT, function () {
    console.log('listening on port ' + PORT)

});
