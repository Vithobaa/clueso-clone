export const generateMockInsights = (feedbackList) => {
  const count = feedbackList.length;

  if (count === 0) {
    return {
      summary: "No feedback available yet.",
      themes: [],
      sentiment: "neutral",
    };
  }

  // Very simple keyword-based mock
  const text = feedbackList.map(f => `${f.title} ${f.message}`).join(" ").toLowerCase();

  const themes = [];
  if (text.includes("login")) themes.push("Authentication");
  if (text.includes("slow") || text.includes("timeout")) themes.push("Performance");
  if (text.includes("ui") || text.includes("design")) themes.push("UI/UX");

  return {
    summary: `Analyzed ${count} feedback items. Common issues detected.`,
    themes,
    sentiment: themes.length > 0 ? "negative" : "neutral",
  };
};
