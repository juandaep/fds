import { NavbarProvider } from "@/components/navbar/NavbarProvider";
import { Provider } from "@/components/themeswitch/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "../style/globals.css";

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
            <main>{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
