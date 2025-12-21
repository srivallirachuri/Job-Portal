import express from "express";

import auth from "../middleware/authMiddleware.js";
import {
  getApplicantsByJob,
  updateApplicationStatus,
} from "../controllers/applicationController.js";
import upload from "../middleware/uploadMiddleware.js";
import { applyJob } from "../controllers/applicationController.js";

const router = express.Router();
// router.post("/apply", auth, applyJob);
router.post("/apply", upload.single("resume"), applyJob);

router.get("/job/:jobId", auth, getApplicantsByJob);

router.put("/:applicationId/status", auth, updateApplicationStatus);
// router.put("/:id/status", auth, updateApplicationStatus);
export default router;
