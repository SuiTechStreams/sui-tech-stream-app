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
      <div className="flex h-full  max-w-screen-xl mx-auto">
        {/* Left Sidebar */}
        <Sidebar className="w-[350px] hidden lg:block border border-white" />

        {/* Main Body */}
        <main className="w-full grid grid-cols-12">
          <section className="col-span-12 md:col-span-8 border border-white">
            {children}
          </section>
          {/* Right content */}
          <section className="col-span-12 md:col-span-4 border border-white">
            Right Section
          </section>
        </main>
      </div>
    </div>
  );
}
