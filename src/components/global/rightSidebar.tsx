import { cn } from "@/lib/utils";
import Image from "next/image";

type SidebarProps = {
  className?: string;
};

const channels = [
  { name: "Sui Network", image: "/images/channel_5.jpg" },
  { name: "PC Crypto", image: "/images/channel_1.jpg" },
  { name: "DappRadar", image: "/images/channel_7.jpg" },
];

const uploads = [
  {
    id: 1,
    video_image: "/images/videoImage.jpg",
    title: "Introduction to Move Language",
    uploaded_time: "1 year ago",
  },
  {
    id: 2,
    video_image: "/images/analyzer.png",
    title: "Introduction to Sui-Move analyzer: Development Made Simple",
    uploaded_time: "1 year ago",
  },
  {
    id: 3,
    video_image: "/images/suiObjects.png",
    title: "Intro to Sui Objects | Move on Sui Course 2.1",
    uploaded_time: "1 year ago",
  },
];

export default function RightSideBar({ className }: SidebarProps) {
  return (
    <aside className={cn("h-full", className)}>
      <div className="featured-channels flex flex-col gap-5">
        <h2 className="text-xl text-white">Featured Channels</h2>
        <div className="channels flex flex-col gap-4 text-black">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="channel flex items-center gap-4 justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="channel-img w-10 h-10 rounded-full bg-customPurple overflow-hidden">
                  <Image
                    src={channel.image}
                    alt={channel.name}
                    width={150}
                    height={150}
                  />
                </div>
                <p className="text-white">{channel.name}</p>
              </div>
              <button className="w-7 h-7 bg-white rounded flex items-center justify-center font-semibold">
                +
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="line h-px bg-customPurple"></div>

      <div className="popular-uploads flex flex-col gap-5">
        <h2 className="text-white text-xl">Popular Uploads</h2>
        <div className="uploads-cards text-white flex flex-col gap-4">
          {uploads.map((upload) => (
            <div
              key={upload.id}
              className="card bg-customPurple flex flex-col gap-2 p-2 rounded"
            >
              <div className="img  bg-black overflow-hidden rounded">
                <Image
                  src={upload.video_image}
                  alt={upload.title}
                  className="w-full h-full object-cover"
                  width={128}
                  height={96}
                />
              </div>
              <h3 className="title font-bold">{upload.title}</h3>
              <p className="published text-gray-500">{upload.uploaded_time}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
