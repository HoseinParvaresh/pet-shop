import { RiSettings4Line } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiMiniBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

// const menuItem = [
//     {id:1,title:'خانه',link:'/',icon:<RiHome5Line/>},
//     {id:2,title:'خانه',link:'/',icon:<RiHome5Line/>},
//     {id:3,title:'خانه',link:'/',icon:<RiHome5Line/>},
//     {id:4,title:'خانه',link:'/',icon:<RiHome5Line/>},
// ]

export default function UserDashboard() {
    return (
        <section className="bg-black/10">
            <div class="relative flex lg:items-start lg:gap-x-8 lg:p-9 max-w-[1440px] mx-auto">
                {/* side bar */}
                <aside class="-right-65 sm:-right-70 lg:!h-[calc(100vh-64px)] fixed top-0 bottom-0 z-50 md:static lg:sticky lg:top-5 overflow-y-auto w-65 sm:w-70 md:w-66 lg:w-70 shrink-0 bg-white md:border-l md:border-l-black/10 px-7 py-5 lg:rounded-lg max-md:transition-all max-md:duration-300">
                    {/* top => button / profile / number */}
                    <div class="flex items-center justify-between pb-5 mb-5 border-b border-b-black/5">
                        <div class="flex items-center gap-x-2">
                            <img class="size-11 rounded-full" src="https://secure.gravatar.com/avatar/305d06cbd488be05e4d58cce3723d4d5?s=96&amp;d=mm&amp;r=g" loading="lazy" />
                            <div class="flex flex-col gap-2">
                                <span class="max-w-28 truncate select-none text-sm font-danaBold">حسین</span>
                                <span class="text-black text-xs">09176437156</span>
                            </div>
                        </div>
                        {/* setting and signout button */}
                        <div class="flex items-center gap-x-3">
                            <RiSettings4Line className="size-5 text-black/50 hover:text-black transition-colors cursor-pointer" />
                            <TbLogout2 className="size-5 text-black/50 hover:text-red-500 transition-colors cursor-pointer" />
                        </div>
                    </div>
                    {/* menu */}
                    <div class="flex flex-col gap-y-5">
                        <div class="flex flex-col gap-y-2.5">
                            <span class="text-sm text-gray-500 select-none">دسترسی سریع</span>
                            <div class="flex flex-col gap-y-2">
                                <Link href="/" class="flex items-center gap-x-2.5 py-1.5 group">
                                    <span class="active-badge block w-0.5 h-5 ml-1 rounded-full">
                                    </span>
                                    <BiHomeAlt2 className="size-5 text-black/80 group-hover:text-primary transition-colors" />
                                    <span class="group-hover:text-primary text-sm transition-colors">خانه</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>
                {/* content */}
                <section class="flex flex-col lg:gap-y-8 w-full overflow-hidden">
                    {/* header */}
                    <header class="flex items-center justify-between shrink-0 w-full h-22 px-5 sm:px-7 bg-white max-lg:border-b max-lg:border-b-black/10 lg:rounded-lg">
                        {/* bars icon */}
                        <HiMiniBars3 className="md:!hidden size-6" />
                        {/* search */}
                        <div class="relative z-60 hidden md:flex items-center justify-between gap-x-4 w-72 xl:w-85 bg-black/5 rounded-lg py-1 px-4 h-12">
                            <input type="text" placeholder="دوره های من، تیکت ها، مالی ..." class="size-full text-xs placeholder:text-sm outline-none" value="" />
                            <CiSearch className="text-sm shrink-0 text-gray-500 size-5 cursor-pointer" />
                        </div>
                        {/* alarm and notification button / date */}
                        <div class="flex items-center gap-x-5">
                            {/* buttons */}
                            <div class="flex gap-x-3">
                                <Link href="/" target="_blank">
                                    <IoCartOutline className="size-6" />
                                </Link>
                                {/* notification */}
                                <IoNotificationsOutline className="size-6" />
                            </div>
                            <div class="max-lg:hidden w-px h-6 bg-black/10">
                            </div>
                            {/* date */}
                            <time datetime="2025-07-01T08:29:42.802Z" class="max-lg:hidden text-xs text-black/80 select-none">سه‌شنبه ۱۰ تیر</time>
                        </div>
                    </header>
                    {/* main */}
                    <section class="bg-white p-5 sm:p-7 lg:rounded-lg h-full">
                        <div>
                            <div class="-mx-5 -mb-6 lg:-m-7 lg:dark:-m-[29px] bg-black/10">
                                {/* top */}
                                <div class="lg:pb-8">
                                    <section class="bg-white flex items-center justify-between flex-wrap gap-x-3 gap-y-4 px-5 sm:px-7 py-5 lg:rounded-lg">
                                        {/* item */}
                                        <div class="w-32 sm:w-38 flex items-center gap-x-3 sm:gap-x-5">
                                            <img class="size-9 sm:size-11 md:size-12" src="/courses-empty.png" alt="" />
                                            <div class="flex flex-col gap-y-2 text-xs sm:text-sm">
                                                <span class="font-danaBold">36 دوره</span>
                                                <span class="text-black/80">دوره ها من</span>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                {/* middle */}
                                <div class="lg:pb-7">
                                    <section class="bg-white p-5 lg:rounded-lg">
                                        <div class="flex items-center justify-between mb-6">
                                            <span class="font-danaBold">اخیرا مشاهده شده</span>
                                            <Link href="/courses" class="btn btn-primary btn-xs bg-black/5 text-black/70 py-2.5">
                                                <FaArrowLeftLong className="size-3.5" />
                                            </Link>
                                        </div>
                                        {/* content */}
                                        <div class="grid grid-cols-12 gap-5">
                                            <div class="col-span-6 sm:col-span-4 xl:col-span-3 shadow-normal overflow-hidden group rounded-md">
                                                <div class="relative overflow-hidden rounded-md">
                                                    {/* image */}
                                                    <img class="size-full rounded-md group-hover:scale-105 transition-all object-cover" src="/images/p-1.png" alt="" />
                                                </div>
                                                <div class="p-3">
                                                    <div class="pb-4 mb-4 border-b border-b-black/10"><a href="#" target="_blank" class="text-xs xl:text-sm h-12 xl:h-14 line-clamp-2">آموزش ۲۰ کتابخانه کاربردی ReactJS برای بازارکار</a>
                                                    </div>
                                                    <div className="btn btn-primary btn-sm w-full">مشاهده محصول</div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                {/* bottom */}
                                <div class="grid grid-cols-12 lg:gap-7">
                                    {/* tickets */}
                                    <section class="lg:col-span-6 col-span-full bg-white p-5 lg:rounded-lg">
                                        {/* title */}
                                        <div class="flex items-center justify-between mb-6">
                                            <span class="font-danaBold">تیکت های اخیر</span>
                                            <Link href="/courses" class="btn btn-primary btn-xs bg-black/5 text-black/70 py-2.5">
                                                <FaArrowLeftLong className="size-3.5" />
                                            </Link>
                                        </div>
                                        {/* tickets */}
                                        <div class="space-y-5">
                                            {/* item */}
                                            <div class="p-5 space-y-5 border border-black/5 hover:border-black/15 transition-all rounded-md">
                                                <div class="flex items-center justify-between gap-x-3">
                                                    <a href="#" class="text-base truncate">خطای ناشناخته در ساخت لینک امن</a>
                                                    <a href="#" class="flex items-center gap-x-2 py-1 text-sm shrink-0 text-black/70">
                                                        مشاهده
                                                        <FaArrowLeftLong className="size-3.5" />
                                                    </a>
                                                </div>
                                                <div class="flex items-center justify-between">
                                                    <div class="flex items-center gap-x-2 text-xs select-none">
                                                        <div class="flex items-center gap-x-1.5 text-black/70">
                                                            <IoDocumentTextOutline className="size-4" />
                                                            <span>دپارتمان:</span>
                                                        </div>
                                                        <span class="text-black font-danaBold">پشتیبانی</span>
                                                    </div>
                                                    <div class="w-25 text-center px-2 py-1 bg-primary/10 text-sm rounded-md">بسته شده </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {/* Q & A */}
                                    <section class="lg:col-span-6 col-span-full bg-white p-5 lg:rounded-lg">
                                        <div class="flex items-center justify-between mb-6"><span class="font-bold">پرسش های اخیر</span>
                                            <Link href="/courses" class="btn btn-primary btn-xs bg-black/5 text-black/70 py-2.5">
                                                <FaArrowLeftLong className="size-3.5" />
                                            </Link>
                                        </div>
                                        <div class="space-y-5">
                                            <div class="p-5 space-y-5 border border-black/5 hover:border-black/15 transition-all rounded-md">
                                                <div class="flex items-center justify-between gap-x-3">
                                                    <a href="#" class="text-base truncate">خطای ناشناخته در ساخت لینک امن</a>
                                                    <a href="#" class="flex items-center gap-x-2 py-1 text-sm shrink-0 text-black/70">
                                                        مشاهده
                                                        <FaArrowLeftLong className="size-3.5" />
                                                    </a>
                                                </div>
                                                <div class="flex items-center justify-between">
                                                    <div class="flex items-center gap-x-2 text-xs select-none">
                                                        <div class="flex items-center gap-x-1.5 text-black/70">
                                                            <IoDocumentTextOutline className="size-4" />
                                                            <span>دپارتمان:</span>
                                                        </div>
                                                        <span class="text-black font-danaBold">پشتیبانی</span>
                                                    </div>
                                                    <div class="w-25 text-center px-2 py-1 bg-primary/10 text-sm rounded-md">بسته شده </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    );
}