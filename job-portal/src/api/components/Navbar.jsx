// ===============================
// src/components/Navbar.jsx
// ===============================
import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../utils/logout";

export default function Navbar() {
  const role = localStorage.getItem("role");
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h2>Job Portal</h2>
      </Link>

      <div>
        <Link to="/jobs">Find Jobs</Link>

        {!role && <Link to="/login">Login</Link>}
        {!role && <Link to="/register">Register</Link>}

        {role === "employer" && <Link to="/employer">Employer Dashboard</Link>}
        {role === "admin" && <Link to="/admin">Admin Dashboard</Link>}

        {role && (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <button
              className="btn"
              style={{ background: "crimson" }}
              onClick={logout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
  //   <nav className="navbar">
  //     <h2>Job Portal</h2>
  //     <div>
  //       <Link to="/">Jobs</Link>
  //       <Link to="/login">Login</Link>
  //       <Link to="/register">Register</Link>
  //     </div>
  //   </nav>
  // );
}
