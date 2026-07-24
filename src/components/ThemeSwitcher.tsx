"use client";

import React from "react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Show a skeleton matching button sizes
    return (
      <div className="h-[42px] w-[42px] rounded-full border border-border-color bg-bg-card shadow-sm" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full border border-border-color bg-bg-card hover:bg-bg-card-hover text-text-primary transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-400 animate-pulse" />
      ) : (
        <Moon className="h-5 w-5 text-indigo-600" />
      )}
    </button>
  );
}
