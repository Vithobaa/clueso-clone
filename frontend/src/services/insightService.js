import { apiRequest } from "./api";

export const generateInsights = () =>
  apiRequest("/api/insights/generate", {
    method: "POST",
  });
