import './App.css';
import { Contact } from './contact/contact';
import { Header } from './headerFooter/header';
import { Footer } from './headerFooter/footer';
import { RestrictedPage } from './restrictedPage/restricted';
import { PricingPlan } from './pricingPlan/pricingPlan';
import { Faq } from './faq/faq';
import { ProjectDetails } from './projectDetails/projectDetails';
import { Team } from './team/team';
import { TeamSingle } from './teamSingle/teamSingle';
import { About } from './about/about';
import { NotFound } from './404/404';
import { BlogDetails } from './blogDetails/blogDetails';
import { Services } from './servicesPage/services';
import { ServiceSingle } from './serviceSingle/serviceSingle';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { Project } from './project/project';
import { Terms } from './Allterms/terms';
import { Cookies } from './Allterms/cookies';
import { Privacy } from './Allterms/privacy';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SmoothScroll } from './smooth';

// 🔹 Admin Panel Routes Import
import AdminRoutes from './admin/AdminRoutes';

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <Header />
      <Routes>
        {/* ✅ Public Routes */}
        <Route path="/" element={<Home />} />
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
