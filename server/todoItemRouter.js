'use strict';

//        http://localhost:8080
// GET    /api/todoItems	        Get all the todoItems.
// POST   /api/todoItems	        Create a todoItem.
// GET    /api/todoItems/:todo_id	Get a single todoItem.
// PUT    /api/todoItems/:todo_id	Update a todo with new info.
// DELETE /api/todoItems/:todo_id	Delete a todo item.

var express = require('express');
var router = express.Router();
var TodoItem     = require('./model/todoItem');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
console.log('connected to db');

// middleware to use for all requests
router.use(function(req, res, next) {
    console.log('request coming in ...');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/todoItems')

     // get all the TodoItems (accessed at GET http://localhost:8080/api/todoItems)
    .get(function(req, res) {
        TodoItem.find(function(err, todoItems) {
            if (err)
                res.send(err);

            res.json(todoItems);
        });
    })

    // create a TodoItem (accessed at POST http://localhost:8080/api/todoItems)
    .post(function(req, res) {
        var todoItem = new TodoItem();      // create a new instance of the TodoItem model

        todoItem.id = req.body.id; 
        todoItem.name = req.body.name;
        todoItem.description = req.body.description;

        // save the bear and check for errors
        todoItem.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'TodoItem created!' });
        });        
    })

    //delete all
    .delete(function(req, res) {
        TodoItem.remove({}, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'deleted all' });
        });
    });

router.route('/todoItems/:todoId')

    // get the bear with that id (accessed at GET http://localhost:8080/api/todoItems/:todo_id)
    .get(function(req, res) {
        TodoItem.findById(req.params.todoId, function(err, todoItem) {
            if (err)
                res.send(err);
            res.json(todoItem);
        });
    })
    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {
        // use our bear model to find the bear we want
        TodoItem.findById(req.params.todoId, function(err, bear) {
            if (err)
                res.send(err);

            bear.name = req.body.name;  // update the bears info

            // save the bear
            bear.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
            });
        });
   })

   .delete(function(req, res) {
        TodoItem.remove({
            id: req.params.todoId
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router; 
