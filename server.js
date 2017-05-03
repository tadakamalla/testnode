'use strict';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8085;
var app = express();
var path = require('path');
var fs = require("fs");



app.get('/', function (req, res) {
	 var empFile="/u01/app/employee.json";
	 fs.readFile(empFile, function (err,data){
	     response.contentType("application/json");
	     response.send(data);
	  });
	});

app.listen(PORT, function () {
    console.log('listening on port ' + PORT)

});
