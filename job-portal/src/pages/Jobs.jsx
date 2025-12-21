import React, { useEffect, useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Jobs() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch jobs");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h3 style={{ textAlign: "center" }}>Loading jobs...</h3>;
  }

  return (
    <div className="container">
      <h2>Available Jobs</h2>

      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        jobs.map((job) => (
          <div className="job-card" key={job.job_id}>
            <h3>{job.title}</h3>

            <p>
              <strong>Company:</strong> {job.company}
            </p>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <p>{job.description}</p>

            <button
              className="btn"
              onClick={() => navigate(`/apply/${job.job_id}`)}
            >
              Apply
            </button>
          </div>
        ))
      )}
    </div>
  );
}
