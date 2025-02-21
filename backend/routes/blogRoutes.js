const express = require("express");
const router = express.Router();
const { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } = require("../controllers/blogController"); // ✅ Ensure proper import

// 🔹 Get All Blogs
router.get("/", getBlogs); // ✅ Make sure getBlogs is defined

// 🔹 Get a Single Blog by ID
router.get("/:id", getBlogById);

// 🔹 Create New Blog (Admin Only)
router.post("/", createBlog);

// 🔹 Update Blog (Admin Only)
router.put("/:id", updateBlog);

// 🔹 Delete Blog (Admin Only)
router.delete("/:id", deleteBlog);

module.exports = router;
