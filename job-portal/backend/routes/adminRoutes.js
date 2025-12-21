import express from "express";
import auth from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";

import {
  getAllUsers,
  deleteUser,
  getAllJobs,
  deleteJob,
} from "../controllers/adminController.js";

const router = express.Router();

// USERS
router.get("/users", auth, admin, getAllUsers);
router.delete("/users/:id", auth, admin, deleteUser);

// JOBS
router.get("/jobs", auth, admin, getAllJobs);
router.delete("/jobs/:id", auth, admin, deleteJob);

export default router;
