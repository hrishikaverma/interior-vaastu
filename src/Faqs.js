import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  { question: "What services do you offer?", answer: "We provide interior design consultation, project execution, and renovation services tailored to your needs." },
  { question: "How can I book a consultation?", answer: "You can book a consultation through our website's contact form or by reaching out to our support team." },
  { question: "Do you offer customized designs?", answer: "Yes, we specialize in personalized interior designs that match your preferences and lifestyle." },
  { question: "What is the estimated project duration?", answer: "The timeline varies depending on the project scope, but we provide a detailed schedule after consultation." },
  { question: "Do you provide budget-friendly options?", answer: "Absolutely! We offer a range of designs that fit different budgets while maintaining quality and aesthetics." }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
