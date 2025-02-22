const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

// Contact form route
app.post("/api/contact", async (req, res) => {
  const { fullname, mail, subject, phone, interested } = req.body;

  if (!fullname || !mail || !subject || !phone || !interested) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL, // Your email to receive inquiries
    subject: `New Contact Form Submission from ${fullname}`,
    text: `Name: ${fullname}\nEmail: ${mail}\nSubject: ${subject}\nPhone: ${phone}\nMessage: ${interested}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message. Try again later." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
