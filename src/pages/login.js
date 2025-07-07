import React, { useState } from "react";
import axios from "axios";

const Login = () => {
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
      localStorage.setItem("token", res.data.token);  
      alert("Login successful!");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-sky-200">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg w-80 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-center mb-4">Log In</h2>

        <input name="phone" onChange={handleChange} type="text" placeholder="Phone Number" required className="w-full p-2 border rounded" />
        <input name="password" onChange={handleChange} type="password" placeholder="Password" required className="w-full p-2 border rounded" />

        <button type="submit" className="w-full bg-teal-400 text-white py-2 rounded hover:bg-teal-800">Log In</button>
      </form>
    </div>
  );
};

export default Login;
