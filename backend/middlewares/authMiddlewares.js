const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

// 🔹 Protect Middleware (Authenticate Any User)
const protect = async (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Access Denied. No Token Provided." });
        }

        const token = authHeader.split(" ")[1]; // Extract token
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        if (!verified) {
            return res.status(401).json({ success: false, message: "Invalid Token." });
        }

        const user = await User.findById(verified.id).select("-password"); // Exclude password
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(500).json({ success: false, message: "Server Error: Unauthorized Access.", error: err.message });
    }
};

// 🔹 Admin Middleware (Authorize Only Admin)
const admin = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        return res.status(403).json({ success: false, message: "Forbidden: Admins only." });
    }
};

module.exports = { protect, admin };
