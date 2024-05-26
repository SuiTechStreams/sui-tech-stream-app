"use client";

import { useCallback, useEffect, useState } from "react";
import ToggleTheme from "./toggle-theme";
import { Search, Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Wallet from "../ui/wallets";
import { AuthService } from "@/hooks/authService";
import { SuiService } from "@/hooks/suiService";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [balance, setBalance] = useState("0");
  useEffect(() => {
    const handleCallback = async () => {
      try {
        const params = new URLSearchParams(window.location.hash.substr(1));
        const jwtToken = params.get("id_token");
        console.log("jwtToken", jwtToken);

        sessionStorage.setItem("sui_jwt_token", jwtToken || "");
        //window.location.href = "/notes";
      } catch (error) {
        console.error("Error handling callback:", error);
      }
    };

    handleCallback();
  }, []);

  const authService = new AuthService();

  let walletAddress;
  const suiService = new SuiService();

  const getBalance = useCallback(async () => {
    try {
      if (AuthService.isAuthenticated()) {
        setBalance(
          await suiService.getFormattedBalance(AuthService.walletAddress())
        );
      }
    } catch (error) {
      console.log({ error });
    } finally {
    }
  }, []);

  const logout = async () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  if (AuthService.isAuthenticated()) {
    walletAddress = AuthService.walletAddress();
  }

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  return (
    <nav className="flex flex-col md:flex-row bg-customPurple-foreground w-full border-b md:border-0 items-center justify-between p-0 fixed z-10">
      <div className="flex p-2 items-center">
        <Image src="/images/sui_tech_stream.svg" alt="User" width={70} height={70} />
        <h1 className="font-display font-bold text-2xl text-center p-4">
          Name
        </h1>
      </div>

      <div className="flex justify-between w-5/6">
        <div className="flex items-center w-full md:w-auto">
          <form className="flex p-1 bg-customPurple items-center space-x-2 border rounded-md ml-2 md:ml-10">
            <Search className="h-5 w-5 flex-none text-gray-300 ml-2 md:ml-4" />
            <input
              className="w-full outline-none appearance-none bg-customPurple text-gray-500 p-2 sm-auto"
              type="search"
              placeholder="Search"
            />
          </form>
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
            <Button
              size={"icon"}
              className="bg-black w-10 h-10 p-3 border border-gray-100 hover:bg-zinc-700 md:mt-0"
            >
              <Image
                src="/images/notification.svg"
                alt="Notification"
                width={30}
                height={20}
              />
            </Button>
            <w3m-button />
            {AuthService.isAuthenticated() ? (
              <Wallet
                address={walletAddress || ""}
                amount={balance}
                symbol="SUI"
                destroy={logout}
              />
            ) : (
              <Button
                onClick={() => authService.login()}
                className="rounded-pill px-2 mt-0"
              >
                Login with Google
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}