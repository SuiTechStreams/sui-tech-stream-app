"use client";
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

type Video = {
  video_image: string;
  title: string;
  time: string;
  id: string;
  uploaded_time: string;
  views: string;
  channel_name: string;
  channel_img: string;
  link: string;
};

async function getVideos(): Promise<Video[]> {
  const result = await fetch("http://localhost:4000/videos");
  return result.json();
}

export default async function VideoCard() {
  const videos = await getVideos();

  const handleImageClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="grid grid-cols-3 gap-2 ">
      {videos.map((video) => (
        <Card
          key={video.id}
          className="flex flex-col justify-between bg-gray-800 m-2"
        >
          <CardHeader className="flex-row items-center">
            <div>
              <div className="relative">
                <a href="#" onClick={() => handleImageClick(video.link)}>
                  <Image
                    src={`/images/${video.video_image}` || "/images/videoImage.jpg"}
                    alt="Notification"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                </a>
                <div className="absolute bottom-0 right-0 bg-black bg-opacity-20 text-white px-2 py-1 rounded">
                  <Badge variant={"secondary"}>{video.time}</Badge>
                </div>
              </div>
              <div className="mt-4">
                <CardTitle className="text-lg font-semibold">
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
              <span className="text-gray-600 text-base">
                {video.channel_name}
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex">
            <CardDescription className="tx-sm">
              {video.views} views . {video.uploaded_time}
            </CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}