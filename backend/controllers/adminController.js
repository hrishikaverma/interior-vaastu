const Project = require("../models/Project");
const Blog = require("../models/Blog");

// Create a new project (Admin only)
const createProject = async (req, res) => {
    try {
        const { title, description, image, category } = req.body;
        if (!title || !description || !image || !category) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }
        const newProject = new Project({ title, description, image, category });
        await newProject.save();
        res.status(201).json({ success: true, message: "Project created successfully", project: newProject });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};

// Create a new blog post (Admin only)
const createBlog = async (req, res) => {
    try {
        const { title, content, image } = req.body;
        if (!title || !content || !image) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }
        const newBlog = new Blog({ title, content, image });
        await newBlog.save();
        res.status(201).json({ success: true, message: "Blog post created successfully", blog: newBlog });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};

// Get all projects
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json({ success: true, projects });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};

// Get all blogs
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json({ success: true, blogs });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};

module.exports = { createProject, createBlog, getProjects, getBlogs };
