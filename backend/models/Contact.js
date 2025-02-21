// models/Contact.js (Contact Model)
const mongoose = require("mongoose"); // ✅ Mongoose Import

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Contact", ContactSchema);
