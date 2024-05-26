"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import NavBar from "@/components/global/NavBar";
import Sidebar from "@/components/global/sidebar";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { WagmiProvider } from "wagmi";

import {
  arbitrum,
  avalanche,
  bsc,
  fantom,
  gnosis,
  mainnet,
  optimism,
  polygon,
  sepolia,
  shardeumSphinx,
} from "wagmi/chains";
import { WagmaMetaData } from "@/types";

const inter = Inter({ subsets: ["latin"] });

// 1. Get projectID at https://cloud.walletconnect.com

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

const metadata: Metadata = {
  title: "ChainTube",
  description: "A decentralized live streaming platform",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const metadataWagmi: WagmaMetaData = {
  name: "ChainTube",
  description: "A decentralized live streaming platform",
  url: "https://ChainTube.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, sepolia] as const;

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: metadataWagmi,
});

createWeb3Modal({
  wagmiConfig: wagmiConfig,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

// 0. Setup queryClient
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <html lang="en">
          <body className={inter.className}>
            <ThemeProvider>
              {/* Navbar */}
              <NavBar />
              <div className="flex h-full pt-20 max-w-screen-xl mx-auto">
                {/* Left Sidebar */}
                <Sidebar className="w-72 bg-customPurple-foreground hidden lg:block border-r border-gray-600 p-2 overflow-y-auto" />

                {/* Main Body */}
                <main className="bg-customPurple w-full h-full overflow-y-auto">{children}</main>
              </div>
            </ThemeProvider>
          </body>
        </html>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
