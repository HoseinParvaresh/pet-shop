import BottomNavbar from "./BottomNavbar";
import TopNavbar from "./TopNavbar";
import { toggleMobileNavbar } from "@/Utility/UtilityFunction";
export default function MobileNavbar() {

  return (
    <>
      {/* <!-- overlay--> */}
      <div onClick={toggleMobileNavbar} className="mobile-overlay"></div>
      {/* <!-- bars svg(when clicked show mobile menu) --> */}
      <div onClick={toggleMobileNavbar}>
        <svg className="size-7 text-white">
          <use href="#bars-3"></use>
        </svg>
      </div>
      {/* <!-- navbar --> */}
      <div className="navigation -right-67 lg:hidden bg-white w-64 overflow-y-auto pb-5 fixed top-0 bottom-0 z-60 transition-all max-md:duration-300">
        {/* logo / close menu button  */}
        <TopNavbar />
        {/* search input / search drop down / menu list */}
        <BottomNavbar />
      </div>
    </>
  );
}
