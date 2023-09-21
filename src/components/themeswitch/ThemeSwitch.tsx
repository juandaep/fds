"use client";
import { classNames } from "@/utils/classNames";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  //Ater mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className={classNames(
        "hidden lg:block h-8 w-8 rounded-lg p-1",
        "focus:ring-4 focus:ring-neutral-300 focus:dark:ring-neutral-600 focus:outline-none"
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
