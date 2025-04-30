import { Container } from "./container";
import { NavigationRoutes } from "./navigation-routes";
import { Link} from "react-router-dom";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";


const Header = () => {
  return (

    <header className="flex items-center justify-between px-8 py-4 bg-black">

    {/* Left side: Logo */}
    <div className="flex items-center space-x-2">
      <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-gray-500 to-gray-200 text-transparent bg-clip-text">
      
      AI Interview
      </Link>
    </div>

    {/* Middle: Nav Links */}
    <nav className="hidden md:flex space-x-8">
    <NavigationRoutes/>
    </nav>
    {/* Right side: Avatar */}
    <div className="flex items-center space-x-2">
    <ProfileContainer />

<ToggleContainer />
    </div>
  </header>
  );
};

export default Header;
