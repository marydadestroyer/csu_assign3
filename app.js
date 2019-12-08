var http = require('http');
var request = require('request');
//var path = require('path');
var express = require("express");
var ejs = require('ejs');
var fetch = require('node-fetch'); 
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ encoded: true}));
app.use(express.static(_dirmane +'/public'));

var img = '';
var title = '';
var date = '';
 //for homepage


app.get('/', function(req, res){
    getComic();
    res.render(' index', {img: img, title: title, date: date});


});


/*funtion funComic (){
    fetch('https://xkcd.com/info.0.json')
    .then(res => res.json())
    .then(data => {
        date = data.date;
        title = data.title;
        url = data.url;

    }).catch(err =>{
	res.redirect('/error');
    });
}*/







app.listen(port, function () {

});