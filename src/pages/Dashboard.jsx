import React from "react";
import "../styles/dashboard.css"; // Updated path if CSS is moved

const Dashboard = () => {
  const stats = [
    { title: "Total Users", value: 1240 },
    { title: "Active Projects", value: 38 },
    { title: "Pending Tasks", value: 76 },
    { title: "Revenue (₹)", value: "1.2L" },
  ];

  return (
    <div className="dashboard">
      <h1>Welcome to the Admin Dashboard</h1>
      <div className="dashboard-stats">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
