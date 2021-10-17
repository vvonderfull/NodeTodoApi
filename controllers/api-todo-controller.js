const Todo = require("../models/todo");
const { handleErrorApi } = require("../helpers/handleError");

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
  const { title, author, text } = req.body;
  const { id } = req.params;
  Todo.findByIdAndUpdate(id, { title, author, text }, { new: true })
    .then((Todo) => {
      res.status(200).json(Todo);
    })
    .catch((err) => {
      handleErrorApi(res, err);
    });
};
const getTodos = (req, res) => {
  Todo.find()
    .sort({ createdAt: -1 })
    .then((Todos) => {
      res.status(200).json(Todos);
    })
    .catch((err) => {
      handleErrorApi(res, err);
    });
};
const addTodo = (req, res) => {
  const { title, author, text } = req.body;
  const Todo = new Todo({ title, author, text });
  Todo
    .save()
    .then((Todo) => {
      res.status(200).json(Todo);
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
