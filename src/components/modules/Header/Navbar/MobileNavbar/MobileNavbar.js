import Link from "next/link";
import BottomNavbar from "./BottomNavbar";
export default function MobileNavbar() {
  return (
    <div>
      {/* <!-- overlay--> */}
      <div className="mobile-overlay"></div>
      {/* navbar */}
      <div className="relative">
        {/* <!-- bars svg(when clicked show mobile menu) --> */}
        <div>
          <svg className="size-7 text-white">
            <use href="#bars-3"></use>
          </svg>
        </div>
        {/* <!-- navbar --> */}
        <div className="navigation right-0 lg:hidden bg-white w-64 overflow-y-auto pb-5 fixed top-0 bottom-0 z-50 transition-all">
          {/* top navbar => logo / close menu button  */}
          <div className="flex items-center justify-between py-3.5 px-4 bg-white mb-5">
            {/* logo */}
            <Link href={"/"} className="font-MorabbaHeavy text-2xl">پیلیسوک</Link>
            {/* close menu button */}
            <div className="text-slate-500">
              <svg className="size-6">
                <use href="#x-mark"></use>
              </svg>
            </div>
          </div>
          {/* bottom navbar => search input / search drop down / menu list */}
          <BottomNavbar/>
        </div>
      </div>
    </div>
  );
}
