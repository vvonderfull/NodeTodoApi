const express = require("express");
const {
  getCategories,
  addCategory,
} = require("../controllers/api-category-controller");

const router = express.Router();

router.get("/api/category/getAll", getCategories);
router.post("/api/category/create", addCategory);

module.exports = router;
