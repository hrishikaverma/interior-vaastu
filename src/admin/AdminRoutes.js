import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AdminNavbar from './components/AdminNavbar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Blogs from './pages/AdminBlogs';
import Users from './pages/Users';

const AdminRoutes = () => {
  return (
    <div className="admin-panel">
      <AdminNavbar />
      <div className="admin-content">
        <Sidebar />
        <div className="admin-pages">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminRoutes;
