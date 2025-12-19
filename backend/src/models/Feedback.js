import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    source: { type: String, default: "web" }, // web / email / widget (mock)
    status: { type: String, default: "new" }, // new / reviewed
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
