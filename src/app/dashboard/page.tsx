"use client";

import TabBar from "@/components/global/tabbar";
import VideoCard from "@/components/global/videocard";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StreamDetails from "./stream-details";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("stream details");
  const [tabContent, setTabContent] = useState("Stream details");

  const handleTabClick = (content: string, tab: string) => {
    setTabContent(content);
    setActiveTab(tab);
  };

  return (
    <div className="w-full p-5">
      <h1 className="p-5 font-bold text-3xl">Dashboard</h1>
      <Tabs value={activeTab}>
        <TabsList className="flex space-x-4 px-4 py-6 bg-customPurple-foreground rounded-2xl">
          <TabsTrigger
            value="stream details"
            className="py-2 px-6 text-md border-b-2 border-transparent bg-black hover:border-gray-500 focus:outline-none focus-visible:border-blue-500 text-white"
            onClick={() => handleTabClick("Stream details", "stream details")}
          >
            Stream details
          </TabsTrigger>
          <TabsTrigger
            value="sessions"
            className="py-2 px-6 text-md border-b-2 border-transparent bg-black hover:border-gray-500 focus:outline-none focus-visible:border-blue-500 text-white"
            onClick={() => handleTabClick("Sessions", "sessions")}
          >
            Sessions
          </TabsTrigger>
          <TabsTrigger
            value="published videos"
            className="py-2 px-6 text-md border-b-2 border-transparent bg-black hover:border-gray-500 focus:outline-none focus-visible:border-blue-500 text-white"
            onClick={() =>
              handleTabClick("Published videos", "published videos")
            }
          >
            Published videos
          </TabsTrigger>
          <TabsTrigger
            value="subscription"
            className="py-2 px-6 text-md border-b-2 border-transparent bg-black hover:border-gray-500 focus:outline-none focus-visible:border-blue-500 text-white"
            onClick={() => handleTabClick("Subscription", "subscription")}
          >
            Subscription
          </TabsTrigger>
        </TabsList>
        <TabsContent value="stream details">
          <StreamDetails />
        </TabsContent>
        <TabsContent value="sessions">
          {activeTab === "sessions" && tabContent}
        </TabsContent>
        <TabsContent value="published videos">
          {activeTab === "published videos" && tabContent}
        </TabsContent>
        <TabsContent value="subscription">
          {activeTab === "subscription" && tabContent}
        </TabsContent>
      </Tabs>
    </div>
  );
}
