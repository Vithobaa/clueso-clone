import { useState } from "react";
import { createFeedback } from "../../services/feedbackService";

export default function FeedbackForm({ onCreated }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [source, setSource] = useState("web");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await createFeedback({ title, message, source });
      setTitle("");
      setMessage("");
      onCreated(); // refresh list
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-3 border p-4 rounded">
      <h3 className="font-semibold">Add Feedback</h3>
      <input
        className="border p-2 w-full"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <select
        className="border p-2 w-full"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      >
        <option value="web">Web</option>
        <option value="email">Email</option>
        <option value="widget">Widget</option>
      </select>
      <button className="bg-blue-600 text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
}
