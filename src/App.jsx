import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Volunteer from "./pages/Volunteer";
import Chapters from "./pages/Chapters";
import Donate from "./pages/Donate";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-white">
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
