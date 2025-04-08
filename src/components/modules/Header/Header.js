import Logo from "./Common/Logo";
import DesktopMenu from "./Menu/DesktopMenu";
import HeaderButtons from "./Common/HeaderButtons";

export default function Header() {
  return (
    <div className="w-full h-25 bg-secondary px-27.5 mx-auto py-4 animate__animated">
      {/* Desktop Navbar */}
      <div className="flex items-center justify-between">
        <Logo />
        <DesktopMenu />
        <HeaderButtons />
      </div>
      {/* Mobile Navbar */}
      <div className="flex items-center justify-between"></div>
    </div>
  );
}
