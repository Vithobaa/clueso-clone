import express from "express";
import protect from "../middleware/authMiddleware.js";
import { createFeedback, getFeedback } from "../controllers/feedbackController.js";

const router = express.Router();

router.route("/")
  .post(protect, createFeedback)
  .get(protect, getFeedback);

export default router;
