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


async function getVideos(): Promise<Video[]> {
  const result = await fetch("http://localhost:4000/videos");
  return result.json()
}


export default function VideoCard() {
    const [videos, setVideo] = React.useState<any>();

    const fetchAllVideos = React.useCallback(async () => {
      const response = await getVideos();
      setVideo(response);
    }, []);


  React.useEffect(() => {
    fetchAllVideos();
  });

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
