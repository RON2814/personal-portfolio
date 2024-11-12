import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for user preference
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      return savedMode === "dark";
    }
    // If no preference, use system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-colors duration-300 relative"
      aria-label="Toggle Dark Mode"
    >
      <FaSun
        className={`absolute left-1 text-yellow-500 transition-opacity duration-300 ${
          darkMode ? "opacity-100" : "opacity-0"
        }`}
      />
      <FaMoon
        className={`absolute right-1 text-gray-800 dark:text-yellow-300 transition-opacity duration-300 ${
          darkMode ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          darkMode ? "translate-x-6" : ""
        }`}
      ></div>
    </button>
  );
};

export default ThemeToggle;
