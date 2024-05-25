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
          <div className="h-full">
            {/* Navbar */}
            <NavBar />
            <div className="flex max-w-full bg-black">
              {/* Left Sidebar */}
              <Sidebar className="fixed bg-gray-900 py-3 h-full border-r w-60 border-gray-600" />

              {/* Main Body */}
              <main className="p-4 pl-64 flex-1 max-w-screen-2xl h-full mx-auto bg-black mt-16">
                {children}
              </main>
            </div>
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
