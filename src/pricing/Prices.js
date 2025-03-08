import React, { useState } from "react";
import "./Prices.css";
import { motion } from "framer-motion";

const Price = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  const plans = [
    {
      name: "Basic",
      monthlyPrice: "$19",
      yearlyPrice: "$199",
      features: ["1 Room Design", "Basic Consultation", "Email Support"],
      recommended: false,
    },
    {
      name: "Pro",
      monthlyPrice: "$39",
      yearlyPrice: "$399",
      features: ["3 Room Designs", "Expert Consultation", "Priority Support"],
      recommended: true,
    },
    {
      name: "Premium",
      monthlyPrice: "$69",
      yearlyPrice: "$699",
      features: ["Full House Design", "In-Person Consultation", "24/7 Support"],
      recommended: false,
    },
  ];

  return (
    <div className="pricing-container">
      <h2>Choose Your Plan</h2>
      <div className="toggle-switch">
        <span>Monthly</span>
        <div className="toggle-wrapper" onClick={() => setIsYearly(!isYearly)}>
          <motion.div 
            className="toggle-slider"
            animate={{ x: isYearly ? 30 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </div>
        <span>Yearly</span>
      </div>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <motion.div 
            key={index} 
            className={`pricing-card ${plan.recommended ? "recommended" : ""}`}
            whileHover={{ scale: 1.05 }}
          >
            {plan.recommended && <span className="best-deal">Best Deal</span>}
            <h3>{plan.name}</h3>
            <p className="price">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="cta-button">Get Started</button>
          </motion.div>
        ))}
      </div>
      <div className="extra-sections">
        <div className="testimonials">
          <h3>What Our Customers Say</h3>
          <p>"Amazing interior design service! Highly recommend." - Happy Customer</p>
        </div>
        <div className="faqs">
          <h3>FAQs</h3>
          <p><strong>Q:</strong> Can I upgrade my plan later? <br /><strong>A:</strong> Yes, you can upgrade anytime.</p>
        </div>
        <div className="trust-badges">
          <p>✅ Secure Payment | ✅ Money-back Guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Price;
