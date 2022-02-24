const mongoose = require('mongoose');
const toDoSchema = new mongoose.Schema({
    email: String,
    data: {
        all: Array,
        completed: Array,
    }
}, { 
    timestamps: true,
    collection: 'todos'
 } );

 module.exports = mongoose.model('Todo', toDoSchema);