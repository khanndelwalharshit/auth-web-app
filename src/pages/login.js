import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // for redirect after login

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://auth-backend-31a8.onrender.com/login", formData);
      
      // ✅ Store token in localStorage
      localStorage.setItem("token", res.data.token);

      alert("✅ Login successful!");
      navigate("/dashboard"); // or home page
    } catch (err) {
      const errorMessage = err.response?.data?.error || "❌ Login failed";
      alert(errorMessage);
      console.error("Login error:", err.response || err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-sky-300 to-blue-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Welcome Back
        </h2>
        <p className="text-sm text-center text-gray-500 mb-4">
          Login to continue
        </p>

        <div className="space-y-4">
          <input
            name="phone"
            onChange={handleChange}
            type="text"
            placeholder="Phone Number"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
