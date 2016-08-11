var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TodoItemSchema   = new Schema({
    id: Number,
    name: String,
    description: String
});

module.exports = mongoose.model('TodoItem', TodoItemSchema);
