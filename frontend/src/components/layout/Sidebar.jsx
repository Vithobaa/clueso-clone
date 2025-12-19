import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar({ open, onClose }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded ${
      isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <aside
      className={`fixed md:static z-20 bg-white w-64 min-h-screen border-r p-4
        ${open ? "left-0" : "-left-64"} md:left-0 transition-all`}
    >
      <div className="flex justify-between items-center mb-4 md:hidden">
        <h1 className="font-bold">Clueso Clone</h1>
        <button onClick={onClose}>✕</button>
      </div>

      <h1 className="text-xl font-bold mb-4 hidden md:block">Clueso Clone</h1>

      <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
      <NavLink to="/feedback" className={linkClass}>Feedback</NavLink>
      <NavLink to="/insights" className={linkClass}>Insights</NavLink>

      <button
        onClick={handleLogout}
        className="mt-6 w-full bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </aside>
  );
}
