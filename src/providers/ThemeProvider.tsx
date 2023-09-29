"use client";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Provider({ children }: { children: React.ReactNode }) {
  const router = usePathname();

  useEffect(() => {
    if (router === "/") {
      document.body.classList.add("bg-home-light", "dark:bg-home-dark");
    } else {
      document.body.classList.add(
        "bg-components-light",
        "dark:bg-components-dark"
      );
    }

    return () => {
      if (router === "/") {
        document.body.classList.remove("bg-home-light", "dark:bg-home-dark");
      } else {
        document.body.classList.remove(
          "bg-components-light",
          "dark:bg-components-dark"
        );
      }
    };
  }, [router]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
