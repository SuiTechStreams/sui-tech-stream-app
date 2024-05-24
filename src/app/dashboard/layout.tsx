import React from "react";
import Sidebar from "@/components/global/sidebar";
import NavBar from "@/components/global/NavBar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      {/* Navbar */}
      <NavBar />
      <div className="flex h-full max-w-full">
        {/* Left Sidebar */}
        <Sidebar className="fixed bg-gray-900 py-3 h-full border-r w-60 border-gray-600" />

        {/* Main Body */}
        <main className="p-4 pl-64 flex-1 max-w-screen-2xl h-full mx-auto mt-20">
          {children}
        </main>
      </div>
    </div>
  );
}
