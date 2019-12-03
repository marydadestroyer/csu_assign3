var http = require('http');
var https = require('https');
var request = require('request');
var path = require('path');

var express = require("express");
var ejs = require('ejs');
var fetch = require('node-fetch'); 

var bodyParser = require("body-parser");
//const app = express();
var app = express();
//const port = process.env.PORT || 3000;
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
//app.use(express.static("public"));
//app.use(bodyParser.urlencoded({ encoded: true}));
app.use(express.static(_dirmane +'/public'));

var img = '';
var title = '';






http.createServer(app).listen(port, function(){

});