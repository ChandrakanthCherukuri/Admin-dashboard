// Main React App structure for Admin Dashboard
import React from "react";
import './styles/dashboard.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/CalendarPage";
import KanbanPage from "./pages/KanbanPage";
import TablesPage from "./pages/TablesPage";
import ChartsPage from "./pages/ChartsPage";
import ThemeSwitcher from "./components/ThemeSwitcher";
import GlobalStyle from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/themes";

const App = () => {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  React.useEffect(() => {
  document.body.className = theme;
}, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Navbar toggleTheme={toggleTheme} />
            <ThemeSwitcher toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/kanban" element={<KanbanPage />} />
              <Route path="/tables" element={<TablesPage />} />
              <Route path="/charts" element={<ChartsPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
