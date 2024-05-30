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

export interface ICreateProfile{
    username: string;
    bio: string;
    pfp: string;
}

export interface ITips{
    profileId: string;
    amountInSui: number;
}

export interface IisFollowing{
    Arg0: string;
    Arg1: string;
}

export interface IFollow{
    profileId: string;
    profileCapId: string;
    profileIdFollow: string;
}

export interface IUnfollow{
    profileId: string;
    profileCapId: string;
    profileIdUnFollow: string;
}

export interface IWithdrawTip{
    profileId: string;
    profileCapId: string;
    currentAccount: string;
}

export interface ISetUsername{
    profileId: string;
    profileCapId: string;
    username: string;
}

export interface ISetPfp{
    profileId: string;
    profileCapId: string;
    pfp: string;
}

export interface ISetBio{
    profileId: string;
    profileCapId: string;
    bio: string;
}


export interface ICreateVideo {
    profileCapId: string;
    url: string;
    length: number;
}

export interface ILike {
    videoStatsId: string;
    profileCapId: string;
}
export interface IUnlike {
    videoStatsId: string;
    profileCapId: string;
}
export interface IComment {
    videoStatsId: string;
    profileCapId: string;
    text: string;
}

export interface IDeleteComment {
    videoStatsId: string;
    profileCapId: string;
    commentId: string;
}

