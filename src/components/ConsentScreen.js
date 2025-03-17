import React, { useState } from "react";
import "./ConsentScreen.css";

const ConsentScreen = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(true); // Always show popup

  const handleAccept = () => {
    console.log("Consent Accepted");
    setIsVisible(false); // Hide popup after accepting
  };

  return (
    isVisible && (
      <div className="consent-container">
        <div className="consent-box">
          <h2>We Value Your Privacy</h2>
          <p>
            This website uses cookies and other tracking technologies to improve
            your browsing experience. By clicking "Accept All," you agree to our
            terms and policies.
          </p>
          <button onClick={handleAccept} className="accept-btn">
            Accept All
          </button>
        </div>
      </div>
    )
  );
};

export default ConsentScreen;
