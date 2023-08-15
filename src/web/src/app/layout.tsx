import { ClientThemeProvider } from "@/components/ClientThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TailwindIndicator } from "kiso-core/tailwind-indicator";
import { Toaster } from "kiso-core/toast";
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
    <html lang="en">
      <body className={`${inter.className} max-w-full overflow-x-hidden`}>
        <div className="max-w-full overflow-hidden px-20">
          <ClientThemeProvider>{children}</ClientThemeProvider>
          <Toaster />
          <TailwindIndicator />
        </div>
      </body>
    </html>
  );
}
