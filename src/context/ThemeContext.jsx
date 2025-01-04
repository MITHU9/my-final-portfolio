import { createContext, useContext, useEffect, useState } from "react";

const ThemeContexts = createContext();

export const useTheme = () => {
  return useContext(ThemeContexts);
};

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
  }, []); // Run only once when the component mounts

  // Toggle Dark Mode and save to localStorage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode); // Save to localStorage
  };

  return (
    <ThemeContexts.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContexts.Provider>
  );
};

export default ThemeProvider;
