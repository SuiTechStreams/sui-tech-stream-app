import { ROUTES } from "@/routes";
import { cn } from "@/lib/utils";

import NavItem from "@/components/global/nav-item";

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={cn("h-full", className)}>
      {ROUTES.map((route, i) => (
        <NavItem
          key={i}
          href={route.href}
          className="flex justify-start gap-4 items-center"
        >
          {route.icon && <route.icon size={"1.1rem"} />}
          <strong>{route.label}</strong>
        </NavItem>
      ))}
    </aside>
  );
}
