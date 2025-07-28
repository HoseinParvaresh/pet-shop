import Logo from "./Common/Logo";
import DesktopNavbar from "./Navbar/DesktopNavbar";
import HeaderButtons from "./Common/HeaderButtons";
import MobileNavbar from "./Navbar/MobileNavbar/MobileNavbar";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";

export default function Header() {

  const authContext = useContext(AuthContext)
  console.log(authContext);
  
  
  return (
    <div className="w-full px-3 4xs:px-5 lg:px-18 xl:px-27.5 mx-auto py-5 3xs:py-3 lg:py-4 bg-[#242424] lg:bg-secondary">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between max-w-[1536px] mx-auto">
        <Logo />
        <DesktopNavbar />
        <HeaderButtons isLoggedIn={authContext.isLoggedIn} />
      </div>
      {/* Mobile Navbar */}
      <div className="flex items-center justify-between lg:hidden">
        <MobileNavbar />
        <Logo />
        <HeaderButtons />
      </div>
    </div>
  );
}
