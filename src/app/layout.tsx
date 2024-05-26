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
      <head>
      <link rel="icon" href="images/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="h-full">
            {/* Navbar */}
            <NavBar />
            <div className="flex max-w-full bg-black">
              {/* Left Sidebar */}
              <Sidebar className="fixed bg-customPurple-foreground py-3 h-full border-r w-60 border-gray-600" />

              {/* Main Body */}
              <main className="p-4 pl-64 flex-1 max-w-screen-2xl h-full mx-auto bg-customPurple mt-16">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
