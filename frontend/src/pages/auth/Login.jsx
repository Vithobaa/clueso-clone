import { useState } from "react";
import { login } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      loginUser(data);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

    return (
  <div className="max-w-sm mx-auto mt-10">
    <button
      type="button"
      onClick={() => navigate("/")}
      className="mb-4 text-sm text-gray-500 hover:underline"
    >
      ← Back to Home
    </button>

    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Login</h2>

      <input
        className="border p-2 w-full"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 w-full">
        Login
      </button>
    </form>
  </div>
);
}
