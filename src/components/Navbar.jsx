import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <NavLink end  to="/">Home</NavLink>

      <NavLink to="Dashbord">Dashbord</NavLink>

      <NavLink to="posts">Post</NavLink>
    </div>
  );
}

export default Navbar;
