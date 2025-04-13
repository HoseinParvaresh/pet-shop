import Link from "next/link";
import { MdOutlinePets } from "react-icons/md";
export default function OurServicesCard() {
    return (
        <div className="rounded-xl max-w-91 shadow-xl bg-white group relative w-full">
            {/* image / title */}
            <img className=" rounded-t-xl h-63 w-full object-cover" src="/images/service-1.jpg" alt="service-1" />
            <div className="flex overflow-hidden justify-between items-center absolute top-1/2 right-5 px-6 xl:px-7 py-3 xl:py-4 bg-dark-primary group-hover:bg-primary transition-colors duration-300 w-full rounded-xl">
                <Link href="/" className="font-MorabbaBold text-2xl xl:text-3xl text-white">آمـوزش حـیـوان</Link>
                <img className=" absolute left-2" src="/images/slider-img-vector-4.png" alt="slider-img-vector-4" />
            </div>
            {/* detail */}
            <div className="py-5 px-7 mt-8 xl:mt-10">
                <p className="text-[15px] text-dark-primary text-right leading-7 line-clamp-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <div className="flex items-center gap-2 font-danaBold text-dark-primary mt-6">
                    <MdOutlinePets className="text-primary size-5 -rotate-45 group-hover:rotate-45 transition-transform duration-500"/>
                    <Link href="/">بیشتر بدانید</Link>
                </div>
            </div>
        </div>
    );
}