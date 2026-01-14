import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientNavbar from "@/components/ClientNavbar";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Portfolio - John Doe",
  description: "Senior Frontend Developer specializing in React, Next.js, and modern web technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Blocking script to prevent FOUC and hydration mismatch */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const savedTheme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = savedTheme || (prefersDark ? 'dark' : 'light');
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              }
            })();
          `
        }} />
      </head>
      <body className={`${inter.variable} antialiased bg-light-bg dark:bg-dark-bg text-text-light-primary dark:text-text-dark-primary transition-colors duration-300`}>
        <ThemeProvider>
          <ClientNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
