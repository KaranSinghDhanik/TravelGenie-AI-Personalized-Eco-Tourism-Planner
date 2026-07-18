import "dotenv/config";
import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";

import connectDB from "./config/db.js";
import tripRoutes from "./routes/tripRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import { configurePassport } from "./config/passport.js";

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());

// Express Session Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || "travelgenie_default_session_secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport Strategies
configurePassport();

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "TravelGenie AI Backend Running",
  });
});

// Trip Management Routes
app.use("/api/trips", tripRoutes);

// Authentication Routes
app.use("/api/auth", authRoutes);

// AI Routes
app.use("/api/ai", aiRoutes);

// Start Server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error.message);
    process.exit(1);
  }
};

startServer();