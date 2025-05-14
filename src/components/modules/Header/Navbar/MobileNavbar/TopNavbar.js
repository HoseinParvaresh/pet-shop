import Link from "next/link";
import { toggleMobileNavbar } from "@/Utility/UtilityFunction";

export default function TopNavbar() {
    return (
        <div className="flex items-center justify-between py-3.5 px-4 bg-white mb-5">
            {/* logo */}
            <Link href={"/"} className="font-MorabbaHeavy text-2xl">پیلیسوک</Link>
            {/* close menu button */}
            <div onClick={toggleMobileNavbar} className="text-slate-500">
                <svg className="size-6">
                    <use href="#x-mark"></use>
                </svg>
            </div>
        </div>
    );
}