import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", form);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-emerald-400">
      <form onSubmit={handleSubmit} className="bg-sky-200 p-10 rounded-lg w-800 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          required
          className="w-full mb-4 p-2 border rounded border-blue-300 focus:border-emerald-600 focus:outline-none"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full mb-4 p-2 border rounded border-blue-300 focus:border-emerald-600 focus:outline-none"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-teal-400 text-white py-2 rounded hover:bg-teal-800"
        >
          Login
        </button>
      </form>
    </div>
  );
}
