//var http = require('http');
//var path = require('path');
var express = require("express");
var ejs = require('ejs');
var fetch = require('node-fetch'); 
//var bodyParser = require("body-parser");
//const app = express();
var app = express();
//const port = process.env.PORT || 3000;
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ encoded: true}));


var img = '';
var title = '';

app.get('/', function(req, res){
    fetchComic();
    res.render('index',{img:img, title:title});
});



function fetchComic(){
    fetch ('https://xkcd.com/614/info.0.json'
        .then(res => res.json())
        .then(thing =>{
            img = thing.img;
            title= thing.title;

        }).catch(err =>{
            res.redirect('/error');
        })
    )
}

http.createServer(app).listen(port, function(){

});