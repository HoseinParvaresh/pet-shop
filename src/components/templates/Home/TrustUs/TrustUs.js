import Link from "next/link";
import { MdOutlinePets } from "react-icons/md";
import { ParallaxBanner } from "react-scroll-parallax";
export default function TrustUs() {
    return (
        <ParallaxBanner layers={[
            { image: '/images/bg-trustUs.png', speed: -20 },
            {
                speed: -15,
                children: (

                    <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 absolute inset-0 items-center justify-center">
                        {/* right */}
                        <div className="self-end md:self-auto">
                            <p className="title text-white max-w-full md:max-w-[427px]">دلایـلی کـه میـتوانیـد به مجموعه ما اعتـماد کنیـد</p>
                            <p className="title-desc text-white max-w-full md:max-w-[450px] mt-3 md:mt-5 line-clamp-2 md:line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی است.</p>
                            {/* button */}
                            <Link href={'/'} className='btn btn-primary--light mt-5'>
                                <span>درباره پیلیسوک</span>
                                <MdOutlinePets className="size-4" />
                            </Link>
                        </div>

                        {/* left */}
                        <div className="grid grid-cols-2 gap-5 self-start md:self-auto">
                            <div className="trust-us__box">
                                <span className="trust-us__box--num">250<span className="text-3xl">+</span></span>
                                <span className="trust-us__box--title">مشتری راضی</span>
                            </div>
                            <div className="trust-us__box">
                                <span className="trust-us__box--num">10<span className="text-3xl">+</span></span>
                                <span className="trust-us__box--title">سال سابقه</span>
                            </div>
                            <div className="trust-us__box">
                                <span className="trust-us__box--num">40<span className="text-3xl">+</span></span>
                                <span className="trust-us__box--title">اعضای تیم</span>
                            </div>
                            <div className="trust-us__box">
                                <span className="trust-us__box--num">250<span className="text-3xl">+</span></span>
                                <span className="trust-us__box--title">حیوان خوشحال</span>
                            </div>
                        </div>
                    </div>

                ),
            },
        ]} className="h-150 md:h-120">
        </ParallaxBanner>
    );
}