import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import insightRoutes from "./routes/insightRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/insights", insightRoutes);

app.get("/", (req, res) => res.send("API running"));

export default app;
