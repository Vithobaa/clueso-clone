import { useState } from "react";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar open={open} onClose={() => setOpen(false)} />

      <div className="flex-1 min-h-screen bg-gray-50">
        <header className="md:hidden p-4 border-b bg-white">
          <button onClick={() => setOpen(true)}>☰</button>
        </header>
        {children}
      </div>
    </div>
  );
}
