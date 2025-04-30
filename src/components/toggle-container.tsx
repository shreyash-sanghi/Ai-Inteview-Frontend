import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavigationRoutes } from "./navigation-routes";

export const ToggleContainer = () => {
  return (
    <Sheet>
      <SheetTrigger className="block text-white md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent className="bg-gradient-to-r text-white from-black to-gray-800 text-transparent ">
        <SheetHeader>
          <SheetTitle />
        </SheetHeader>

        <nav className="gap-6 flex flex-col items-start">
          <NavigationRoutes isMobile />
        
        </nav>
      </SheetContent>
    </Sheet>
  );
};
