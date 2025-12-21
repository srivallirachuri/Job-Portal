-- CREATE DATABASE job_portal;
USE job_portal;

CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role ENUM('user', 'employer', 'admin')
);
CREATE TABLE jobs (
  job_id INT AUTO_INCREMENT PRIMARY KEY,
  employer_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  location VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (employer_id) REFERENCES users(user_id)
    ON DELETE CASCADE
);
CREATE TABLE applications (
  application_id INT AUTO_INCREMENT PRIMARY KEY,
  job_id INT NOT NULL,
  user_id INT NOT NULL,
  resume VARCHAR(255),
  status ENUM('Applied','Shortlisted','Rejected') DEFAULT 'Applied',
  applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (job_id) REFERENCES jobs(job_id)
    ON DELETE CASCADE,

  FOREIGN KEY (user_id) REFERENCES users(user_id)
    ON DELETE CASCADE,

  UNIQUE (job_id, user_id)
);