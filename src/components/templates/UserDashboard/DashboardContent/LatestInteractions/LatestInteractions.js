import { FaArrowLeftLong } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";

export default function LatestInteractions() {
    return (
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
    );
}