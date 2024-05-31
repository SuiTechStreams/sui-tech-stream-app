import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Video } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function UploadedVideoCard({ video }: { video: Video }) {
  return (
    <Card className="bg-customLightPurple-dark_foreground dark:bg-customPurple-foreground rounded-lg">
      <CardContent className="p-0">
        <Image
          src={"/images/" + video.video_image}
          alt={video.channel_name}
          width={200}
          height={250}
          className="w-full object-cover rounded-t-lg"
        />
        <div className="flex gap-2 p-2">
          <Avatar className="h-8 w-8 object-cover rounded-full">
            <AvatarImage
              src={"/images/" + video.channel_img || "/images/channel.jpg"}
            />
            <AvatarFallback>{video.channel_name}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2 justify-between">
            <h3 className="text-[0.9rem] font-medium text-white">{video.title}</h3>
            <p className="text-sm text-white">
              {`${video.views} views`} • {video.uploaded_time}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
