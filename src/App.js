import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddQuote from "./pages/AddQuote";
import Quotes from "./pages/Quotes";
import Particles from "./components/Particles";
import LokiBeam from "./components/LokiBeam";
import "./App.css";
import "./styles/beam.css";

function App() {
  return (
    <Router>
      <LokiBeam />
      <div style={{ position: "relative", zIndex: 1, padding: "2rem", color: "white" }}></div>
      <Particles />
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/add" element={<AddQuote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
