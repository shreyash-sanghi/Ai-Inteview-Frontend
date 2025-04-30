import { MainRoutes } from "@/lib/helpers";
import { cn } from "@/lib/utils"; 
import { NavLink } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

interface NavigationRoutesProps {
  isMobile?: boolean;
}

export const NavigationRoutes = ({ isMobile = false }: NavigationRoutesProps) => {
    const { userId } = useAuth();
  return (
    <ul
      className={cn(
        "flex items-center gap-6",
        isMobile && "flex-col items-start gap-8"
      )}
    >
      {MainRoutes.map((route) => (
          <li key={route.href}>
            <NavLink
              to={route.href}
              className={({ isActive }) =>
                cn(
                  "relative font-medium text-gray-400 hover:text-white transition",
                  isActive && "text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-gray-200 after:to-gray-500 after:rounded-full"
                )
              }
            >
              {route.label}
            </NavLink>
          </li>
      ))}

{userId && (
  <li key="/generate">
  <NavLink
     to={"/generate"}
    className={({ isActive }) =>
      cn(
        "relative font-medium text-gray-400 hover:text-white transition",
        isActive && "text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-gray-200 after:to-gray-500 after:rounded-full"
      )
    }
  >
    Take An Interview
  </NavLink>
</li>
)}
    </ul>
  );
};
