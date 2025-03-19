import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Help.css";

const Help = () => {
  return (
    <div className="help-container">
      <h1 className="help-title">How Can We Help You?</h1>

      <section className="help-section">
        <h2>FAQs</h2>
        <p>Find answers to common queries about our services.</p>
        <Link to="/Faqs">
          <button className="help-btn">View FAQs</button>
        </Link>
      </section>

      <section className="help-section">
        <h2>Live Chat</h2>
        <p>Need immediate help? Chat with our support team.</p>
        <button className="help-btn">Start Chat</button>
      </section>

      <section className="help-section">
        <h2>Support Ticket</h2>
        <p>Submit a request, and our team will get back to you.</p>
        <button className="help-btn">Submit Ticket</button>
      </section>

      <section className="help-section">
        <h2>Video Tutorials</h2>
        <p>Watch step-by-step guides to enhance your experience.</p>
        <button className="help-btn">Watch Videos</button>
      </section>

      <section className="help-section">
        <h2>Testimonials</h2>
        <p>See what our clients say about our interior design services.</p>
        <button className="help-btn">Read Testimonials</button>
      </section>
    </div>
  );
};

export default Help;
