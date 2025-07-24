import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // ✅ Make sure path is correct
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Contact from "./pages/Contact";
import PublicDonate from "./pages/PublicDonate";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider> {/* ✅ Wrap everything in this */}
      <Router>
        <Navbar />
        <div className="container my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/public-donate" element={<PublicDonate />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/donate" element={
              <ProtectedRoute>
                <Donate />
              </ProtectedRoute>
            } />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
