"use client";
import { DynamicBackground } from "@/components/DynamicBackground";
import { ThemeProvider } from "next-themes";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <DynamicBackground>{children}</DynamicBackground>
    </ThemeProvider>
  );
}
