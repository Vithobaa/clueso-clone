import DashboardLayout from "../../components/layout/DashboardLayout";
import { useState } from "react";
import { generateInsights } from "../../services/insightService";

export default function Insights() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const run = async () => {
    setLoading(true);
    try {
      setData(await generateInsights());
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">AI Insights</h2>
        <button
          onClick={run}
          disabled={loading}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Generating..." : "Generate Insights"}
        </button>

        {data && (
          <div className="border p-4 rounded space-y-2">
            <p><strong>Summary:</strong> {data.summary}</p>
            <p><strong>Sentiment:</strong> {data.sentiment}</p>
            <ul className="list-disc ml-6">
              {data.themes.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
