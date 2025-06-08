import React from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Navbar;
