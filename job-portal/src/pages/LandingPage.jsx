import React from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Job Today</h1>
          <p>
            Connect with the best companies and take the next step in your career.
            Whether you're looking for your first job or a leadership role, we've got you covered.
          </p>
          <div className="hero-btns">
            <Link to="/jobs" className="btn hero-btn">Explore Jobs</Link>
            <Link to="/register" className="btn btn-outline">Post a Job</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats container">
        <div className="stat-item">
          <h2>10k+</h2>
          <p>Active Jobs</p>
        </div>
        <div className="stat-item">
          <h2>500+</h2>
          <p>Companies</p>
        </div>
        <div className="stat-item">
          <h2>8k+</h2>
          <p>Candidates</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container">
        <div className="section-title">
          <h2>Why Choose Our Portal?</h2>
          <p>We provide the best tools for both job seekers and employers.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Smart Search</h3>
            <p>Our intelligent filters help you find the perfect job match in seconds.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Quick Apply</h3>
            <p>Apply to multiple jobs with just a few clicks using your saved profile.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Access your dashboard and apply to jobs from any device, anywhere.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-it-works container">
        <div className="section-title">
          <h2>How It Works</h2>
        </div>
        <div className="steps-grid">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Create an Account</h3>
            <p>Sign up as a job seeker or an employer to get started.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Upload & Search</h3>
            <p>Upload your resume or post job openings to attract talent.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Connect</h3>
            <p>Apply for jobs or interview candidates and find the right fit.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Take the Next Step?</h2>
          <p>Join thousands of others who are finding their path with us.</p>
          <Link to="/register" className="btn">Get Started Now</Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
