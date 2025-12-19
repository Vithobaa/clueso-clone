import DashboardLayout from "../../components/layout/DashboardLayout";
import { useState } from "react";
import FeedbackForm from "../../components/feedback/FeedbackForm";
import FeedbackList from "../../components/feedback/FeedbackList";

export default function Feedback() {
  const [reload, setReload] = useState(0);

  return (
    <DashboardLayout>
      <div className="p-6 space-y-4">
        <FeedbackForm onCreated={() => setReload(r => r + 1)} />
        <FeedbackList reload={reload} />
      </div>
    </DashboardLayout>
  );
}
