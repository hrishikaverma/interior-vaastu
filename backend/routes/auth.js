const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Ensure the correct path
require("dotenv").config(); // Load environment variables

const router = express.Router();

router.post(
  "/register",
  [
    body("fullname").notEmpty().withMessage("Full name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone")
      .isLength({ min: 10, max: 10 })
      .isNumeric()
      .withMessage("Valid phone number is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ],
  async (req, res) => {
    // Validate Request Data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, phone, password } = req.body;

    try {
      // Check if the user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash Password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create and Save User
      user = new User({ fullname, email, phone, password: hashedPassword });
      await user.save();

      // Generate JWT Token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

      res.status(201).json({ message: "User registered successfully", token });
    } catch (error) {
      console.error("Error in Register Route:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

module.exports = router;
