import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
export default function RecentlyViewedProducts() {
    return (
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
    );
}