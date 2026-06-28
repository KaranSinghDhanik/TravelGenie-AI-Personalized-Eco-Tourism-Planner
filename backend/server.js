import "dotenv/config";
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import tripRoutes from "./routes/tripRoutes.js";

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "TravelGenie AI Backend Running",
  });
});

// Trip Management Routes
app.use("/api/trips", tripRoutes);

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