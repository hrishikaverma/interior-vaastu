require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const blogRoutes = require("./routes/blogRoutes");
const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// ✅ Middleware
app.use(express.json({ limit: "10mb" })); // Increased payload limit
app.use(cookieParser());

// ✅ CORS Configuration for Multiple Origins
const allowedOrigins = [process.env.CLIENT_URL || "http://localhost:3000"];
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);

// ✅ Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000, // Retry after 5 seconds if MongoDB is unavailable
        });
        console.log("✅ MongoDB Connected Successfully");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err.message);
        setTimeout(connectDB, 5000); // Retry connection after 5 seconds
    }
};

connectDB();

// ✅ Start Server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// ✅ Global Error Handling
app.use((err, req, res, next) => {
    console.error("🔥 Server Error:", err.message);
    res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
});

// ✅ Handle Unhandled Promise Rejections & Process Exit
process.on("unhandledRejection", (err) => {
    console.error("🚨 Unhandled Rejection:", err.message);
    server.close(() => process.exit(1));
});

process.on("SIGINT", async () => {
    console.log("🔴 Server shutting down...");
    await mongoose.connection.close();
    process.exit(0);
});
