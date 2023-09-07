"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={mounted && (theme === "dark" || resolvedTheme === "dark")}
        onChange={() =>
          setTheme(
            theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
          )
        }
      />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeToggle;
