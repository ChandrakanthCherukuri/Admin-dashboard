import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ toggleTheme }) => {
  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 shadow rounded-lg mb-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Admin Dashboard</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          title="Toggle Theme"
        >
          <FaSun className="hidden dark:inline" />
          <FaMoon className="inline dark:hidden" />
        </button>
        <div className="w-8 h-8 bg-gray-400 dark:bg-gray-600 rounded-full" title="User Avatar" />
      </div>
    </header>
  );
};

export default Navbar;
