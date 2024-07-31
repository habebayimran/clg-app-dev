// src/admin/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [students, setStudents] = useState(0);
  const [classes, setClasses] = useState(0);
  const [events, setEvents] = useState(0);

  useEffect(() => {
    // Simulating API calls with static data
    const fetchData = () => {
      setStudents(120);
      setClasses(25);
      setEvents(8);
    };

    fetchData();
  }, []);

  return (
    <div className="admin-dashboard">
      <nav className="admin-navbar">
        <ul>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/enrollments">Enrollments</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </nav>
      <div className="admin-body">
        <h1>Welcome to Yoga Academy Admin Dashboard</h1>
        <div className="admin-stats">
          <div className="stat-box">
            <h2>{students}</h2>
            <p>Total Students</p>
          </div>
          <div className="stat-box">
            <h2>{classes}</h2>
            <p>Active Classes</p>
          </div>
          <div className="stat-box">
            <h2>{events}</h2>
            <p>Upcoming Events</p>
          </div>
        </div>
        <div className="admin-news">
          <h2>Recent Activities</h2>
          <ul>
            <li>New student enrollment in Hatha Yoga class</li>
            <li>Scheduled Vinyasa Yoga workshop</li>
            <li>Updated instructor availability</li>
          </ul>
        </div>
        <div className="admin-news">
          <h2>Announcements</h2>
          <p>
            Don't miss our upcoming Full Moon Yoga session on August 1st. Join us for a special meditation retreat on August 15th.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
