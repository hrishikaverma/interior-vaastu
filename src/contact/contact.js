import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    mail: "",       // ✅ 'email' ko 'mail' kar diya
    subject: "",
    phone: "",
    interested: "", // ✅ 'message' ko 'interested' kar diya
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      setMessage(response.data.message || "Message sent successfully!");
      setFormData({ fullname: "", mail: "", subject: "", phone: "", interested: "" }); // ✅ Clear form
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send message. Try again.");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Contact Us</h2>
      
      {message && <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>}
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input type="text" id="fullname" name="fullname" placeholder="Full Name" onChange={handleChange} value={formData.fullname} required />

        <label htmlFor="mail">Email</label>
        <input type="email" id="mail" name="mail" placeholder="Email" onChange={handleChange} value={formData.mail} required />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Subject" onChange={handleChange} value={formData.subject} required />

        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} required />

        <label htmlFor="interested">Message</label>
        <textarea id="interested" name="interested" placeholder="Your message" onChange={handleChange} value={formData.interested} required />

        <button type="submit" style={{ marginTop: "10px", padding: "10px", background: "#007bff", color: "white", border: "none", cursor: "pointer" }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
