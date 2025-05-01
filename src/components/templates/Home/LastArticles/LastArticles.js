import { MdOutlinePets } from "react-icons/md";

export default function LastArticles() {
    return (
        <div className="bg-secondary mt-10">
            <div className="container py-10">
                {/* top => head title / title / desc */}
                <div data-aos="fade-down" className="flex-center flex-col text-center gap-3">
                    <p className="head-title"> آخـرین مقالات</p>
                    <p className="title max-w-110"> جدیدتـرین مقالات دانشـنامه ما</p>
                    <p className="title-desc">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه می باشد.
                    </p>
                </div>
                {/* bottom => article item */}
                <div className="max-w-75 bg-white group rounded-t-lg overflow-hidden">
                    {/* top => image */}
                    <div className="relative">
                        <img src="/images/post-5.jpg" alt="post-5" />
                        <p className="absolute bg-primary py-1.5 px-3 rounded-l-[10px] top-0 text-white font-danaBold text-sm">۲۲ دی ۱۴۰۱</p>
                    </div>
                    {/* bottom =>  author / count comments / title / desc / button */}
                    <div className="p-4 flex flex-col gap-2 mt-5">
                        {/* author / count comments */}
                        <div className="text-xs text-black/40 flex items-center gap-2 line-clamp-1">
                        <p>طراح سایت </p>
                        <div className="w-[1px] h-4 bg-black/20"></div>
                        <p><span>10</span> دیدگاه </p>
                        </div>
                        {/* title */}
                        <p className="line-clamp-1 font-MorabbaBold text-lg text-dark-primary">بیماری های شایع حیوانات خانگی</p>
                        {/* desc */}
                        <p className="line-clamp-2 text-[13px] text-black/40">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک.</p>
                        {/* button */}
                        <div className="flex text-sm items-center gap-1 text-dark-primary font-danaBold mt-2">
                            <MdOutlinePets className="text-primary size-5 -rotate-45 group-hover:rotate-45 transition-transform duration-500"/>
                            <p> ادامه مطلب </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}