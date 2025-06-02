import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Contact from "./contact/contact";
import Register from "./register/register";
import Login from "./login/login";
import { Header } from "./headerFooter/header";
import { Footer } from "./headerFooter/footer";
import { RestrictedPage } from "./restrictedPage/restricted";
import { PricingPlan } from "./pricingPlan/pricingPlan";
import { Faq } from "./faq/faq";
import { ProjectDetails } from "./projectDetails/projectDetails";
import { Team } from "./team/team";
import { TeamSingle } from "./teamSingle/teamSingle";
import { About } from "./about/about";
import Prices from "./pricing/Prices";
import { NotFound } from "./404/404";
import { BlogDetails } from "./blogDetails/blogDetails";
import { Services } from "./servicesPage/services";
import { ServiceSingle } from "./serviceSingle/serviceSingle";
import { Home } from "./home/home";
import { Blog } from "./blog/blog";
import Project from './Projects/project';
import { Terms } from "./Allterms/terms";
import { Cookies } from "./Allterms/cookies";
import { Privacy } from "./Allterms/privacy";
import { SmoothScroll } from "./smooth";
import { fetchMessage } from "./api/api";
import Help from "./help";
import Faqs from "./Faqs";
import GetStarted from "./GetStarted";





// ✅ Consent Screen Component
const ConsentScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const consentGiven = localStorage.getItem("userConsent");
    if (consentGiven === "accepted") {
      navigate("/home"); // Already accepted, redirect to Home
    }
  }, [navigate]);

  const handleAccept = () => {
    localStorage.setItem("userConsent", "accepted");
    navigate("/home");
  };

  const handleDecline = () => {
    alert("You must accept the terms to proceed.");
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

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getMessage = async () => {
      const data = await fetchMessage();
      setMessage(data.message);
    };
    getMessage();
  }, []);

  return (
    <BrowserRouter>
      <SmoothScroll />
      <Header />
      <Routes>
        <Route path="/" element={<ConsentScreen />} />
        <Route path="/home" element={<Home message={message} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restricted-page" element={<RestrictedPage />} />
        <Route path="/pricing" element={<PricingPlan />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-single" element={<TeamSingle />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/error" element={<NotFound />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-single" element={<ServiceSingle />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies-policy" element={<Cookies />} />
        <Route path="/Prices" element={<Prices />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/help" element={<Help />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/Getstarted" element={<GetStarted />} />

        
{/* Added Help Page Route */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
