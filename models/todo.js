const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    category: {
        type: Object,
        required: true
    },
}, {timestamps: true})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
