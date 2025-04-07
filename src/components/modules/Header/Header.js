import Logo from "./Common/Logo";
import DesktopMenu from "./Menu/DesktopMenu";
import Buttons from "./Common/Buttons";

export default function Header() {
  return (
    <div className="w-full h-25 bg-secondary px-27.5 mx-auto py-4">
      {/* Desktop Navbar */}
      <div className="flex items-center justify-between">
        <Logo />
        <DesktopMenu />
        <Buttons />
      </div>
      {/* Mobile Navbar */}
      <div className="flex items-center justify-between"></div>
    </div>
  );
}
