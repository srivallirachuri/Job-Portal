import db from "../config/db.js";

/* ================= ALL JOBS ================= */
export const getAllJobs = (req, res) => {
  const sql = `
    SELECT 
      jobs.job_id,
      jobs.title,
      jobs.description,
      jobs.location,
      jobs.created_at,
      users.name AS company
    FROM jobs
    JOIN users ON jobs.employer_id = users.user_id
    ORDER BY jobs.created_at DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to fetch jobs" });
    }
    res.json(results);
  });
};

/* ================= POST JOB ================= */
export const postJob = (req, res) => {
  console.log("REQ.USER:", req.user); // 🔍 DEBUG

  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "Unauthorized - no employer id" });
  }

  const { title, description, location } = req.body;
  const employer_id = req.user.id;

  const sql =
    "INSERT INTO jobs (employer_id, title, description, location) VALUES (?, ?, ?, ?)";

  db.query(sql, [employer_id, title, description, location], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "DB error" });
    }

    res.json({ message: "Job posted successfully" });
  });
};

/* ================= EMPLOYER JOBS ================= */
export const getEmployerJobs = (req, res) => {
  const employer_id = req.user.id;

  const sql =
    "SELECT * FROM jobs WHERE employer_id = ? ORDER BY created_at DESC";

  db.query(sql, [employer_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to fetch employer jobs" });
    }
    res.json(result);
  });
};
