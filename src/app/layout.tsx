import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import NavBar from "@/components/global/NavBar";
import Sidebar from "@/components/global/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sui Streams",
  description: "A decentralized live streaming platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {/* Navbar */}
          <NavBar />
          <div className="flex h-full pt-20 max-w-screen-xl mx-auto">
            {/* Left Sidebar */}
            <Sidebar className="w-72 bg-customPurple-foreground hidden lg:block border-r border-gray-600 p-2 overflow-y-auto" />

            {/* Main Body */}
            <main className="bg-customPurple w-full h-full overflow-y-auto">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
