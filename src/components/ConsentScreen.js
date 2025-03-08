import React from "react";
import "./ConsentScreen.css"; // ✅ Add CSS for Styling (Create this file separately)

const ConsentScreen = ({ onAccept }) => {
  return (
    <div className="consent-container">
      <div className="consent-box">
        <h2>We Value Your Privacy</h2>
        <p>
          This website uses cookies and other tracking technologies to improve
          your browsing experience. By clicking "Accept All," you agree to our
          terms and policies.
        </p>
        <button onClick={onAccept} className="accept-btn">
          Accept All
        </button>
      </div>
    </div>
  );
};

export default ConsentScreen;
