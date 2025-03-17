import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ConsentScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const consentGiven = localStorage.getItem("userConsent");
    if (consentGiven === "accepted") {
      navigate("/home"); // If already accepted, redirect to home
    }
  }, [navigate]);

  const handleAccept = () => {
    localStorage.setItem("userConsent", "accepted");
    navigate("/home"); // Navigate to Home Page
  };

  const handleDecline = () => {
    alert("You must accept to continue.");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Consent Required</h2>
        <p className="mb-4">We use cookies and store minimal data for a better experience.</p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={handleAccept} 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Accept
          </button>
          <button 
            onClick={handleDecline} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentScreen;
