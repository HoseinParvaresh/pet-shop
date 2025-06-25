import Link from "next/link";
import { MdOutlinePets } from "react-icons/md";
export default function OurServicesCard({title,src,icon,desc,link}) {
    return (
        <div data-aos="fade-up" className="rounded-xl w-full shadow-xl bg-white group relative">
            {/* image */}
            <img className=" rounded-t-xl h-63 w-full object-cover" src={src} alt={title} />
            {/* title */}
            <div className="flex ml-5 overflow-hidden justify-between items-center absolute top-[53%] xl:top-1/2 right-5 px-6 xl:px-7 py-3 xl:py-4 bg-dark-primary group-hover:bg-primary transition-colors duration-300 w-full rounded-xl">
                <Link href={link} className="font-MorabbaBold text-2xl text-white">{title}</Link>
                <img src={`/images/${icon}.png`} alt={title} className=" absolute left-5" />
            </div>
            {/* detail */}
            <div className="py-5 px-7 mt-5 md:mt-8 xl:mt-10">
                <p className="text-[15px] text-dark-primary text-right leading-7 line-clamp-2">{desc}</p>
                <div className="flex items-center gap-2 font-danaBold text-dark-primary mt-6">
                    <MdOutlinePets className="text-primary size-5 -rotate-45 group-hover:rotate-45 transition-transform duration-500"/>
                    <Link href={link}>بیشتر بدانید</Link>
                </div>
            </div>
        </div>
    );
}