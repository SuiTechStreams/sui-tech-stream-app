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

export type Video = {
  video_image: string;
  title: string;
  time: string;
  id: string | number;
  uploaded_time: string;
  views: string;
  channel_name: string;
  channel_img: string;
  link: string;
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
