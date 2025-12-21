import React, { useEffect, useState } from "react";
import API from "../api/api";
import "../styles/admin.css";

export default function AdminDashboard() {
  // 🔐 Admin access check
  if (localStorage.getItem("role") !== "admin") {
    return <h3 style={{ textAlign: "center" }}>Access Denied</h3>;
  }

  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const usersRes = await API.get("/admin/users");
      const jobsRes = await API.get("/admin/jobs");

      setUsers(usersRes.data);
      setJobs(jobsRes.data);
    } catch (err) {
      console.error("ADMIN ERROR 👉", err.response?.data || err.message);
      alert("Failed to load admin data");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    await API.delete(`/admin/users/${id}`);
    setUsers(users.filter((u) => u.user_id !== id));
  };

  const deleteJob = async (id) => {
    if (!window.confirm("Delete this job?")) return;
    await API.delete(`/admin/jobs/${id}`);
    setJobs(jobs.filter((j) => j.job_id !== id));
  };

  if (loading) {
    return <h3 style={{ textAlign: "center" }}>Loading Admin Dashboard...</h3>;
  }

  return (
    <div className="admin-layout">
      {/* SIDEBAR */}
      <div className="admin-sidebar">
        <h2>Admin Panel</h2>
        <p>Dashboard</p>
        <p>Users</p>
        <p>Jobs</p>
      </div>

      {/* MAIN CONTENT */}
      <div className="admin-main">
        <h1>Admin Dashboard</h1>

        {/* STATS */}
        <div className="admin-stats">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>{users.length}</p>
          </div>

          <div className="stat-card">
            <h3>Employers</h3>
            <p>{users.filter((u) => u.role === "employer").length}</p>
          </div>

          <div className="stat-card">
            <h3>Total Jobs</h3>
            <p>{jobs.length}</p>
          </div>
        </div>

        {/* USERS TABLE */}
        <div className="admin-table">
          <h2>Manage Users</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.user_id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    <button
                      className="btn small"
                      onClick={() => deleteUser(u.user_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* JOBS TABLE */}
        <div className="admin-table" style={{ marginTop: "30px" }}>
          <h2>Manage Jobs</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Employer</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((j) => (
                <tr key={j.job_id}>
                  <td>{j.title}</td>
                  <td>{j.employer}</td>
                  <td>
                    <button
                      className="btn small"
                      onClick={() => deleteJob(j.job_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
