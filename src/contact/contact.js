import React, { useState } from "react";
import axios from "axios";
import photoBg from "../images/backgroung/contact-bg.jpg"; // Correctly import the image

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    mail: "",
    subject: "",
    phone: "",
    interested: "",
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
      setFormData({ fullname: "", mail: "", subject: "", phone: "", interested: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send message. Try again.");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "120vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${photoBg})`, // Use imported image correctly
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "5% 0",
        fontFamily: "DM Serif Display",
      }}
    >
      <h2 style={{ color: "#292F36", marginBottom: "20px" }}>Contact Us</h2>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form
        onSubmit={handleSubmit}
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        {[
          { label: "Full Name", name: "fullname", type: "text" },
          { label: "Email", name: "mail", type: "email" },
          { label: "Subject", name: "subject", type: "text" },
          { label: "Phone", name: "phone", type: "tel" },
        ].map((field, index) => (
          <div key={index}>
            <label style={{ marginBottom: "5px", fontWeight: "bold" }}>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.label}
              value={formData[field.name]}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                outline: "none",
                width: "100%",
              }}
            />
          </div>
        ))}

        <label style={{ marginBottom: "5px", fontWeight: "bold" }}>Message</label>
        <textarea
          name="interested"
          placeholder="Your message"
          value={formData.interested}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            resize: "none",
            minHeight: "100px",
            width: "100%",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#292F36",
            color: "white",
            cursor: "pointer",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
