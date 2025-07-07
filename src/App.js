import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./pages/sign-up";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <nav className="flex justify-center gap-8 p-4">
        <Link to="/signup" className="text-blue-600 underline">Sign Up</Link>
        <Link to="/login" className="text-green-600 underline">Login</Link>
      </nav>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
