import { Home, LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { MdDashboard, MdUpload } from "react-icons/md";
import { GrChannel } from "react-icons/gr";

export type ROUTES = {
  label: string;
  href: string;
  icon?: IconType | LucideIcon;
};

export const ROUTES: ROUTES[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: MdDashboard,
  },
  {
    label: "My Channel",
    href: "/my-channel",
    icon: GrChannel ,
  },
  {
    label: "Upload",
    href: "/upload",
    icon: MdUpload,
  },
];
