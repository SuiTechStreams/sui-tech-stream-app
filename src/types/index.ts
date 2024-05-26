// Types goes here// Types goes here

import { SiweMessage } from "siwe";

export type IWallet = {
  address: string;
  amount: string;
  symbol: string;
  destroy: () => void
}

export type SidebarProps = {
  className?: string;
};


export interface WagmaMetaData {
    name: string;
    description: string;
    url: string;
    icons: string[];
}

export interface Imessage {
  message: SiweMessage;
  signature: `0x${string}`;
}

