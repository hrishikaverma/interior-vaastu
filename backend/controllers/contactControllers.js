// controllers/contactController.js
const Contact = require("./models/Contact");


exports.sendMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: "Message sent successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};