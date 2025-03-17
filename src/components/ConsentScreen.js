import React, { useState, useEffect } from "react";
import "./ConsentScreen.css"; // ✅ Ensure CSS file is linked properly

const ConsentScreen = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("userConsent");
    console.log("Consent Found in Storage:", consent);
    
    if (!consent) {
      console.log("Setting isVisible to TRUE");
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("userConsent", "accepted");
    setIsVisible(false);
    onAccept && onAccept(); // ✅ Callback to parent component
  };

  if (!isVisible) return null; // ✅ Hide if not visible

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
