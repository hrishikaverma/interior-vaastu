import React, { useState, useEffect } from "react";
import "./ConsentScreen.css";

const ConsentScreen = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookieConsent");
    console.log("Consent Found in Storage:", consentGiven);

    if (!consentGiven) {
      console.log("Setting isVisible to TRUE");
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    console.log("Consent Accepted");
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
    if (onAccept) onAccept();
  };

  console.log("isVisible State:", isVisible); // Debugging ke liye
  console.log("Consent Found in Storage:");
console.log("Setting isVisible to TRUE");



  if (!isVisible) return null;

  return (
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
  );
};

export default ConsentScreen;
