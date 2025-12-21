import express from "express";
import { getApplicantsForEmployer } from "../controllers/employerController.js";

const router = express.Router();

router.get("/applications/:employer_id", getApplicantsForEmployer);

export default router;
