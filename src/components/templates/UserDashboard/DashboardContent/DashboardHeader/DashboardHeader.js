import { HiMiniBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import { toggleMobileNavbar } from "@/Utility/UtilityFunction"
import { useState } from "react";


export default function DashboardHeader() {

    const [search,setSearch] = useState()
    return (
        <div class="flex items-center justify-between shrink-0 w-full h-22 px-5 sm:px-7 bg-white max-lg:border-b max-lg:border-b-black/10 lg:rounded-lg">
            {/* overlay */}
            <div onClick={toggleMobileNavbar} className="mobile-overlay"></div>
            {/* bars icon */}
            <HiMiniBars3 onClick={toggleMobileNavbar} className="md:!hidden size-6" />
            
            {/* search */}
            <div class="relative z-20 hidden md:flex items-center justify-between gap-x-4 w-60 bg-black/5 rounded-lg py-1 px-4 h-12">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder=" تیکت ها، سفارش ها و..." class="size-full text-xs placeholder:text-sm outline-none"  />
                <CiSearch className="text-sm shrink-0 text-gray-500 size-5 cursor-pointer" />
            </div>
            <Link href={"/"} className="text-2xl text-primary font-MorabbaBold">پیلیسوک</Link>
            {/* notification and basket buttons / date */}
            <div class="flex items-center gap-x-5">
                {/* buttons */}
                <div class="flex gap-x-3">
                    {/* basket */}
                    <Link href="/" target="_blank">
                        <IoCartOutline className="size-6 cursor-pointer" />
                    </Link>
                    {/* notification */}
                    <IoNotificationsOutline className="size-6 cursor-pointer" />
                </div>
                <div class="max-lg:hidden w-px h-6 bg-black/10">
                </div>
                {/* date */}
                <time datetime="2025-07-01T08:29:42.802Z" class="max-lg:hidden text-xs text-black/80 select-none">سه‌شنبه ۱۰ تیر</time>
            </div>
        </div>
    );
}