var express = require('express');    
var app = express();
var http = require('http').Server(app);    
var path = require('path');       
var bodyParser = require('body-parser');
var todoItemRouter = require('./app/server/todoItemRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

app.use(express.static(path.join(__dirname, 'app/client')));

app.use('/api', todoItemRouter);

http.listen(port, function () {
    console.log('listening on port ' + port);
});