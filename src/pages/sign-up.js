import React, { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", form);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-violet-400">
      <form onSubmit={handleSubmit} className="bg-indigo-200 p-10 rounded-lg w-800  shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign up</h2>
        <input
          type="text"
          placeholder="Username"
          required
          className="  bg-white w-full mb-4 p-2 border rounded border-blue-300 focus:border-violet-600 focus:outline-none"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="  bg-white w-full mb-4 p-2 border rounded border-blue-300 focus:border-violet-600 focus:outline-none"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-fuchsia-400 text-white py-2 rounded hover:bg-fuchsia-800"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
