var express = require('express');
var app = express();
var path = require('path');
var mongo = require('mongo');
var mongod = require('mongod');

var port = process.env.PORT;

app.listen(port, function(){
    console.log('Express server listening on port ' + port);
})

app.use(express.static(path.join(__dirname + "/client")));

app.get('/', function(req, res){
    res.sendFile(__dirname + "client" + "index.html");
})
