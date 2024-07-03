import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <NavLink end  to="/app">Home</NavLink>

      <NavLink to="Dashbord">Dashbord</NavLink>

      <NavLink to="Post">Post</NavLink>
    </div>
  );
}

export default Navbar;
