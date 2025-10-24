import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>✨ QuoteVerse</h1>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/quotes" className="nav-link">Quotes</Link>
        <Link to="/add" className="nav-link">Add Quote</Link>
      </div>
    </nav>
  );
}

export default Navbar;
