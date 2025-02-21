import React from 'react';
import Sidebar from '../components/Sidebar';
import AdminNavbar from '../components/AdminNavbar';

const Dashboard = () => {
    return (
        <div className="admin-container">
            <Sidebar />
            <div className="admin-content">
                <AdminNavbar />
                <h1>Welcome to Admin Dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;
