import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import adminRoutes from "./routes/adminRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import facultyRoutes from "./routes/facultyRoutes.js";
import { addDummyAdmin } from "./controller/adminController.js";

async function startServer() {
  try {
    const app = express();
    dotenv.config();
    app.use(bodyParser.json({ limit: "30mb", extended: true }));
    app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
    app.use(cors());

    app.use("/api/admin", adminRoutes);
    app.use("/api/faculty", facultyRoutes);
    app.use("/api/student", studentRoutes);

    const PORT = process.env.PORT || 5001;
    app.get("/", (req, res) => {
      res.send("Hello to college erp API");
    });

    await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(process.env.CONNECTION_URL);
    await addDummyAdmin();

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Error:", error);
  }
}

startServer();