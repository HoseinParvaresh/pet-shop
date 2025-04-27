import Link from "next/link";
import { MdOutlinePets } from "react-icons/md";
export default function TrustUs() {
    return (
        <div className="pt-10 md:pt-16 pb-25 bg-trustUs">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* right */}
                <div data-aos="fade-left">
                    <p className="title text-white max-w-full">دلایـلی کـه میـتوانیـد به مجموعه ما اعتـماد کنیـد</p>
                    <p className="title-desc text-white max-w-full md:max-w-[450px] mt-3 md:mt-5 line-clamp-2 md:line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی است.</p>
                {/* button */}
                    <Link href={'/'} className='btn btn-primary--light mt-5 animate__animated animate__fadeInUp'> 
                        <span>درباره پیلیسوک</span>
                        <MdOutlinePets className="size-4"/>
                    </Link>
                </div>

                {/* left */}
                <div data-aos="fade-up" className="grid grid-cols-2 gap-5">
                    <div className="trust-us__cart">
                        <span className="font-danaBold text-3xl md:text-4xl xl:text-5xl">250<span className="text-3xl">+</span></span>
                        <span className="font-Morabba text-base md:text-xl xl:text-2xl">مشتری راضی</span>
                    </div>
                    <div className="trust-us__cart">
                        <span className="font-danaBold text-3xl md:text-4xl xl:text-5xl">10<span className="text-3xl">+</span></span>
                        <span className="font-Morabba text-base md:text-xl xl:text-2xl">سال سابقه</span>
                    </div>
                    <div className="trust-us__cart">
                        <span className="font-danaBold text-3xl md:text-4xl xl:text-5xl">40<span className="text-3xl">+</span></span>
                        <span className="font-Morabba text-base md:text-xl xl:text-2xl">اعضای تیم</span>
                    </div>
                    <div className="trust-us__cart">
                        <span className="font-danaBold text-3xl md:text-4xl xl:text-5xl">250<span className="text-3xl">+</span></span>
                        <span className="font-Morabba text-base md:text-xl xl:text-2xl">حیوان خوشحال</span>
                    </div>
                </div>
            </div>
        </div>
    );
}