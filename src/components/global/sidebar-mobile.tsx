import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/global/sidebar";

type SidebarMobileProps = {
  className?: string;
  side?: "top" | "bottom" | "left" | "right";
};

export default function SidebarMobile({
  className,
  side = "left",
}: SidebarMobileProps) {
  return (
    <Sheet>
      <SheetTrigger asChild className={cn(className)}>
        <Menu role="button" color="white" className="text-customLightPurple-dark_text h-8 w-8 dark:text-white" />
      </SheetTrigger>
      <SheetContent side={side} className="bg-customLightPurple-foreground dark:bg-customPurple-foreground">
        <Sidebar className="mt-6" />
      </SheetContent>
    </Sheet>
  );
}
