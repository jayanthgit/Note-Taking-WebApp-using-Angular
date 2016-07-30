var express = require('express');    
var app = express();
var http = require('http').Server(app);    
var path = require('path');       
var bodyParser = require('body-parser');
var todoItemRouter = require('./app/server/todoItemRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);

app.use(express.static(path.join(__dirname, 'app/client')));

app.use('/api', todoItemRouter);

var port = process.env.PORT || 8080;        // set our port
http.listen(port, function () {
    console.log('listening on port ' + port);
});