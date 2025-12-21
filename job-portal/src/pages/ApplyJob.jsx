import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/api";

export default function ApplyJob() {
  const { jobId } = useParams(); // must match route param
  const navigate = useNavigate();

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApply = async (e) => {
    e.preventDefault();

    const user_id = localStorage.getItem("user_id");

    if (!user_id) {
      alert("Session expired. Please login again.");
      navigate("/login");
      return;
    }

    if (!resume) {
      alert("Please upload your resume");
      return;
    }

    const formData = new FormData();
    formData.append("job_id", jobId); // ✅ MUST be job_id
    formData.append("user_id", user_id);
    formData.append("resume", resume);

    try {
      setLoading(true);

      await API.post("/applications/apply", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Application submitted successfully ✅");
      navigate("/jobs"); // redirect after apply
    } catch (err) {
      console.error("Apply Error:", err.response?.data);
      alert(err.response?.data?.message || "Application failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleApply}>
      <h2>Apply for Job</h2>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setResume(e.target.files[0])}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
