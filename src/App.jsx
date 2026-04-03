import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-white">
        <Navbar/>
        <main>
        </main>
      </div>
    </Router>
  );
}
