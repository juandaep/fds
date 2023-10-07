"use client";
import { useThemeMounted } from "@/hooks/useThemeMounted";
import { classNames } from "@/utils/classNames";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useThemeMounted();

  return (
    <div
      className={classNames(
        "flex items-center justify-between px-2 py-4 text-base -tracking-base",
        "lg:hidden",
      )}
    >
      <span>Switch Theme</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={mounted && (theme === "dark" || resolvedTheme === "dark")}
          onChange={() =>
            setTheme(
              theme === "dark" || resolvedTheme === "dark" ? "light" : "dark",
            )
          }
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
