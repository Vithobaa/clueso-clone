import { useEffect, useState } from "react";
import { getFeedback } from "../../services/feedbackService";

export default function FeedbackList({ reload }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getFeedback().then(setItems).catch(() => {});
  }, [reload]);
  if(items.length===0){
    return (
        <div className="space-y-2">
        {items.map((f) => (
            <div key={f._id} className="border p-3 rounded">
            <h4 className="font-medium">{f.title}</h4>
            <p className="text-sm text-gray-600">{f.message}</p>
            <span className="text-xs">{f.source}</span>
            </div>
        ))}
        </div>
    );
}
}
