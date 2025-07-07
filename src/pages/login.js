import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://auth-backend-31a8.onrender.com/login", formData);
      alert(response.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg w-80 shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center mb-4">Log In</h2>
        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-green-500 text-white p-2 rounded w-full hover:bg-green-600">Log In</button>
      </form>
    </div>
  );
};

export default Login;
