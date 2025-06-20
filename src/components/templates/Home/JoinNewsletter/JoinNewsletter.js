import { MdOutlinePets } from "react-icons/md";
import Alert from "@/Utility/Alert";

export default function JoinNewsletter() {
    return (
        <div className="bg-secondary">
            <div className="container pb-5 grid grid-cols-1 md:grid-cols-2 items-center lg:items-start">
                {/* left => title / input / button */}
                <div data-aos="fade-down" className="flex flex-col pt-15 md:pt-25 gap-3 text-center md:text-right items-center md:items-start">
                    {/* title */}
                    <p className="head-title">عضویت خبرنامه </p>
                    <p className="title max-w-110">در خبـرنامه ما عضـو شویـد</p>
                    <p className="title-desc line-clamp-2">
                        با عضویت در خبرنامه ما میتوانید از جدیدترین مقالات و تخفیف های ما باخبر شوید.
                    </p>
                    {/* input (search) */}
                    <div className="bg-white outline outline-black/10 w-full md:w-100 rounded-lg mt-3">
                        <input placeholder="ایمیل شما" type="text" className=" outline-none w-full py-3 px-3 md:px-5" />
                    </div>
                    {/* button */}
                    <div className="btn md:px-6.5 md:py-3.5  btn-primary mt-5">
                        <p>عضویت</p>
                        <MdOutlinePets className="size-5" />
                    </div>
                </div>
                {/* right => image */}
                <img data-aos="fade-up" src="/images/main-page-pic-5.png" alt="main-page-pic-5"/>
            </div>
        </div>
    );
}