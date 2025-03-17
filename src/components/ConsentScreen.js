import React, { useEffect, useState } from "react";
import "./ConsentScreen.css";

const ConsentScreen = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(false); // Default false

  useEffect(() => {
    const consent = localStorage.getItem("userConsent");
    console.log("Consent Found in Storage:", consent);

    if (consent !== "true") {
      setIsVisible(true); // Only show if not accepted
      console.log("Setting isVisible to TRUE");
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("userConsent", "true");
    setIsVisible(false);
    console.log("Consent Accepted & Stored:", localStorage.getItem("userConsent"));
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
