require("dotenv").config(); 
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Middleware
app.use(express.json());
app.use(
  cors());


// ✅ Contact Schema
const contactSchema = new mongoose.Schema({
  fullname: String,
  mail: String,
  subject: String,
  phone: String,
  interested: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Contact Form API (DB + Email Send)
app.post("/api/contact", async (req, res) => {
  console.log("Received Data:", req.body);

  const { fullname, mail, subject, phone, interested } = req.body;

  // ✅ Input Validation
  if (!fullname || !mail || !subject || !phone || !interested) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // ✅ Email Validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    // ✅ Save in Database
    const newContact = new Contact({ fullname, mail, subject, phone, interested });
    await newContact.save();

    // ✅ Send Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL, // Admin email
      subject: `New Contact Form Submission from ${fullname}`,
      text: `Full Name: ${fullname}\nEmail: ${mail}\nSubject: ${subject}\nPhone: ${phone}\nMessage: ${interested}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully " });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to send message. Try again later." });
  }
});

// ✅ Server Start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
