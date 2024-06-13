import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/partials/navbar";
import Main from "@/components/partials/main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "W3Jobs - Find & Post Software Engineering Jobs",
  description: "W3Jobs is your one-stop shop for finding and posting software engineering jobs. Search our database of open positions, connect with top companies, and find your dream career in tech.",
  keywords: ["software engineering jobs", "tech jobs", "developer jobs", "programming jobs", "job search", "job board"],
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Main>
            {children}
          </Main>
        </ThemeProvider>
      </body>
    </html>
  );
}
