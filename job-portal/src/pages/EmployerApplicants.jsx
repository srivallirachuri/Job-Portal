import React, { useEffect, useState } from "react";
import API from "../api/api";

export default function EmployerApplicants() {
  const employer_id = localStorage.getItem("user_id"); // save on login
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    API.get(`/employer/applications/${employer_id}`)
      .then((res) => setApplications(res.data))
      .catch((err) => console.error(err));
  }, [employer_id]);

  return (
    <div className="container">
      <h2>Applicants</h2>

      {applications.length === 0 ? (
        <p>No applications yet</p>
      ) : (
        applications.map((app) => (
          <div className="job-card" key={app.application_id}>
            <h3>{app.job_title}</h3>
            <p>
              <b>Name:</b> {app.applicant_name}
            </p>
            <p>
              <b>Email:</b> {app.applicant_email}
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
          </div>
        ))
      )}
    </div>
  );
}
