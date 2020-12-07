import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const setMode = mode => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggle = () => {
    setMode(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, themeToggle];
};