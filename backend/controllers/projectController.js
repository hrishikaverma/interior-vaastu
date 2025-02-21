const Project = require("../models/Project");

// ✅ Get All Projects
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

// ✅ Get a Single Project
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

// ✅ Create a New Project (Admin Only)
exports.createProject = async (req, res) => {
    try {
        const { title, description, image, category } = req.body;
        const newProject = new Project({ title, description, image, category });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

// ✅ Update Project (Admin Only)
exports.updateProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        Object.assign(project, req.body);
        await project.save();
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

// ✅ Delete Project (Admin Only)
exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        await project.deleteOne();
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};
