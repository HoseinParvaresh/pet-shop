import Link from "next/link";
import { MdOutlinePets } from "react-icons/md";
export default function OurServicesCard() {
    return (
        <div className="relative rounded-xl max-w-91 shadow-xl bg-white group">
            <img className=" rounded-t-xl" src="/images/service-1.jpg" alt="service-1" />
            {/* title */}
            <div className="absolute flex justify-between items-center px-5 py-2 bg-dark-primary group-hover:bg-primary transition-colors duration-300 w-full top-[52%] rounded-xl right-5">
                <Link href="/" className="font-MorabbaBold text-3xl text-white">آمـوزش حـیـوان</Link>
                <img src="/images/slider-img-vector-4.png" alt="slider-img-vector-4" />
            </div>
            {/* detail */}
            <div className="py-5 px-7 mt-10">
                <p className="text-[15px] text-dark-primary text-right leading-7">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <div className="flex items-center gap-2 font-danaBold text-dark-primary mt-6">
                    <MdOutlinePets className="text-primary size-5 -rotate-45 group-hover:rotate-45 transition-transform duration-500"/>
                    <Link href="/">بیشتر بدانید</Link>
                </div>
            </div>
        </div>
    );
}