// "use client"
// import React, { useState, useEffect } from 'react';
// import ReactPlayer from 'react-player';

// interface Video {
//   id: number;
//   video_image: string;
//   title: string;
//   channel_name: string;
//   time: string;
//   views: string;
//   uploaded_time: string;
//   link: string;
//   channel_img: string;
// }

// // interface VideoStreamProps {
// //   video: Video | null;
// // }

// // const VideoStream: React.FC<VideoStreamProps> = ({ video }) => {
// //   // State for video data
// //   const [loading, setLoading] = useState(true);
// //   const [videoData, setVideoData] = useState<Video | null>(null);

//   // Function to fetch video data
// //   const fetchVideoData = async () => {
// //     try {
// //       const result = await fetch("http://localhost:4000/videos");
// //       const data = await result.json();
// //       setVideoData(data);
// //       setLoading(false);
// //     } catch (error) {
// //       console.error("Error fetching video data:", error);
// //     }
// //   };

// //   // Fetch video data on component mount
// //   useEffect(() => {
// //     fetchVideoData();
// //   }, []);

// //   // Check if video data is still loading
// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// export default function VideoStream(){
//   return (
//     <div className="flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-4">
//       <div className="w-full md:w-1/2">
//         <div className="relative aspect-w-16 aspect-h-9">
//           {/* <ReactPlayer
//             url={videoData?.link || ""}
//             controls={true}
//             width="100%"
//             height="100%"
//             className="absolute top-0 left-0"
//           /> */}
//         </div>
//       </div>
//       <div className="w-full md:w-1/2">
//         <div className="flex flex-col justify-start items-start space-y-4">
//           {/* <h2 className="text-xl font-bold">{videoData?.title}</h2>
//           <p>Uploaded: {videoData?.uploaded_time}</p>
//           <p>Duration: {videoData?.time}</p>
//           <p>Views: {videoData?.views}</p> */}
//           <div className="description-section">
//             {/* Description Section */}
//             <p className="text-sm">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nisi vitae nulla aliquam vulputate.</p>
//           </div>
//           <div className="interactions">
//             {/* Interactive Elements */}
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Follow</button>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Subscribe</button>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Send Tip</button>
//           </div>
//           <div className="comment-section">
//             {/* Comment Section */}
//             <h3 className="text-lg font-bold">Comments</h3>
//             <div className="comment">
//               <p className="text-sm">User1: This is great!</p>
//             </div>
//             <div className="comment">
//               <p className="text-sm">User2: Awesome video!</p>
//             </div>
//             {/* Add your comment form here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
// import ReactPlayer from "react-player";
import Comment from "@/components/global/comment";

export default function VideoStream() {
  return (
    <div className="flex md:flex-col justify-center items-center space-y-8 mt-10">
      <div className="w-3/4">
        <div className="relative aspect-w-16 aspect-h-9">
          {/* <ReactPlayer
            url={""}
            controls={true}
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
          /> */}
          <video controls autoPlay className="w-full"></video>
        </div>
      </div>

      <div className="flex flex-row justify-start space-x-4">
        <h2 className="text-xl font-bold">title</h2>
        <div className="interactions space-x-4">
          {/* Interactive Elements */}
          <Button className="bg-purple-700 text-white px-4 py-2 rounded-md">
            Follow
          </Button>
          <Button className="bg-purple-700 text-white px-4 py-2 rounded-md">
            Subscribe
          </Button>
          <Button className="bg-purple-700 text-white px-4 py-2 rounded-md">
            Send Tip
          </Button>
        </div>
      </div>

      <div className="flex space-x-4">
        <p>Uploaded:__</p>
        <p>Duration:__</p>
        <p>Views:__</p>
      </div>

      <div className="description-section">
        {/* Description Section */}
        <p className="text-sm">
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut eget nisi vitae nulla aliquam vulputate.
        </p>
      </div>

      <div className="comment-section ">
        {/* Comment Section */}
         <Comment/>
      </div>
    </div>
  );
}
