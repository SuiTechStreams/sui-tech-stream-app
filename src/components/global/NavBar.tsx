"use client"

import { useState } from "react";
import ToggleTheme from "./toggle-theme"
import { Search, Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="flex flex-col md:flex-row bg-gray-800 w-full border-b md:border-0 items-center justify-between p-2">
            <div className="flex items-center justify-between w-full md:w-auto">
                <form className="flex p-2 bg-gray-700 items-center space-x-2 border rounded-md ml-2 md:ml-10">
                    <Search className="h-5 w-5 flex-none text-gray-300 ml-2 md:ml-4"/>
                    <input className="w-full outline-none appearance-none bg-gray-700 text-gray-500 p-2 sm-auto"
                    type="search"
                    placeholder="Search"
                    />
                </form>
                <button className="text-gray-300 md:hidden ml-4" onClick={() => setIsOpen(!isOpen)}>
                    <Menu className={`w-8 h-8 ${isOpen ? "hidden" : "block"}`} />
                </button>
            </div>
            <div className={`flex-col md:flex-row md:flex md:items-center md:space-x-6 md:mr-10 ${isOpen ? "flex" : "hidden"} w-full md:w-auto`}>
                <button className="self-end text-gray-300 md:hidden mt-2 mr-4" onClick={() => setIsOpen(false)}>
                    <X className="w-8 h-8 mb-4" />
                </button>
                <div className="flex flex-row items-center space-x-6 justify-end">
                    <ToggleTheme/>
                    <Button className="bg-black w-14 h-14 hover:bg-zinc-700 md:mt-0">
                        <Image src="/images/notification.svg" alt="Notification" width={40} height={30}/>
                    </Button>
                    <Button className="bg-black w-14 h-14 hover:bg-zinc-700 md:mt-0">
                        <Image src="/images/user.svg" alt="User" width={50} height={30} />
                    </Button>
                </div>
            </div>
        </nav>
    )
}
