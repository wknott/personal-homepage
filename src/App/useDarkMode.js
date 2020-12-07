import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const setMode = mode => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggle = () => {
    setMode(theme === "light" ? "dark" : "light");
  };

  return [theme, themeToggle];
};