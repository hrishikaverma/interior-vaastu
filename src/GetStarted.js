import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./GetStarted.css";
import photoBg from "./images/backgroung/vaastu-bg.jpg";

const directions = [
    {
      title: "North",
      element: "Water",
      color: "text-primary",
      text: "Ideal for career growth, financial stability, and new opportunities.",
      symbol: "💧",
      effect: "flowing prosperity",
      tips: [
        "Keep the North zone clutter-free for a steady flow of wealth.",
        "A small water fountain or aquarium enhances positivity.",
        "Avoid placing heavy objects or fire elements in this direction."
      ],
    },
    {
      title: "South",
      element: "Fire",
      color: "text-danger",
      text: "Best for leadership, fame, and personal growth.",
      symbol: "🔥",
      effect: "boosts confidence and recognition",
      tips: [
        "Use red or orange colors to activate energy in the South zone.",
        "Avoid placing water-related elements like aquariums here.",
        "Keep this area well-lit to amplify success energies."
      ],
    },
    {
      title: "East",
      element: "Air",
      color: "text-success",
      text: "Enhances health, vitality, and spiritual well-being.",
      symbol: "🌿",
      effect: "promotes mental clarity and good health",
      tips: [
        "Place indoor plants or a wind chime in the East to attract positivity.",
        "Ensure good ventilation and sunlight to enhance energy flow.",
        "Avoid placing heavy furniture to keep energy light and free-flowing."
      ],
    },
    {
      title: "West",
      element: "Earth",
      color: "text-warning",
      text: "Supports stability, wisdom, and long-term savings.",
      symbol: "🌍",
      effect: "grounds energy and provides security",
      tips: [
        "Use earthy tones like yellow or brown to strengthen stability.",
        "Keeping valuables or safes in the West enhances financial security.",
        "Avoid excessive water elements in this area to prevent instability."
      ],
    },
  ];
  
const GetStarted = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="vaastu-container">
      {/* Hero Section */}
      <motion.div 
        className="hero-section text-center d-flex align-items-center justify-content-center bg-overlay"
        style={{ backgroundImage: `url(${photoBg})` }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content text-white">
          <h1 className="display-4 fw-bold">Vaastu Shastra: The Art of Harmonious Living</h1>
          <p className="lead">An ancient Indian science of architecture that fosters positive energy and prosperity.</p>
        </div>
      </motion.div>

      <div className="container mt-5 d-flex">
        {/* Vaastu Directions Section */}
        <motion.div 
          className="col-md-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-center text-success mb-4">Vaastu Directions & Their Significance</h2>
          <div className="row">
            {directions.map((direction, index) => (
              <div key={index} className="col-md-6 mt-4">
                <motion.div 
                  className="card shadow-lg p-3 rounded border-0 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="card-body">
                    <h5 className={`card-title ${direction.color} fw-bold`}>{direction.title}</h5>
                    <p className="card-text text-muted">{direction.text}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Vaastu Colors & Elements */}
          <motion.div 
            className="mt-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-center text-warning mb-4">Vaastu-Compatible Colors & Elements</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Direction</th>
                  <th>Element</th>
                  <th>Suitable Colors</th>
                </tr>
              </thead>
              <tbody>
                {directions.map((dir, idx) => (
                  <tr key={idx}>
                    <td>{dir.title}</td>
                    <td>{dir.element}</td>
                    <td className={dir.color}>{dir.color.replace("text-", "").toUpperCase()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Vaastu FAQ Section */}
          <motion.div 
            className="mt-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-center text-danger mb-4">Vaastu FAQs & Myths</h2>
            <div className="accordion" id="vaastuFAQ">
              <div className="accordion-item">
                <h2 className="accordion-header" id="faq1">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    ❓ Does every house have Vaastu dosh?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#vaastuFAQ">
                  <div className="accordion-body">Not necessarily. Small changes can balance energy.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faq2">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    ❓ Can mirrors in the wrong direction cause issues?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#vaastuFAQ">
                  <div className="accordion-body">Yes, mirrors should be in North or East, not South or West.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Sidebar Toggle Button */}
        <button className="sidebar-toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>

        {/* Login & Register Section - Sidebar */}
        <motion.div 
          className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: isSidebarOpen ? 0 : 50, opacity: isSidebarOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-primary fw-bold">Need Expert Vaastu Consultation?</h3>
          <p className="text-muted">Register & login to get personalized suggestions and guidance.</p>
          <div className="d-grid gap-2 mt-3">
            <Link to="/login" className="btn btn-outline-primary">Login</Link>
            <Link to="/register" className="btn btn-outline-success">Register</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStarted;
