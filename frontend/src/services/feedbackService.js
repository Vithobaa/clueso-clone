import { apiRequest } from "./api";

export const createFeedback = (payload) =>
  apiRequest("/api/feedback", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const getFeedback = () =>
  apiRequest("/api/feedback");
