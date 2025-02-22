import { useState } from "react";
import "./contact.css";
import { GiWorld } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone, BsArrowRight } from "react-icons/bs";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    mail: "",
    subject: "",
    phone: "",
    interested: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");
  try {
    const response = await fetch("https://interior-vaastu.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    
    if (response.ok) {
      setStatus(result.message);
      setFormData({ fullname: "", mail: "", subject: "", phone: "", interested: "" }); // Clearing input fields
    } else {
      setStatus("Failed to send message. Try again later.");
    }
  } catch (error) {
    setStatus("Failed to send message. Try again later.");
  }
};

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>
          Contact Us<p>Home / Contact</p>
        </h1>
      </div>
      <div className="contact-content">
        <h2>We love meeting new people and helping them.</h2>
        <div className="contact-form">
          <div className="contact-form-info">
            <div className="icons">
              <p>
                <span className="icon">
                  <HiOutlineMail />
                </span>
                <a href="mailto: info@yourdomain.com">infovaastu.com</a>
              </p>
              <p>
                <span className="icon">
                  <BsTelephone />
                </span>
                +1 (378) 400-1234
              </p>
              <p>
                <span className="icon">
                  <GiWorld />
                </span>
                <a href="www.yourdomain.com">www.ivaastu.com</a>
              </p>
            </div>
            <div className="contact-smedias">
              <ul>
                <li>
                  <a href="https://www.facebook.com/">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form className="contact-form-fill" onSubmit={handleSubmit}>
            <div className="nameEmail">
              <input name="fullname" placeholder="Name" onChange={handleChange} required />
              <input id="email" name="mail" type="email" placeholder="Email" onChange={handleChange} required />
            </div>
            <div className="subjectPhone">
              <input name="subject" placeholder="Subject" onChange={handleChange} required />
              <input name="phone" type="tel" placeholder="Phone" onChange={handleChange} required />
            </div>
            <div className="interested">
              <textarea name="interested" placeholder="Hello, I am interested in.." onChange={handleChange} required />
            </div>
            <div className="send">
              <button type="submit">
                Send Now
                <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
              </button>
            </div>
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.778093439049!2d75.7883262253185!3d23.178297829064938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963746c22ca8cc3%3A0xf7d4b0c90714b6b6!2sFreeganj%2C%20Madhav%20Nagar%2C%20Ujjain%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1739957199775!5m2!1sen!2sin"
          title="map"
          style={{ width: "800px", height: "350px", border: "0" }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
}
