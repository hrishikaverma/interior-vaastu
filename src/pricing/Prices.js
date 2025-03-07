import React, { useState } from "react";
import "./Prices.css";

const Prices = () => {
  const [area, setArea] = useState(100);
  const [serviceType, setServiceType] = useState("Basic Interior Design");

  const pricingData = {
    "Basic Interior Design": 500,
    "Full Home Renovation": 1500,
    "Modular Kitchen": 800,
    "Living Room Makeover": 700,
    "Bedroom Designing": 600,
    "Office Space Setup": 1000,
  };

  const calculatePrice = () => {
    return area * pricingData[serviceType];
  };

  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Dynamic Pricing Calculator</h1>
      <div className="pricing-card">
        <label className="pricing-label">
          Select Service:
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="pricing-select"
          >
            {Object.keys(pricingData).map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </label>

        <label className="pricing-label">
          Enter Area (sq ft):
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="pricing-input"
          />
        </label>

        <div className="pricing-result">
          Estimated Price:
          <span className="pricing-amount">₹{calculatePrice()}</span>
        </div>
      </div>
    </div>
  );
};

export default Prices;
