import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Kanban from "./pages/Kanban";
import Charts from "./pages/Charts";
import Tables from "./pages/Tables";

function App() {
  return (
    <div className="flex bg-gray-100 dark:bg-gray-800 min-h-screen">
      <Sidebar />
      <div className="ml-64 w-full">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/tables" element={<Tables />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
