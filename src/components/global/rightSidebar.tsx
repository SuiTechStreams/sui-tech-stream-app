import { cn } from "@/lib/utils";
import Image from "next/image";

type SidebarProps = {
  className?: string;
};

const channels = [
  { name: "Channel one", image: "/images/channel_1.jpg" },
  { name: "Channel two", image: "/images/channel_2.jpg" },
  { name: "Channel three", image: "/images/channel_3.jpg" },
];

const uploads = [
  { id: 1, video_image: "/images/video_1.jpg", title: "Move Smart Contract Language Tutorial for Aptos & Sui", uploaded_time: "1 year ago" },
  { id: 2, video_image: "/images/video_2.jpg", title: "Let’s get MOVING | Sui Blockchain", uploaded_time: "1 year ago" },
  { id: 3, video_image: "/images/video_3.jpg", title: "Fast and Reliable Smart Contracts on Sui with Move - Converge22", uploaded_time: "1 year ago" },
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
                <div className="channel-img w-8 h-8 rounded-full bg-customPurple overflow-hidden">
                  <Image
                    src={channel.image}
                    alt={channel.name}
                    width={150}
                    height={150}
                  />
                </div>
                <p className="text-white">{channel.name}</p>
              </div>
              <button className="w-5 h-5 bg-white rounded flex items-center justify-center font-semibold">
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
