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
import { NotFound } from "./404/404";
import { BlogDetails } from "./blogDetails/blogDetails";
import { Services } from "./servicesPage/services";
import { ServiceSingle } from "./serviceSingle/serviceSingle";
import { Home } from "./home/home";
import { Blog } from "./blog/blog";
import { Project } from "./project/project";
import { Terms } from "./Allterms/terms";
import { Cookies } from "./Allterms/cookies";
import { Privacy } from "./Allterms/privacy";
import { SmoothScroll } from "./smooth";
import AdminRoutes from "./admin/AdminRoutes";
import { fetchMessage } from "./api/api"; // ✅ Import API function

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
        {/* ✅ Public Routes */}
        <Route path="/" element={<Home message={message} />} /> {/* ✅ Message Prop Pass */}
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
        <Route path="/projects" element={<Project />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies-policy" element={<Cookies />} />
        <Route path="/privacy-policy" element={<Privacy />} />

        {/* ✅ Admin Panel Routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
