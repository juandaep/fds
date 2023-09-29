"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function DynamicBackground({ children }: { children: React.ReactNode }) {
  const router = usePathname();

  useEffect(() => {
    if (router === "/") {
      document.body.classList.add("bg-home");
    } else {
      document.body.classList.add("bg-components");
    }

    return () => {
      if (router === "/") {
        document.body.classList.remove("bg-home");
      } else {
        document.body.classList.remove("bg-components");
      }
    };
  }, [router]);

  return children;
}
