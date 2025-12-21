import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../utils/logout";

<div style={{ textAlign: "center", marginTop: "50px" }}>
  <button className="btn" style={{ background: "crimson" }} onClick={logout}>
    Logout
  </button>
</div>;

export default function EmployerDashboard() {
  return (
    <div className="container">
      <h2>Employer Dashboard</h2>

      <div className="dashboard-grid">
        <div className="card">
          <h3>Post Job</h3>
          <p>Create a new job listing</p>
          <a href="/employer/post-job" className="btn">
            Post Job
          </a>
        </div>

        <div className="card">
          <h3>My Jobs</h3>
          <p>View jobs you posted</p>
          <a href="/employer/jobs" className="btn">
            View Jobs
          </a>
        </div>
      </div>
    </div>
  );
}
