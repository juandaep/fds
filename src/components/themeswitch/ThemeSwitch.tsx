"use client";
import { useThemeMounted } from "@/app/hooks/useThemeMounted";
import { classNames } from "@/utils/classNames";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useThemeMounted();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className={classNames(
        "hidden lg:block h-8 w-8 rounded-lg p-1",
        "focus:ring-4 focus:ring-default-200 focus:dark:ring-default-800 focus:outline-none"
      )}
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
        )
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-primary-500 dark:text-amber-400"
      >
        {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
          <SunIcon />
        ) : (
          <MoonIcon />
        )}
      </svg>
    </button>
  );
};

export default ThemeSwitch;
