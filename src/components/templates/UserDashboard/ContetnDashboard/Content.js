
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";

export default function Content() {
    return (
        <section class="flex flex-col lg:gap-y-8 w-full overflow-hidden">
            {/* header */}
            
            {/* main */}
            <section class="bg-white p-5 sm:p-7 lg:rounded-lg h-full">
                <div>
                    <div class="-mx-5 -mb-6 lg:-m-7 lg:dark:-m-[29px] bg-black/5">
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
                                            <div className="btn btn-primary btn-sm w-full">مشاهده</div>
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
    );
}