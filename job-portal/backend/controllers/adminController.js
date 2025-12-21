import db from "../config/db.js";
/* ================= USERS ================= */

// Get all users
export const getAllUsers = (req, res) => {
  db.query("SELECT user_id, name, email, role FROM users", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// Delete user
export const deleteUser = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM users WHERE user_id = ?", [id], (err) => {
    if (err) return res.status(500).json(err);

    logAdminAction(req.user.id, `Deleted user ID ${id}`);
    res.json({ message: "User deleted successfully" });
  });
};
/* ================= JOBS ================= */

// Get all jobs
export const getAllJobs = (req, res) => {
  db.query(
    `SELECT jobs.*, users.name AS employer
     FROM jobs
     JOIN users ON jobs.employer_id = users.user_id`,
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};

// Delete job
export const deleteJob = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM jobs WHERE job_id = ?", [id], (err) => {
    if (err) return res.status(500).json(err);

    logAdminAction(req.user.id, `Deleted job ID ${id}`);
    res.json({ message: "Job deleted successfully" });
  });
};
