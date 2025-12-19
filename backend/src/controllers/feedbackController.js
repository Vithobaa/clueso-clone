import Feedback from "../models/Feedback.js";

// Create feedback
export const createFeedback = async (req, res) => {
  const { title, message, source } = req.body;

  if (!title || !message) {
    return res.status(400).json({ message: "Title and message required" });
  }

  try {
    const feedback = await Feedback.create({
      user: req.user._id,
      title,
      message,
      source,
    });

    res.status(201).json(feedback);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// List feedback for logged-in user
export const getFeedback = async (req, res) => {
  try {
    const list = await Feedback.find({ user: req.user._id })
      .sort({ createdAt: -1 });
    res.json(list);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
