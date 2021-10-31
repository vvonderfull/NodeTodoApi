const Todo = require("../models/todo");
const {handleErrorApi} = require("../helpers/handleError");

const getTodo = (req, res) => {
    Todo.findById(req.params.id)
        .then((Todo) => {
            res.status(200).json(Todo);
        })
        .catch((err) => {
            handleErrorApi(res, err);
        });
};
const deleteTodo = (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).json(req.params.id);
        })
        .catch((err) => {
            handleErrorApi(res, err);
        });
};
const editTodo = (req, res) => {
    const {
        name,
        description,
        completed,
        category
    } = req.body;
    const {id} = req.params;
    Todo.findByIdAndUpdate(id, {
        name,
        description,
        completed,
        category
    }, {new: true})
        .then((todo) => {
            res.status(200).json(todo);
        })
        .catch((err) => {
            handleErrorApi(res, err);
        });
};
const getTodos = (req, res) => {
    let arrayFilters = []
    for (let [key, value] of Object.entries(req.query)) {
        if (value) {
            arrayFilters.push({
                [key]: new RegExp(`${value}`,"gi")
            })
        }
    }
    Todo.find(arrayFilters.length ? {$or: arrayFilters} : undefined)
        .then((items) => {
            console.log(items)
            res.status(200).json(items);
        })
        .catch((err) => {
            handleErrorApi(res, err);
        });
};
const addTodo = (req, res) => {
    const {
        name,
        description,
        completed,
        category
    } = req.body;
    const TodoModel = new Todo({
        name,
        description,
        completed,
        category
    });
    TodoModel
        .save()
        .then((item) => {
            res.status(200).json(item);
        })
        .catch((err) => {
            handleErrorApi(res, err);
        });
};

module.exports = {
    getTodo,
    deleteTodo,
    editTodo,
    getTodos,
    addTodo,
};
