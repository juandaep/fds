"use client";
import { classNames } from "@/utils/classNames";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div
      className={classNames(
        "flex justify-between items-center px-2 py-4 text-base",
        "lg:hidden"
      )}
    >
      <span>Switch Theme</span>
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
    </div>
  );
};

export default ThemeToggle;
