import React from "react";
import Sidebar from "@/components/global/sidebar";
import NavBar from "@/components/global/navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full">
      {/* Navbar */}
      <NavBar />
      <div className="flex h-full mx-auto">
        {/* Left Sidebar */}
        <Sidebar className="w-[320px] hidden lg:block border border-white" />

        {/* Main Body */}
        <main className="w-full grid grid-cols-12 max-w-screen-xl">
          <section className="col-span-12 md:col-span-9 border border-white">
            {children}
          </section>
          {/* Right content */}
          <section className="col-span-12 md:col-span-3 border border-white">
            Right Section
          </section>
        </main>
      </div>
    </div>
  );
}
