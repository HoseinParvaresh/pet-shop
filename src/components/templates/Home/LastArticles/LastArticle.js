
import { MdOutlinePets } from "react-icons/md";

export default function LastArticle({}) {
    return (
        <div className="w-full md:max-w-78 bg-white group rounded-lg overflow-hidden hover:shadow-xl transition-all duration-400">
            {/* top => image */}
            <div className="relative h-50">
                <img className=" object-cover w-full h-full" src="/images/post-5.jpg" alt="post-5" />
                <p className="absolute bg-primary py-1.5 px-3 rounded-l-[10px] top-46 md:top-47 text-white font-danaBold text-sm">۲۲ دی ۱۴۰۱</p>
            </div>
            {/* bottom =>  author / count comments / title / desc / button */}
            <div className="px-4 py-5 flex flex-col gap-2 mt-3">
                {/* author / count comments */}
                <div className="text-xs text-black/40 flex items-center gap-2 line-clamp-1">
                    <p>طراح سایت </p>
                    <div className="w-[1px] h-5 bg-black/10"></div>
                    <p><span>10</span> دیدگاه </p>
                </div>
                {/* title */}
                <p className="line-clamp-1 font-MorabbaBold text-lg text-dark-primary group-hover:text-primary transition-colors cursor-pointer">بیماری های شایع حیوانات خانگی</p>
                {/* desc */}
                <p className="line-clamp-2 text-[13px] text-black/40">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک.</p>
                {/* button */}
                <div className="flex text-sm items-center gap-1 text-dark-primary font-danaBold mt-2 cursor-pointer">
                    <MdOutlinePets className="text-primary size-5 -rotate-45 group-hover:rotate-45 transition-transform duration-500" />
                    <p> ادامه مطلب </p>
                </div>
            </div>
        </div>
    );
}