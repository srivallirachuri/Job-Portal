import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import employerRoutes from "./routes/employerRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
db.connect();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));
// ✅ Serve uploaded resumes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/applications", applicationRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

app.use("/api/employer", employerRoutes);

app.use("/api/admin", adminRoutes);
app.post("/api/employer/applications/:id", (req, res) => {
  const applicationId = req.params.id;
  const data = req.body;
  // Handle application POST logic here
  res.json({ success: true, applicationId, data });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
