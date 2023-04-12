import express from "express";
import connectDB from "./db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

// Connect to MongoDB database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
