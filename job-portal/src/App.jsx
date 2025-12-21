import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./api/components/Navbar";
import Footer from "./api/components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import ApplyJob from "./pages/ApplyJob";
import EmployerDashboard from "./pages/EmployerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import PostJob from "./pages/PostJob";
import EmployerJobs from "./pages/EmployerJobs";
import Applicants from "./pages/Applicants";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="main-content">
        <Routes>{/* routes */}</Routes>
      </main>

      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/jobs" element={<Jobs />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ✅ FIXED jobId */}
        <Route path="/apply/:jobId" element={<ApplyJob />} />

        {/* Employer */}
        <Route path="/employer" element={<EmployerDashboard />} />
        <Route path="/employer/post-job" element={<PostJob />} />
        <Route path="/employer/jobs" element={<EmployerJobs />} />
        <Route path="/employer/applicants/:jobId" element={<Applicants />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
