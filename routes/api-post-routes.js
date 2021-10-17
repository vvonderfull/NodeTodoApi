const express = require("express");
const {
  getPost,
  deletePost,
  editPost,
  getPosts,
  addPost,
} = require("../controllers/api-post-controller");

const router = express.Router();

//Get All posts
router.get("/api/posts", getPosts);
//Add New Post
router.post("/api/add-post", addPost);
//Get Post by ID
router.get("/api/post/:id", getPost);
// Update Post by ID
router.put("/api/edit/:id", editPost);
// Delete Post by ID
router.delete("/api/post/:id", deletePost);

module.exports = router;
