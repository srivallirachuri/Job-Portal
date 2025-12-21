import React from "react";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <h2>Admin Panel</h2>

      <Link to="/admin">Dashboard</Link>
      <Link to="/admin/users">Manage Users</Link>
      <Link to="/admin/employers">Verify Employers</Link>
      <Link to="/admin/jobs">Manage Jobs</Link>
      <Link to="/admin/applications">Applications</Link>
    </div>
  );
}
