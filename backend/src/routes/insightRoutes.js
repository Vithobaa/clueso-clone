import express from "express";
import protect from "../middleware/authMiddleware.js";
import { generateInsights } from "../controllers/insightController.js";

const router = express.Router();

router.post("/generate", protect, generateInsights);

export default router;
