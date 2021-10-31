const express = require("express");
const {
  getTodo,
  deleteTodo,
  editTodo,
  getTodos,
  addTodo,
} = require("../controllers/api-todo-controller");

const router = express.Router();

//Get All posts
router.get("/api/todo/getAll", getTodos);
//Get Post by ID
router.get("/api/todo/getById/:id", getTodo);
//Add New Post
router.post("/api/todo/create", addTodo);
// Update Post by ID
router.put("/api/todo/update/:id", editTodo);
// Delete Post by ID
router.delete("/api/todo/delete/:id", deleteTodo);

module.exports = router;
