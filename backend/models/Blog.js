const mongoose = require("mongoose"); // 👈 Add this line

// models/Blog.js (Blog Model)
const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Blog", BlogSchema);