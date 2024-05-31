"use client";

import { UploadToStorage } from "@/components/global/Upload";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function StreamDetails() {

  return (
    <div className="w-full p-0 ">
      <h1 className="p-0 font-bold text-3xl">Stream Details</h1>

      <div className=" w-full grid grid-cols-2 mt-10">
        <div className="bg-customLightPurple dark:bg-customPurple-foreground p-6 m-5 rounded-md">
          <h1 className="font-bold text-2xl text-customLightPurple-dark_text dark:text-white">
            Edit Live Stream Title and Thumbnail
          </h1>
          <UploadToStorage
            className="bg-white rounded-3xl mt-4 mb-4 pl-20 pr-20"
            updateLink={() => {}}
          />
          <Button className="bg-customLightPurple-dark_foreground dark:bg-black h-10 p-2  hover:bg-zinc-800 md:mt-0 text-white rounded-xl text-lg border border-gray-100 ">
            Edit thumbnail & title
          </Button>
        </div>

        <div className="bg-customLightPurple dark:bg-customPurple-foreground h-2/4 m-5 rounded-md">
          <h1 className="p-5 font-bold text-xl text-customLightPurple-dark_text dark:text-white">Stream Details</h1>

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="bg-customLightPurple border-b dark:bg-customPurple-foreground dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Server{" "}
                </th>
                <td className="px-6 py-4">rtmp://rtmp.livepeer.com/live</td>
              </tr>
              <tr className="bg-customLightPurple border-b dark:bg-customPurple-foreground dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Streamy Key{" "}
                </th>
                <td className="px-6 py-4">White</td>
              </tr>
              <tr className="bg-customLightPurple dark:bg-customPurple-foreground">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Streamy Url{" "}
                </th>
                <td className="px-6 py-4">Black</td>
              </tr>
              <tr className="bg-customLightPurple dark:bg-customPurple-foreground">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Last Seen{" "}
                </th>
                <td className="px-6 py-4">Unavailable</td>
              </tr>
              <tr className="bg-customLightPurple dark:bg-customPurple-foreground">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Status{" "}
                </th>
                <td className="px-6 py-4">Idle</td>
              </tr>
              <tr className="bg-customLightPurple dark:bg-customPurple-foreground">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Only subscribers mode{" "}
                </th>
                <td className="px-6 py-4">OFF</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
