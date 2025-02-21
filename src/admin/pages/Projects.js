import React from 'react';
import Sidebar from '../components/Sidebar';
import AdminNavbar from '../components/AdminNavbar';

const Projects = () => {
    return (
        <div className="admin-container">
            <Sidebar />
            <div className="admin-content">
                <AdminNavbar />
                <h1>Manage Projects</h1>
            </div>
        </div>
    );
};

export default Projects;
