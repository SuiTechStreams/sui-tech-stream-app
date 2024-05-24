"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import VideoCard from "./videocard";

export default function TabBar() {
  const [activeTab, setActiveTab] = useState("all");
  const [tabContent, setTabContent] = useState("All Videos");

  const handleTabClick = (content: string, tab: string) => {
    setTabContent(content);
    setActiveTab(tab);
  };

  return (
    <div className="">
      <Tabs value={activeTab}>
        <TabsList className="flex space-x-4 px-4">
          <TabsTrigger
            value="all"
            className="py-2 px-6 text-md border-b-2 border-transparent hover:border-gray-500 focus:outline-none focus-visible:border-blue-500"
            onClick={() => handleTabClick("All Videos", "all")}
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="gaming"
            className="py-2 px-6 text-md border-b-2 border-transparent hover:border-gray-500 focus:outline-none focus-visible:border-blue-500"
            onClick={() => handleTabClick("Gaming Videos", "gaming")}
          >
            Gaming
          </TabsTrigger>
          <TabsTrigger
            value="music"
            className="py-2 px-6 text-md border-b-2 border-transparent hover:border-gray-500 focus:outline-none focus-visible:border-blue-500"
            onClick={() => handleTabClick("Music Videos", "music")}
          >
            Music
          </TabsTrigger>
          <TabsTrigger
            value="technology"
            className="py-2 px-6 text-md border-b-2 border-transparent hover:border-gray-500 focus:outline-none focus-visible:border-blue-500"
            onClick={() => handleTabClick("Technology Videos", "technology")}
          >
            Technology
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {activeTab === "all" && tabContent}
          <VideoCard />
        </TabsContent>
        <TabsContent value="gaming">
          {activeTab === "gaming" && tabContent}
        </TabsContent>
        <TabsContent value="music">
          {activeTab === "music" && tabContent}
        </TabsContent>
        <TabsContent value="technology">
          {activeTab === "technology" && tabContent}
        </TabsContent>
      </Tabs>
    </div>
  );
}
