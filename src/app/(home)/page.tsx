"use client";
/* eslint-disable @next/next/no-img-element */
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import { useState, useEffect } from "react";
import Image from "next/image";
import AllVideo from "./All";
import Game from "./Gaming";
import Music from "./Music";
import Technology from "./Technology";
import RightSideBar from "@/components/global/rightSidebar";

export default function HomePage() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    // Function to check if the 'dark' class is present on the html element
    const checkDarkMode = () => {
      const htmlElement = document.documentElement;
      setIsDarkMode(htmlElement.classList.contains('dark'));
    };

    // Initial check
    checkDarkMode();

    // Observe changes to the class attribute on the html element
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div className="w-full grid grid-cols-12">
      <section className="col-span-12 md:col-span-9 border-r-2 border-gray-600">
        <div className="flex flex-col gap-6">
          <div className="w-full items-center justify-center m-auto">
            <Image
              src={isDarkMode ? '/images/banner.svg' : '/images/banner_light.svg'}
              alt="upload Logo"
              width={500}
              height={250}
              className="w-full"
            />
          </div>
          <Tabs value={activeTab}>
            <TabsList className="flex space-x-4 px-4">
              <TabsTrigger
                value="all"
                className="py-2 px-6 text-md border-b-2 border-transparent hover:border-gray-500 focus:outline-none focus-visible:border-blue-500"
                onClick={() => setActiveTab("all")}
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="gaming"
                className="py-2 px-6 text-md border-b-2 border-transparent hover:border-gray-500 focus:outline-none focus-visible:border-blue-500"
                onClick={() => setActiveTab("gaming")}
              >
                Game
              </TabsTrigger>
              <TabsTrigger
                value="music"
                className="py-2 px-6 text-md border-b-2 border-transparent hover:border-gray-500 focus:outline-none focus-visible:border-blue-500"
                onClick={() => setActiveTab("music")}
              >
                Music
              </TabsTrigger>
              <TabsTrigger
                value="technology"
                className="py-2 px-6 text-md border-b-2 border-transparent hover:border-gray-500 focus:outline-none focus-visible:border-blue-500"
                onClick={() => setActiveTab("technology")}
              >
                Technology
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <AllVideo />
            </TabsContent>
            <TabsContent value="gaming">
              <Game />
            </TabsContent>
            <TabsContent value="music">
              <Music />
            </TabsContent>
            <TabsContent value="technology">
              <Technology />
            </TabsContent>
          </Tabs>{" "}
        </div>
      </section>
      {/* Right content */}
      <section className="col-span-12 md:col-span-3 border-gray-600 flex flex-col gap-5 bg-customLightPurple dark:bg-customPurple-foreground p-6">
        <RightSideBar className="flex flex-col gap-6" />
      </section>
    </div>
  );
}
