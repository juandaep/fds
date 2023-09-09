import { Provider } from "@/components/themeswitch/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "../style/globals.css";
import { NavbarProvider } from "@/components/navbar/NavbarProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flux Design Systems",
  description: "This web is only for preview the components",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="relative flex flex-col">
            <NavbarProvider />
            <main className="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
