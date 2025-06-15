import React from "react";

const ThemeSwitcher = ({ toggleTheme }) => {
  const handleClick = () => {
    document.body.classList.toggle("dark");
    toggleTheme(); // optional if you use styled-components
  };

  return (
    <div className="text-right p-2">
      <button onClick={handleClick} className="theme-toggle-btn">
        Toggle Theme
      </button>
    </div>
  );
};


export default ThemeSwitcher;
