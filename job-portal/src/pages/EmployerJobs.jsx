import React, { useEffect, useState } from "react";
import API from "../api/api";
import { Link } from "react-router-dom";

export default function EmployerJobs() {
  const [jobs, setJobs] = useState([]);
  const employer_id = localStorage.getItem("user_id");

  useEffect(() => {
    API.get("/jobs/employer", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => setJobs(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h2>My Jobs</h2>

      {jobs.map((job) => (
        <div key={job.job_id} className="job-card">
          <h3>{job.title}</h3>
          <p>{job.location}</p>

          <Link to={`/employer/applicants/${job.job_id}`} className="btn">
            View Applicants
          </Link>
        </div>
      ))}
    </div>
  );
}
