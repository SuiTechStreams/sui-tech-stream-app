"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useMemo } from "react";

import { cn } from "@/lib/utils";

type NavItemProps = {
  children?: ReactNode;
  href: string;
  className?: string;
};

export default function NavItem({ href, children, className }: NavItemProps) {
  const pathname = usePathname();
  const isActive = useMemo(
    () => pathname === href.toLowerCase(),
    [href, pathname]
  );

  return (
    <Link href={href}>
      <nav
        className={cn(
          "w-full p-2 my-1 rounded-md flex items-center justify-center gap-2",
          isActive && "bg-primary text-black",
          className
        )}
      >
        {children}
      </nav>
    </Link>
  );
}
