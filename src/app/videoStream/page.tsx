"use client";

import { Button } from "@/components/ui/button";
// import ReactPlayer from "react-player";
import Comment from "@/components/global/comment";

export default function VideoStream() {
  return (
    <div className="flex flex-col items-center mt-10 h-full w-full">
      <div className="w-11/12 lg:w-3/4">
        <div className="relative aspect-w-16 aspect-h-9">
          <video
            controls
            autoPlay
            className="w-full rounded-lg shadow-lg"
          ></video>
        </div>

        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Title</h2>
            <div className="flex space-x-4">
              <Button className="bg-customPurple-foreground border border-gray-400 text-white px-4 py-2 rounded-md hover:bg-popover">
                Follow
              </Button>
              <Button className="bg-customPurple-foreground border border-gray-400 text-white px-4 py-2 rounded-md hover:bg-popover">
                Subscribe
              </Button>
              <Button className="bg-customPurple-foreground border border-gray-400 text-white px-4 py-2 rounded-md hover:bg-popover">
                Send Tip
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4">
            <p className="text-sm">Uploaded: __</p>
            <p className="text-sm">Duration: __</p>
            <p className="text-sm">Views: __</p>
          </div>

          <div className="p-4 rounded-lg mt-6 text-gray-400">
            <p className="text-sm">
              Description: Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Labore quia repellat architecto dolore corporis quos sequi
              maiores necessitatibus provident nobis voluptate fugit est
              expedita beatae iste quidem, modi deserunt. Autem ducimus sed
              praesentium quisquam veritatis!
            </p>
          </div>

          <div className="p-4 rounded-lg mt-6 w-full space-x-2 space-y-4">
            <h3 className="text-lg font-bold mb-2">Comments</h3>
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
}
