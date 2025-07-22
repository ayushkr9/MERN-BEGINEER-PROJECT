import express from "express";
import notes_routes from "./route/notes_routes.js";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

const port = 5005;
const app = express();

const startServer = async () => {
  try {
    await connectDB(); // ✅ Wait for DB connection
    app.use("/api/notes", notes_routes);

    app.listen(port, () => {
      console.log(`✅ Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error);
    process.exit(1); // 💥 Exit if DB connection fails
  }
};

startServer();
