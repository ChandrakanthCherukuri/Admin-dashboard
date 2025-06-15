// src/layouts/AppLayout.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
