const express = require("express");
const router = express.Router();
const { 
    createProject, 
    getProjects, 
    getProjectById, 
    updateProject, 
    deleteProject 
} = require("../controllers/projectController");
const { protect, admin } = require("../middlewares/authMiddlewares");  // ✅ Corrected import

// 🔹 Get All Projects
router.get("/", getProjects);

// 🔹 Get a Single Project by ID
router.get("/:id", getProjectById);

// 🔹 Create New Project (Admin Only)
router.post("/", protect, admin, createProject);

// 🔹 Update Project (Admin Only)
router.put("/:id", protect, admin, updateProject);

// 🔹 Delete Project (Admin Only)
router.delete("/:id", protect, admin, deleteProject);

module.exports = router;
