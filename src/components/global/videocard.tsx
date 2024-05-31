import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Video } from "@/types";
import React from "react";
import { useState, useEffect } from "react";


async function getVideos(): Promise<Video[]> {
  // const result = await fetch("http://localhost:4000/videos");
  // return result.json()
  return [
    {
      "id": 1,
      "video_image": "video_1.jpg",
      "title": "Move Smart Contract Language Tutorial for Aptos & Sui",
      "channel_name": "PC Crypto",
      "time": "6:52",
      "views": "9k",
      "uploaded_time": "1 year ago",
      "link": "https://www.youtube.com/watch?v=dqWVBpvfcRw",
      "channel_img": "channel_1.jpg"
    },
    {
      "id": 2,
      "video_image": "video_2.jpg",
      "title": "Let’s get MOVING | Sui Blockchain",
      "channel_name": "Sui Network",
      "time": "37:11",
      "views": "1.8K",
      "uploaded_time": "1 year ago",
      "link": "https://www.youtube.com/watch?v=b_2jZ4YEfWc",
      "channel_img": "channel_2.jpg"
    },
    {
      "id": 3,
      "video_image": "video_3.jpg",
      "title": "Fast and Reliable Smart Contracts on Sui with Move - Converge22",
      "channel_name": "Circle",
      "time": "47:35",
      "views": "4.1K",
      "uploaded_time": "1 year ago",
      "link": "https://www.youtube.com/watch?v=SjfZraYZ9cE",
      "channel_img": "channel_3.jpg"
    },
    {
      "id": 4,
      "video_image": "video_4.jpg",
      "title": "Evan Cheng Talks Sui Blockchain @ Web Summit 2022",
      "channel_name": "Sui Network",
      "time": "18:22",
      "views": "4.6K",
      "uploaded_time": "1 year ago",
      "link": "https://www.youtube.com/watch?v=lWg66640bYU",
      "channel_img": "channel_2.jpg"
    },
    {
      "id": 5,
      "video_image": "video_5.jpg",
      "title": "Interact with smart contracts using truffle console",
      "channel_name": "Tech Spectrum",
      "time": "18:33",
      "views": "1.1K",
      "uploaded_time": "1 year ago",
      "link": "https://www.youtube.com/watch?v=QXo5t0gxUeI",
      "channel_img": "channel_4.jpg"
    },
    {
      "id": 6,
      "video_image": "video_6.jpg",
      "title": "Introduction to Sui Network and Move",
      "channel_name": "Sui Network",
      "time": "51:55",
      "views": "1.7K",
      "uploaded_time": "11 months ago",
      "link": "http://localhost:4000/videos/6",
      "channel_img": "channel_2.jpg"
    },
    {
      "id": 7,
      "video_image": "video_7.jpg",
      "title": "Is Web3 all Hype? Top 10 Web 3.0 Questions & Answers",
      "channel_name": "Fireship",
      "time": "9:28",
      "views": "919K",
      "uploaded_time": "2 years ago",
      "link": "https://www.youtube.com/watch?v=wHTcrmhskto",
      "channel_img": "channel_5.jpg"
    },
    {
      "id": 8,
      "video_image": "video_8.jpg",
      "title": "What is Web 3.0? - NEXT Generation INTERNET is HERE! | TechBar",
      "channel_name": "TechBar",
      "time": "9:46",
      "views": "476K",
      "uploaded_time": "2 years ago",
      "link": "https://www.youtube.com/watch?v=PyphVdVeP0A",
      "channel_img": "channel_6.jpg"
    },
    {
      "id": 9,
      "video_image": "video_9.jpg",
      "title": "What is a Web3 wallet?",
      "channel_name": "DappRadar",
      "time": "1:42",
      "views": "19K",
      "uploaded_time": "2 years ago",
      "link": "https://www.youtube.com/watch?v=XMnghGaSH4Y",
      "channel_img": "channel_7.jpg"
    },
    {
      "id": 10,
      "video_image": "video_10.jpg",
      "title": "WHAT IS SUI | SUI Network-THE FASTEST GROWING BLOCKCHAIN IN 2024",
      "channel_name": "Crypto Never Sleeps",
      "time": "11:28",
      "views": "1.3K",
      "uploaded_time": "3 months ago",
      "link": "https://www.youtube.com/watch?v=TNFHMLjT1fQ&t=1s",
      "channel_img": "channel_8.jpg"
    }
  ]
}


export default function VideoCard() {
  //   const [videos, setVideo] = React.useState<any>();

  //   const fetchAllVideos = React.useCallback(async () => {
  //     const response = await getVideos();
  //     setVideo(response);
  //   }, []);


  // React.useEffect(() => {
  //   fetchAllVideos();
  // });

  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await getVideos();
      setVideos(response);
    };
    fetchVideos();
  }, []);


  return (
    <div className="grid grid-cols-3 gap-2 ">
      {videos && videos.map((video: any) => (
        <Card
          key={video.id}
          className="flex flex-col justify-between bg-customLightPurple-dark_foreground dark:bg-customPurple-foreground m-2"
        >
          <CardHeader className="flex-row items-center">
            <div className="relative">
              <div className="relative">
                <Link href={`/videoStream?videoId=${video.link.split('v=')[1]}`} target="_blank">
                  <Image
                    src={
                      `/images/${video.video_image}` || "/images/videoImage.jpg"
                    }
                    alt="Notification"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                </Link>
                <div className="absolute bottom-0 right-0 bg-black bg-opacity-20 text-white px-2 py-1 rounded">
                  <Badge variant={"secondary"}>{video.time}</Badge>
                </div>
              </div>
              <div className="mt-4">
                <CardTitle className=" text-white dark:text-customLightPurple-dark_text text-md font-semibold">
                  {video.title}
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 items-center">
              <Avatar>
                <AvatarImage
                  src={`/images/${video.channel_img}` || "/images/channel.jpg"}
                />
                <AvatarFallback>img</AvatarFallback>
              </Avatar>
              <span className="text-pink-200 dark:text-gray-600 text-base">
                {video.channel_name}
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex text-gray-100 dark:dark:text-gray-500">
            <CardDescription className="tx-sm text-gray-300 dark:dark:text-gray-500">
              {video.views} views . {video.uploaded_time}
            </CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
