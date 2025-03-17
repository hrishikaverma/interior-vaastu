import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ConsentScreen.css"; // External CSS file import

const ConsentScreen = () => {
  const navigate = useNavigate();
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    localStorage.removeItem("userConsent"); // Deletes on every refresh
    setShowConsent(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("userConsent", "accepted");
    setShowConsent(false);
    navigate("/home"); // Navigate to Home
  };

  const handleDecline = () => {
    alert("To continue using the site, you must accept cookies.");
  };

  return showConsent ? (
    <div className="consent-container">
      <div className="consent-card">
        <h2>Consent Required</h2>
        <p>We use cookies and store minimal data for a better experience.</p>
        <div className="button-container">
          <button onClick={handleAccept} className="accept-btn">
            Accept
          </button>
          <button onClick={handleDecline} className="decline-btn">
            Decline
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ConsentScreen;
