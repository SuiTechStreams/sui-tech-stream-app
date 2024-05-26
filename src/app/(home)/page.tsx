"use client";
/* eslint-disable @next/next/no-img-element */
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import { useState } from "react";
import Image from "next/image";
import AllVideo from "./All";
import Game from "./Gaming";
import Music from "./Music";
import Technology from "./Technology";

export default function HomePage() {

  const [activeTab, setActiveTab] = useState("all");


  return (
    <div className="w-full grid grid-cols-12">
      <section className="col-span-12 md:col-span-8 border-r-2 border-gray-600">
        <div className="flex flex-col gap-6">
          <div className="w-full items-center justify-center m-auto">
            <Image
              src="/images/banner.png"
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
      <section className="col-span-12 md:col-span-4 border-gray-600">
        Right Section
      </section>
    </div>
  );
}
