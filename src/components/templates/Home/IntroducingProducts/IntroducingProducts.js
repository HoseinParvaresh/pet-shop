import Link from "next/link";
import { MdOutlinePets } from "react-icons/md";

export default function IntroducingProducts() {
    return (
        <div className="container my-15 text-dark-primary">
            <div className="flex flex-col lg:flex-row justify-between shadow-primary rounded-xl md:rounded-2xl relative">
                <div className="p-8 md:p-10 flex flex-col gap-5 md:gap-7">
                    <p className="font-MorabbaHeavy text-2xl md:text-4xl">بـهـتـرین مـحـصـولات در <span className="text-primary mr-2 mt-2 inline-block">پـیـلـسـوک</span></p>
                    <p className="line-clamp-2 text-sm md:text-base">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای تکنولوژی است.</p>
                    <Link href={"/store"} className="btn btn-primary px-4 py-2.5 text-sm md:px-6 md:py-2 md:text-base">
                        <span>مشاهده محصولات</span>
                        <MdOutlinePets className="size-4 md:size-5" />
                    </Link>
                </div>
                <img className="" src="/images/cat-bg.jpg" alt="cat-bg" />
                <img className="absolute left-7 top-80 md:top-7 animate__animated animate__heartBeat animate__slow animate__infinite" src="/images/secend-con-element.png" alt="secend-con-element" />
            </div>
        </div>
    );
}