'use strict';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8085;
var app = express();
var path = require('path');



app.get('/u01/app/', function (req, res) {
	  res.send(employee.json);
	})

app.listen(PORT, function () {
    console.log('listening on port ' + PORT)

});
