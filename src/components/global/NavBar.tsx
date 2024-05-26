"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Wallet from "../ui/wallets";
import { AuthService } from "@/hooks/authService";
import { SuiService } from "@/hooks/suiService";
import { FcGoogle } from "react-icons/fc";
import SearchBar from "./searchbar";
import SidebarMobile from "./sidebar-mobile";

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
  const suiService = useMemo(() => new SuiService(), []);

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
  }, [suiService]);

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
    <nav className="flex bg-gray-800 w-full border-b md:border-0 items-center justify-between p-0 fixed z-[40]">
      <menu className="ml-3 lg:hidden">
        <SidebarMobile className="z-[999]" />
      </menu>
      <div className="w-full flex justify-between items-center gap-4 px-4">
        <div className="flex p-2">
          <Image
            src="/images/sui-stream.svg"
            alt="User"
            width={35}
            height={25}
          />
          <h1 className="font-display font-bold text-2xl text-center p-4">
            Sui Stream
          </h1>
        </div>

        <div role="searchbox" className="hidden lg:block">
          <SearchBar />
        </div>

        <div className="flex items-center gap-4">
          <Button
            asChild
            size={"icon"}
            className="bg-black w-10 h-10 p-3 hover:bg-zinc-700 md:mt-0"
          >
            <Image
              src="/images/notification.svg"
              alt="Notification"
              width={30}
              height={20}
            />
          </Button>
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
              className="rounded-pill px-2 mt-0 flex items-center gap-1"
            >
              <FcGoogle size={"1.3rem"} />
              <span>Login </span>
            </Button>
          )}
          </div>
        </div>
    </nav>
  );
}