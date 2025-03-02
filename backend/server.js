require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Debugging Log
console.log("✅ Server is starting...");

// ✅ Check if ENV variables are loaded
if (!process.env.MONGODB_URI || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❌ Missing required environment variables. Check your .env file!");
  process.exit(1);
}

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // Server ko exit karne ke liye agar DB connect na ho
  });

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Import Authentication Routes
try {
  const authRoutes = require("./routes/auth");
  app.use("/api/auth", authRoutes);
  console.log("✅ Auth Routes Loaded at /api/auth");
} catch (error) {
  console.error("❌ Error loading auth routes:", error.message);
}

// ✅ Contact Schema
const contactSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  mail: { type: String, required: true },
  subject: { type: String, required: true },
  phone: { type: String, required: true },
  interested: { type: String, required: true },
});

const Contact = mongoose.model("Contact", contactSchema);

// ✅ Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Contact Form API (DB + Email Send)
app.post("/api/contact", async (req, res) => {
  console.log("📩 Received Contact Data:", req.body);

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
    console.log("✅ Contact Saved in Database");

    // ✅ Send Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || "youradmin@example.com", // Default Admin Email
      subject: `New Contact Form Submission from ${fullname}`,
      text: `Full Name: ${fullname}\nEmail: ${mail}\nSubject: ${subject}\nPhone: ${phone}\nMessage: ${interested}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email Sent Successfully");

    res.status(200).json({ message: "Message sent successfully" });

  } catch (error) {
    console.error("❌ Error in Contact API:", error.message);
    res.status(500).json({ message: "Failed to send message. Try again later." });
  }
});

// ✅ Test Route (For Debugging)
app.get("/api/test", (req, res) => {
  res.json({ message: "✅ API is working fine!" });
});

// ✅ 404 Route Handler
app.use((req, res) => {
  res.status(404).json({ message: "❌ Route not found" });
});

// ✅ Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
