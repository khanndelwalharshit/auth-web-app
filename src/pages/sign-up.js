import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // for redirect after signup

const SignUp = () => {
  const navigate = useNavigate(); // navigate to login after success

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Frontend validation
    if (formData.password !== formData.confirmPassword) {
      return alert("❌ Passwords do not match!");
    }

    if (formData.phone.length < 10) {
      return alert("📱 Phone number must be at least 10 digits.");
    }

    if (formData.password.length < 6) {
      return alert("🔐 Password must be at least 6 characters.");
    }

    try {
      const response = await axios.post("https://auth-backend-31a8.onrender.com/signup", formData);

      alert("✅ " + response.data.message);

      // ✅ Redirect to login
      navigate("/login");
    } catch (err) {
      if (err.response?.status === 409) {
        alert("⚠️ Phone number already registered");
      } else {
        console.error("Signup error:", err.response || err);
        alert(err.response?.data?.error || "❌ Signup failed");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-violet-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg w-96 shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-fuchsia-500 text-white p-2 rounded w-full hover:bg-fuchsia-800"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
