import React from "react";
import { FaTachometerAlt, FaCalendarAlt, FaTasks, FaTable, FaChartBar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Dashboard</h2>
      <nav className="sidebar-nav">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <FaTachometerAlt className="icon" />
          Dashboard
        </Link>
        <Link to="/calendar" className={location.pathname === "/calendar" ? "active" : ""}>
          <FaCalendarAlt className="icon" />
          Calendar
        </Link>
        <Link to="/kanban" className={location.pathname === "/kanban" ? "active" : ""}>
          <FaTasks className="icon" />
          Kanban
        </Link>
        <Link to="/tables" className={location.pathname === "/tables" ? "active" : ""}>
          <FaTable className="icon" />
          Tables
        </Link>
        <Link to="/charts" className={location.pathname === "/charts" ? "active" : ""}>
          <FaChartBar className="icon" />
          Charts
        </Link>
      </nav>
    </div>

    
  );
};

export default Sidebar;
// import React from "react";
// import "../styles/sidebar.css";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2 className="logo">MyApp</h2>
//       <ul className="nav-links">
//         <li><a href="/">Dashboard</a></li>
//         <li><a href="/calendar">Calendar</a></li>
//         <li><a href="/kanban">Kanban</a></li>
//         <li><a href="/settings">Settings</a></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
