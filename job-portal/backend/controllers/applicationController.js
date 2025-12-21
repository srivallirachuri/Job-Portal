import db from "../config/db.js";

export const applyJob = (req, res) => {
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  const { job_id, user_id } = req.body;
  const resume = req.file?.filename;

  if (!job_id || !user_id || !resume) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const sql = `
    INSERT INTO applications (job_id, user_id, resume, status)
    VALUES (?, ?, ?, 'Applied')
  `;

  db.query(sql, [job_id, user_id, resume], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Application submitted successfully" });
  });
};

export const getApplicantsByJob = (req, res) => {
  const jobId = req.params.jobId;

  const sql = `
    SELECT 
      applications.application_id,
      applications.status,
      users.name,
      users.email,
      applications.resume
    FROM applications
    JOIN users ON applications.user_id = users.user_id
    WHERE applications.job_id = ?
  `;

  db.query(sql, [jobId], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// ✅ ACCEPT / REJECT
export const updateApplicationStatus = (req, res) => {
  const applicationId = Number(req.params.applicationId);
  const { status } = req.body;

  if (!applicationId || !status) {
    return res.status(400).json({ message: "Invalid request data" });
  }

  const checkSql =
    "SELECT application_id FROM applications WHERE application_id = ?";

  db.query(checkSql, [applicationId], (err, rows) => {
    if (err) return res.status(500).json(err);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Application not found" });
    }

    const updateSql =
      "UPDATE applications SET status = ? WHERE application_id = ?";

    db.query(updateSql, [status, applicationId], (err2) => {
      if (err2) return res.status(500).json(err2);

      res.json({ message: "Status updated successfully" });
    });
  });
};
