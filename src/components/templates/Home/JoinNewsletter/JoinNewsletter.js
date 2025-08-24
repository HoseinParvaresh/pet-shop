import { MdOutlinePets } from "react-icons/md";
import Alert from "@/Utility/Alert";
import { isValidEmail } from "@/Utility/UtilityFunction";
import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import { useInView } from "react-intersection-observer";

export default function JoinNewsletter() {

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const [email, setEmail] = useState("")

    const joinNewsletter = () => {
        if (!isValidEmail(email)) {
            Alert("error", "ایمیل وارد شده نامعتبر است")
            return
        }
        Alert("success", "ایمیل شما با موفقیت ثبت شد")

    }
    return (
        <div className="bg-secondary">
            <div className="container pb-5 grid grid-cols-1 md:grid-cols-2 items-center lg:items-start">
                {/* left => title / input / button */}
                <div data-aos="fade-down" className="flex flex-col pt-15 md:pt-25 gap-3 text-center md:text-right items-center md:items-start">
                    {/* title */}
                    <SectionHeader subTitle="عضویت خبرنامه" Title="در خبـرنامه ما عضـو شویـد" desc="با عضویت در خبرنامه ما میتوانید از جدیدترین مقالات و تخفیف های ما باخبر شوید." right={true}/>
                    {/* input (search) */}
                    <div className="bg-white outline outline-black/10 w-full md:w-100 rounded-lg mt-3">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ایمیل شما" type="text" className=" outline-none w-full py-3 px-3 md:px-5" />
                    </div>
                    {/* button */}
                    <div onClick={joinNewsletter} className="btn btn-primary btn-xl mt-5">
                        <p>عضویت</p>
                        <MdOutlinePets className="size-5" />
                    </div>
                </div>
                {/* right => image */}
                <img data-aos="fade-up" src="/images/main-page-pic-5.png" alt="main-page-pic-5" />
            </div>
        </div>
    );
}