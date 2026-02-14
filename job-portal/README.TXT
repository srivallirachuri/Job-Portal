JOB PORTAL WEB APPLICATION USING REACTJS AND NODEJS

In  job-Portal application there are three roles user,employer,admin.Login and Register pages are designed to enter the users credentials.
The Job Portal Web Application is a full-stack web platform designed to connect job seekers and employers efficiently.
It allows employers to post job openings and manage applicants, while job seekers can browse jobs, apply with resumes, and track application status.
An Admin role is included to manage users and jobs.

Objectives of the Project
•	To create a centralized platform for job postings and applications
•	To provide role-based access (User, Employer, Admin)
•	To allow resume upload and application tracking
•	To secure APIs using JWT authentication
•	To implement real-world backend concepts such as middleware, file uploads, and database relations.

User Roles and Functionalities
Job Seeker (User)
Functionalities:
•	Register and login
•	View all available jobs
•	Apply for jobs by uploading a resume (PDF/DOC)
•	Track application status (Applied / Accepted / Rejected)

 Employer
Functionalities:
•	Register and login as employer
•	Post new job vacancies
•	View jobs posted by them
•	View applicants for each job
•	Accept or reject applicants
•	Download applicant resumes

Admin
Functionalities:
•	Login as admin
•	View all registered users
•	Manage jobs (view/delete)
•	Monitor platform activities

 Technologies Used
Frontend
•	React.js
•	React Router DOM
•	Axios
•	CSS (custom responsive styling)
Backend
•	Node.js
•	Express.js
•	JWT (JSON Web Token)
•	Multer (file uploads)
Database
•	MySQL
Tools
•	Postman (API testing)
•	VS Code
•	Git & GitHub

Authentication & Authorization
•	JWT token is generated on login
•	Token is stored in browser localStorage
•	Token is sent with every protected API request
•	Middleware verifies token and extracts user information

Auth Middleware Responsibilities
•	Check if token exists
•	Decode JWT
•	Attach user details to req.user
•	Restrict access based on role

Registration Module
•	Users register with name, email, password, and role
•	Email is unique
•	Data is stored in MySQL database

Login Module
•	Validates user credentials
•	Generates JWT token
•	Redirects user based on role

Job Posting Module (Employer)
•	Employers create job postings
•	Jobs are stored in database
•	Only authenticated employers can post jobs

Job Listing Module
•	All users can view jobs
•	Job details include title, description, location, and employer

Apply Job Module
•	Job seekers upload resume using Multer
•	Application is saved with status = Applied
•	Resume stored in server directory

 Applicant Management (Employer)
•	Employers view applicants per job
•	Accept or reject applications
•	Status is updated in database

Admin Dashboard
•	View users and jobs
•	Platform-level monitoring
•	Can remove inappropriate jobs or users

 File Upload Handling
•	Multer middleware handles resume uploads
•	Files stored in /uploads directory
•	File path saved in database

API Endpoints Summary
Authentication
Method	Endpoint	        Description
POST	/api/auth/register	Register user
POST	/api/auth/login	    Login user

Jobs
Method	Endpoint	        Description
GET	    /api/jobs	        Get all jobs
POST	/api/jobs/post	    Post job (Employer)
GET	   /api/jobs/employer	Employer jobs

Applications
Method	Endpoint	                    Description
POST	/api/applications/apply	Apply   job
GET	    /api/applications/:jobId	   View applicants
PUT	   /api/applications/:id/status	    Accept/Reject

Security Features
•	JWT authentication
•	Protected routes using middleware
•	Role-based access control
•	Secure file upload handling

JOB PORTAL WEB APPLICATION USING REACTJS AND NODEJS
In  job-Portal application there are three roles user,employer,admin.Login and Register pages are designed to enter the users credentials.
The Job Portal Web Application is a full-stack web platform designed to connect job seekers and employers efficiently.
It allows employers to post job openings and manage applicants, while job seekers can browse jobs, apply with resumes, and track application status.
An Admin role is included to manage users and jobs.

Objectives of the Project
•	To create a centralized platform for job postings and applications
•	To provide role-based access (User, Employer, Admin)
•	To allow resume upload and application tracking
•	To secure APIs using JWT authentication
•	To implement real-world backend concepts such as middleware, file uploads, and database relations.
User Roles and Functionalities
Job Seeker (User)
Functionalities:
•	Register and login
•	View all available jobs
•	Apply for jobs by uploading a resume (PDF/DOC)
•	Track application status (Applied / Accepted / Rejected)

 Employer
Functionalities:
•	Register and login as employer
•	Post new job vacancies
•	View jobs posted by them
•	View applicants for each job
•	Accept or reject applicants
•	Download applicant resumes
Admin
Functionalities:
•	Login as admin
•	View all registered users
•	Manage jobs (view/delete)
•	Monitor platform activities
 Technologies Used
Frontend
•	React.js
•	React Router DOM
•	Axios
•	CSS (custom responsive styling)
Backend
•	Node.js
•	Express.js
•	JWT (JSON Web Token)
•	Multer (file uploads)
Database
•	MySQL
Tools
•	Postman (API testing)
•	VS Code
•	Git & GitHub

Authentication & Authorization
•	JWT token is generated on login
•	Token is stored in browser localStorage
•	Token is sent with every protected API request
•	Middleware verifies token and extracts user information
Auth Middleware Responsibilities
•	Check if token exists
•	Decode JWT
•	Attach user details to req.user
•	Restrict access based on role
Registration Module
•	Users register with name, email, password, and role
•	Email is unique
•	Data is stored in MySQL database
Login Module
•	Validates user credentials
•	Generates JWT token
•	Redirects user based on role
Job Posting Module (Employer)
•	Employers create job postings
•	Jobs are stored in database
•	Only authenticated employers can post jobs
Job Listing Module
•	All users can view jobs
•	Job details include title, description, location, and employer

Apply Job Module
•	Job seekers upload resume using Multer
•	Application is saved with status = Applied
•	Resume stored in server directory

 Applicant Management (Employer)
•	Employers view applicants per job
•	Accept or reject applications
•	Status is updated in database

Admin Dashboard
•	View users and jobs
•	Platform-level monitoring
•	Can remove inappropriate jobs or users

 File Upload Handling
•	Multer middleware handles resume uploads
•	Files stored in /uploads directory
•	File path saved in database

API Endpoints Summary
Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user

Jobs
Method	Endpoint	Description
GET	/api/jobs	Get all jobs
POST	/api/jobs/post	Post job (Employer)
GET	/api/jobs/employer	Employer jobs

Applications
Method	Endpoint	Description
POST	/api/applications/apply	Apply job
GET	/api/applications/:jobId	View applicants
PUT	/api/applications/:id/status	Accept/Reject

 Security Features
•	JWT authentication
•	Protected routes using middleware
•	Role-based access control
•	Secure file upload handling

Axios
Axios is a promise-based HTTP client used to send requests from frontend to backend APIs.
Axios handles:
GET
POST
PUT
DELETE

Nodemon
Server restarts automatically
Faster development
No manual restart


Multer
Multer is a middleware that processes multipart/form-data used for file uploads.
Without Multer → Express cannot read files
With Multer → Files are received, validated, and stored properly

Purpose of JWT
JWT allows your backend to:
Verify who the user is
Know what role the user has
Allow or deny access without logging in again

In short:
JWT = Digital Identity Card

To create react app:
npm create vite@latest

backend:
npm install express,mysql2,dotenv