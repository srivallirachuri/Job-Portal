import React from "react";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>

      <p>{job.description}</p>

      <p>
        <strong>Location:</strong> {job.location}
      </p>

      <Link to={`/apply/${job.job_id}`} className="btn">
        Apply
      </Link>
    </div>
  );
}
