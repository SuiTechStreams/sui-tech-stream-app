"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
// import ReactPlayer from "react-player";
import Comment from "@/components/global/comment";
import { ChainTubeService } from "@/hooks/chainTubeCall";


const chainTubeService = new ChainTubeService();

export default function VideoStream() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleFollow = async () => {
    setIsLoading(true);
    setError('');
    try {
      // await chainTubeService.follow({
      //   Arg0: "user1",
      //   Arg1: "user2",
      //   Arg2: "context",
      // });
      alert('Followed successfully');
    } catch (err) {
      setError('Failed to follow');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubscribe = async () => {
    setIsLoading(true);
    setError('');
    try {
      // await chainTubeService.create_profile({
      //   Arg0: "user",
      //   Arg1: "profile",
      //   Arg2: "info",
      //   Arg3: "additionalInfo",
      // });
      alert('Subscribed successfully');
    } catch (err) {
      setError('Failed to subscribe');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendTip = async () => {
    setIsLoading(true);
    setError('');
    try {
      // await chainTubeService.tip({
      //   Arg0: "user",
      //   Arg1: "amount",
      // });
      alert('Tip sent successfully');
    } catch (err) {
      setError('Failed to send tip');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (error) {
      timer = setTimeout(() => {
        setError('');
      }, 5000); // Clear error after 5 seconds
    }

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  return (
    <div className="flex flex-col items-center mt-10 h-full w-full">
      {/* {error && <div className="text-red-500 border border-red-400 px-4 py-3 rounded shadow-lg">{error}</div>} */}
      {error && (
  <div className="flex w-96 shadow-lg rounded-lg absolute top-24 right-4 z-50">
    <div className="bg-red-600 py-4 px-6 rounded-l-lg flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="fill-current text-white" width="20" height="20"><path fillRule="evenodd" d="M4.47.22A.75.75 0 015 0h6a.75.75 0 01.53.22l4.25 4.25c.141.14.22.331.22.53v6a.75.75 0 01-.22.53l-4.25 4.25A.75.75 0 0111 16H5a.75.75 0 01-.53-.22L.22 11.53A.75.75 0 010 11V5a.75.75 0 01.22-.53L4.47.22zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5H5.31zM8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"></path></svg>
    </div>
    <div className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200 text-black">
      <div>{error}</div>
      <button onClick={() => setError('')} className="focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-700" viewBox="0 0 16 16" width="20" height="20"><path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
      </button>
    </div>
  </div>
)}


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
              <Button className="bg-customPurple-foreground border border-gray-400 text-white px-4 py-2 rounded-md hover:bg-popover"
              onClick={handleFollow}
              disabled={isLoading}
              >
                Follow
              </Button>
              <Button className="bg-customPurple-foreground border border-gray-400 text-white px-4 py-2 rounded-md hover:bg-popover"
              onClick={handleSubscribe}
              disabled={isLoading}
              >
                Subscribe
              </Button>
              <Button className="bg-customPurple-foreground border border-gray-400 text-white px-4 py-2 rounded-md hover:bg-popover"
              onClick={handleSendTip}
              disabled={isLoading}
              >
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
