const express = require("express");
const {
  getCategories,
  addCategory,
} = require("../controllers/api-category-controller");

const router = express.Router();

//Get All posts
router.get("/api/category/getAll", getCategories);
//Add New Post
router.post("/api/category/create", addCategory);

module.exports = router;
