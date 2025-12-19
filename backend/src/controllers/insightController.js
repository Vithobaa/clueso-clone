import Feedback from "../models/Feedback.js";
import { generateMockInsights } from "../services/insightService.js";

export const generateInsights = async (req, res) => {
  try {
    const feedbackList = await Feedback.find({ user: req.user._id });
    const insights = generateMockInsights(feedbackList);
    res.json(insights);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
