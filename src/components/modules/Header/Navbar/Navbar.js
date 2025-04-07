import DesktopLogo from './Desktop/Logo'
import DesktopMenu from './Desktop/Menu'

export default function Navbar() {
  return (
    <>
    {/* Desktop Navbar */}
      <div className='flex items-center justify-between'>
        <DesktopLogo />
        <DesktopMenu />
        <div>buttons</div>
      </div>
      {/* Mobile Navbar */}
      <div className='flex items-center justify-between'>

      </div>
    </>
  );
}
