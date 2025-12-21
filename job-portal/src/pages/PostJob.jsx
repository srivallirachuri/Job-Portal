import React, { useState } from "react";
import API from "../api/api";

export default function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handlePostJob = async (e) => {
    e.preventDefault();

    try {
      await API.post("/jobs/post", { title, description, location }, {});

      alert("Job posted successfully");
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.message || "Failed to post job");
    }
  };

  return (
    <form className="form" onSubmit={handlePostJob}>
      <h2>Post Job</h2>

      <input
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Job Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />

      <button type="submit">Post Job</button>
    </form>
  );
}
