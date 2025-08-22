import Link from "next/link";
import { MdOutlinePets } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function IntroducingProducts() {

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });


    return (
        <div className="container my-15 text-dark-primary">
            <div className="flex flex-col lg:flex-row justify-between shadow-primary rounded-xl md:rounded-2xl relative overflow-hidden">
                <div ref={ref} className="p-8 md:p-10 flex flex-col gap-5 md:gap-7">
                    <p className="font-MorabbaHeavy text-2xl md:text-4xl">بـهـتـرین مـحـصـولات در <span className="text-primary mr-2 mt-2 inline-block">پـیـلـسـوک</span></p>
                    <p className="line-clamp-2 text-sm md:text-base/7">منتخب بهترین و پرفروش‌ترین محصولات برای پت‌های دوست‌داشتنی شما.
                        از غذا و تشویقی تا اسباب‌بازی و لوازم ضروری همه با کیفیتی که خیال‌تان را راحت می‌کند.</p>
                    {
                        inView &&
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="max-w-max">
                            <Link href={'/store'} className="btn btn-primary px-4 py-2.5 text-sm md:px-6 md:py-2 md:text-base animate__animated animate__bounceIn animate__delay-1s">
                                <span>مشاهده محصولات</span>
                                <MdOutlinePets className="size-4 md:size-5" />
                            </Link>
                        </motion.div>
                    }
                </div>
                <img className="" src="/images/cat-bg.jpg" alt="cat-bg" />
                <img className="absolute left-7 top-80 md:top-7 animate__animated animate__heartBeat animate__slow animate__infinite" src="/images/secend-con-element.png" alt="secend-con-element" />
            </div>
        </div>
    );
}