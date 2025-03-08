import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import AdminRoutes from "./admin/AdminRoutes";
import { fetchMessage } from "./api/api";
import ConsentScreen from "./components/ConsentScreen"; // ✅ Import Consent Screen

function App() {
  const [message, setMessage] = useState("");
  const [isConsentAccepted, setIsConsentAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("userConsent");
    if (consent === "true") {
      setIsConsentAccepted(true);
    }
  }, []);

  useEffect(() => {
    const getMessage = async () => {
      const data = await fetchMessage();
      setMessage(data.message);
    };
    getMessage();
  }, []);

  const handleAccept = () => {
    localStorage.setItem("userConsent", "true");
    setIsConsentAccepted(true);
  };

  return (
    <BrowserRouter>
      {!isConsentAccepted ? (
        <ConsentScreen onAccept={handleAccept} /> // ✅ Show Consent Page First
      ) : (
        <>
          <SmoothScroll />
          <Header />
          <Routes>
            <Route path="/" element={<Home message={message} />} />
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
            <Route path="/admin/*" element={<AdminRoutes />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
