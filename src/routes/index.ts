import { Home, LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { MdDashboard, MdUpload, MdCurrencyExchange } from "react-icons/md";

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
    label: "Upload",
    href: "/upload",
    icon: MdUpload,
  },
  {
    label: "Wormhole Bridge",
    href: "/bridge",
    icon: MdCurrencyExchange,
  },
];
