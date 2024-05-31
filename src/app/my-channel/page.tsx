import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Video } from "@/types";
import UploadedVideoCard from "@/components/global/uploaded-video-card";

async function getVideos(): Promise<Video[]> {
  // const result = await fetch("http://localhost:4000/videos");
  return [
    {
      id: 1,
      video_image: "video_1.jpg",
      title: "Move Smart Contract Language Tutorial for Aptos & Sui",
      channel_name: "PC Crypto",
      time: "6:52",
      views: "9k",
      uploaded_time: "1 year ago",
      link: "https://www.youtube.com/watch?v=dqWVBpvfcRw",
      channel_img: "channel_1.jpg",
    },
    {
      id: 2,
      video_image: "video_2.jpg",
      title: "Let’s get MOVING | Sui Blockchain",
      channel_name: "Sui Network",
      time: "37:11",
      views: "1.8K",
      uploaded_time: "1 year ago",
      link: "https://www.youtube.com/watch?v=b_2jZ4YEfWc",
      channel_img: "channel_2.jpg",
    },
    {
      id: 3,
      video_image: "video_3.jpg",
      title: "Fast and Reliable Smart Contracts on Sui with Move - Converge22",
      channel_name: "Circle",
      time: "47:35",
      views: "4.1K",
      uploaded_time: "1 year ago",
      link: "https://www.youtube.com/watch?v=SjfZraYZ9cE",
      channel_img: "channel_3.jpg",
    },
    {
      id: 4,
      video_image: "video_4.jpg",
      title: "Evan Cheng Talks Sui Blockchain @ Web Summit 2022",
      channel_name: "Sui Network",
      time: "18:22",
      views: "4.6K",
      uploaded_time: "1 year ago",
      link: "https://www.youtube.com/watch?v=lWg66640bYU",
      channel_img: "channel_2.jpg",
    },
    {
      id: 5,
      video_image: "video_5.jpg",
      title: "Interact with smart contracts using truffle console",
      channel_name: "Tech Spectrum",
      time: "18:33",
      views: "1.1K",
      uploaded_time: "1 year ago",
      link: "https://www.youtube.com/watch?v=QXo5t0gxUeI",
      channel_img: "channel_4.jpg",
    },
    {
      id: 6,
      video_image: "video_6.jpg",
      title: "Introduction to Sui Network and Move",
      channel_name: "Sui Network",
      time: "51:55",
      views: "1.7K",
      uploaded_time: "11 months ago",
      link: "http://localhost:4000/videos/6",
      channel_img: "channel_2.jpg",
    },
    {
      id: 7,
      video_image: "video_7.jpg",
      title: "Is Web3 all Hype? Top 10 Web 3.0 Questions & Answers",
      channel_name: "Fireship",
      time: "9:28",
      views: "919K",
      uploaded_time: "2 years ago",
      link: "https://www.youtube.com/watch?v=wHTcrmhskto",
      channel_img: "channel_5.jpg",
    },
    {
      id: 8,
      video_image: "video_8.jpg",
      title: "What is Web 3.0? - NEXT Generation INTERNET is HERE! | TechBar",
      channel_name: "TechBar",
      time: "9:46",
      views: "476K",
      uploaded_time: "2 years ago",
      link: "https://www.youtube.com/watch?v=PyphVdVeP0A",
      channel_img: "channel_6.jpg",
    },
    {
      id: 9,
      video_image: "video_9.jpg",
      title: "What is a Web3 wallet?",
      channel_name: "DappRadar",
      time: "1:42",
      views: "19K",
      uploaded_time: "2 years ago",
      link: "https://www.youtube.com/watch?v=XMnghGaSH4Y",
      channel_img: "channel_7.jpg",
    },
    {
      id: 10,
      video_image: "video_10.jpg",
      title: "WHAT IS SUI | SUI Network-THE FASTEST GROWING BLOCKCHAIN IN 2024",
      channel_name: "Crypto Never Sleeps",
      time: "11:28",
      views: "1.3K",
      uploaded_time: "3 months ago",
      link: "https://www.youtube.com/watch?v=TNFHMLjT1fQ&t=1s",
      channel_img: "channel_8.jpg",
    },
  ];
}

export default async function MyChannelPage() {
  const videos = await getVideos();
  return (
    <div className="h-full w-full grid place-items-center py-8">
      <div className="w-[90%] rounded-xl border border-gray-300 p-4 bg-customLightPurple dark:bg-transparent">
        <div className="flex gap-4 items-center">
          <Avatar className="h-24 w-24 object-cover rounded-full">
            <AvatarImage src={"/images/channel.jpg"} />
            <AvatarFallback>img</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-medium text-2xl text-customLightPurple-dark_text dark:text-white">Sriharsha</h2>
            <div className="flex items-center gap-2 text-customLightPurple-dark_text dark:text-white">
              <p>10 Followers</p>|<p>50 Subscribers</p>
            </div>
          </div>
        </div>

        <hr className="border border-gray-400 w-full my-4" />

        {/* About */}
        <div className="bg-customLightPurple-foreground dark:bg-customPurple-foreground rounded-xl p-4 space-y-2 my-8">
          <h4 className="text-2xl font-semibold">About</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            voluptatem eius, perferendis iusto nulla libero fuga. Cupiditate
            nostrum incidunt dolor, qui doloremque inventore aut ex.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto mt-8">
          {videos.slice(0, 5).map((video) => (
            <UploadedVideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}
