import { useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const setMode = mode => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    setMode(theme === "light" ? "dark" : "light");
  };

  return [theme, toggleTheme];
};