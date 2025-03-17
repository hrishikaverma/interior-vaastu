import React from "react";
import "./Help.css";

const Help = () => {
  return (
    <div className="help-container">
      <h1 className="help-title">How Can We Help You?</h1>
      
      <section className="help-section">
        <h2>Blogs</h2>
        <p>Explore our latest blogs for interior design tips and trends.</p>
        <button className="help-btn">Visit Blogs</button>
      </section>

      <section className="help-section">
        <h2>Projects</h2>
        <p>Check out our completed and ongoing interior design projects.</p>
        <button className="help-btn">View Projects</button>
      </section>

      <section className="help-section">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to our team for assistance.</p>
        <button className="help-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default Help;
