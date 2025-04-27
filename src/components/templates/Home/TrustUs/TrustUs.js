import Link from "next/link";
import { MdOutlinePets } from "react-icons/md";
export default function TrustUs() {
    return (
        <div className="grid grid-cols-2 pt-16 pb-25 px-27.5 bg-[url(/images/main-page-pic-4.jpg)] h-120">
            {/* right */}
            <div data-aos="fade-left">
                <p className="title text-white">دلایـلی کـه میـتوانیـد به مجموعه ما اعتـماد کنیـد</p>
                <p className="title-desc text-white max-w-[450px] mt-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی است.</p>
               {/* button */}
                <Link href={'/'} className='btn btn-primary--light mt-5 animate__animated animate__fadeInUp'> 
                    <span>درباره پیلیسوک</span>
                    <MdOutlinePets className="size-4"/>
                </Link>
            </div>

            {/* left */}
            <div data-aos="fade-right" className="grid grid-cols-2 gap-5">
                <div className="trust-us__cart">
                    <span className="font-danaBold text-5xl">250<span className="text-3xl">+</span></span>
                    <span className="font-Morabba text-2xl">مشتری راضی</span>
                </div>
                <div className="trust-us__cart">
                    <span className="font-danaBold text-5xl">10<span className="text-3xl">+</span></span>
                    <span className="font-Morabba text-2xl">سال سابقه</span>
                </div>
                <div className="trust-us__cart">
                    <span className="font-danaBold text-5xl">40<span className="text-3xl">+</span></span>
                    <span className="font-Morabba text-2xl">اعضای تیم</span>
                </div>
                <div className="trust-us__cart">
                    <span className="font-danaBold text-5xl">250<span className="text-3xl">+</span></span>
                    <span className="font-Morabba text-2xl">حیوان خوشحال</span>
                </div>
            </div>
        </div>
    );
}