// src/context/Navbar.js or src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
      <Link to="/favorites" style={{ margin: "0 10px" }}>Favorites</Link>
      <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>
      <Link to="/register" style={{ margin: "0 10px" }}>Register</Link>
    </nav>
  );
};

export default Navbar;
