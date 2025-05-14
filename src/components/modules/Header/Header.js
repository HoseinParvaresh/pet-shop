import Logo from "./Common/Logo";
import DesktopNavbar from "./Navbar/DesktopNavbar";
import HeaderButtons from "./Common/HeaderButtons";
import MobileNavbar from "./Navbar/MobileNavbar";

export default function Header() {
  return (
    <div className="w-full px-5 lg:px-27.5 mx-auto py-5 3xs:py-3 lg:py-4 bg-[#242424] lg:bg-secondary">
      {/* Desktop Navbar */}
      <div className="items-center hidden justify-between lg:flex max-w-[1536px] mx-auto">
        <Logo />
        <DesktopNavbar />
        <HeaderButtons />
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
