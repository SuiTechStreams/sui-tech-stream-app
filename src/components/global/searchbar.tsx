import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

type SearchBarProps = {
  className?: string;
};

export default function SearchBar({ className }: SearchBarProps) {
  return (
    <form
      className={cn(
        "w-full lg:w-[400px] flex p-2 dark:bg-gray-700 items-center space-x-2 border rounded-md ml-2 md:ml-10",
        className
      )}
    >
      <Search className="h-5 w-5 flex-none dark:text-gray-300 ml-2 md:ml-4" />
      <input
        className="w-full outline-none appearance-none text-customLightPurple-dark_text dark:bg-gray-700 dark:text-gray-500 p-2 sm-auto"
        type="search"
        placeholder="Search"
      />
    </form>
  );
}
