import express from "express";
import {
  postJob,
  getEmployerJobs,
  getAllJobs,
} from "../controllers/jobController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllJobs); // Public
router.post("/post", auth, postJob); // Employer
router.get("/employer", auth, getEmployerJobs);

export default router;
