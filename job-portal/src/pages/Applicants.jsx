import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";

export default function Applicants() {
  const { jobId } = useParams();
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplicants();
  }, []);

  const fetchApplicants = async () => {
    try {
      const res = await API.get(`/applications/job/${jobId}`);
      setApplicants(res.data);
    } catch (err) {
      console.error(err.response?.data);
      alert("Failed to load applicants");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (applicationId, status) => {
    try {
      const res = await API.put(`/applications/${applicationId}/status`, {
        status,
      });

      alert(res.data.message);

      setApplicants((prev) =>
        prev.map((app) =>
          app.application_id === applicationId ? { ...app, status } : app
        )
      );
    } catch (err) {
      console.error("UPDATE STATUS ERROR 👉", err.response?.data);
      alert(err.response?.data?.message || "Failed to update status");
    }
  };

  if (loading) {
    return <h3 style={{ textAlign: "center" }}>Loading applicants...</h3>;
  }

  return (
    <div className="container">
      <h2>Applicants</h2>

      {applicants.length === 0 ? (
        <p>No applicants yet</p>
      ) : (
        applicants.map((app) => (
          <div className="job-card" key={app.application_id}>
            <p>
              <b>Name:</b> {app.name}
            </p>
            <p>
              <b>Email:</b> {app.email}
            </p>
            <p>
              <b>Status:</b> {app.status}
            </p>

            <a
              href={`http://localhost:5000/uploads/${app.resume}`}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              View Resume
            </a>

            <div style={{ marginTop: "12px" }}>
              <button
                className="btn"
                onClick={() => updateStatus(app.application_id, "Accepted")}
              >
                Accept
              </button>

              <button
                className="btn"
                style={{ background: "crimson", marginLeft: "10px" }}
                onClick={() => updateStatus(app.application_id, "Rejected")}
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
