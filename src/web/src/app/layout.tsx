import { ClientThemeProvider } from "@/components/ClientThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TailwindIndicator } from "kiso-core/tailwind-indicator";
import { Toaster } from "kiso-core/toast";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kiso",
  description: "Kiso Component Library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} max-w-full overflow-x-hidden`}>
        <div className="max-w-full overflow-hidden md:px-20 px-4 relative">
          <ClientThemeProvider>
            {children}
            <Navbar />
            <Toaster />
          </ClientThemeProvider>
          <TailwindIndicator />
        </div>
      </body>
    </html>
  );
}
