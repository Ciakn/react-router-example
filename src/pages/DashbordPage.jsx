import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function DashbordPage() {
  return (
    <div>
      <div className="dashbord">
        <div className="sidebar">
          <NavLink to="payments">Payments</NavLink>
          <NavLink to="profile">Profile</NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default DashbordPage;
