import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaCalendarAlt, FaTasks, FaTable, FaChartBar } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/" },
    { name: "Calendar", icon: <FaCalendarAlt />, path: "/calendar" },
    { name: "Kanban", icon: <FaTasks />, path: "/kanban" },
    { name: "Tables", icon: <FaTable />, path: "/tables" },
    { name: "Charts", icon: <FaChartBar />, path: "/charts" },
  ];

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-blue-800 to-blue-600 text-white fixed">
      <h2 className="text-2xl font-bold text-center py-6">Admin Panel</h2>
      <nav className="flex flex-col gap-2 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-500 ${
              location.pathname === item.path ? "bg-blue-700" : ""
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
