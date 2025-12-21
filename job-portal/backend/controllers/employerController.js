import db from "../config/db.js";

export const getApplicantsForEmployer = (req, res) => {
  const employer_id = req.params.employer_id;

  const sql = `
    SELECT 
      a.application_id,
      a.status,
      a.resume,
      u.name AS applicant_name,
      u.email AS applicant_email,
      j.title AS job_title
    FROM applications a
    JOIN users u ON a.user_id = u.user_id
    JOIN jobs j ON a.job_id = j.job_id
    WHERE j.employer_id = ?
    ORDER BY a.application_id DESC
  `;

  db.query(sql, [employer_id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
