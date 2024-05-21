"use client";

import { useState } from "react";
import ToggleTheme from "./toggle-theme";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import SearchBar from "./searchbar";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex flex-col md:flex-row bg-gray-800 w-full border-b md:border-0 items-center justify-between p-2">
      <div className="flex items-center justify-between w-full md:w-auto">
        <SearchBar />
        <button
          className="text-gray-300 md:hidden ml-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className={`w-8 h-8 ${isOpen ? "hidden" : "block"}`} />
        </button>
      </div>
      <div
        className={`flex-col md:flex-row md:flex md:items-center md:space-x-6 md:mr-10 ${
          isOpen ? "flex" : "hidden"
        } w-full md:w-auto`}
      >
        <button
          className="self-end text-gray-300 md:hidden mt-2 mr-4"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-8 h-8 mb-4" />
        </button>
        <div className="flex flex-row items-center space-x-6 justify-end">
          <ToggleTheme />
          <Button className="bg-black w-14 h-14 hover:bg-zinc-700 md:mt-0">
            <Image
              src="/images/notification.svg"
              alt="Notification"
              width={40}
              height={30}
            />
          </Button>
          <Button className="bg-black w-14 h-14 hover:bg-zinc-700 md:mt-0">
            <Image src="/images/user.svg" alt="User" width={50} height={30} />
          </Button>
        </div>
      </div>
    </nav>
  );
}
