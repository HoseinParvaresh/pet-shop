import OurAdvantagesCheckBox from "./OurAdvantagesCheckBox";
import { Typewriter } from 'react-simple-typewriter'
import { useInView } from "react-intersection-observer";

export default function OurAdvantages() {

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const OurAdvantagesItems = [
        { id: 1, title: "نیروهای متخصص" },
        { id: 2, title: "نگهداری 24 ساعته" },
        { id: 3, title: "بهترین دامپزشکان" },
        { id: 4, title: "غذاهای با کیفیت" },
    ]

    return (
        <div className="container flex flex-col lg:flex-row gap-5 items-center mt-25">
            {/* right side => head title - title - desc check box */}
            <div ref={ref} className="flex flex-col gap-5">
                {inView &&
                    <>
                        <p className="head-title animate__animated animate__bounceInRight animate__delay-1s"> مـزیـت هـای مـا </p>
                        <p data-aos="fade-left" className="title" >
                            <Typewriter
                                words={['چرا فروشگاه پیلیسوک؟!']}
                                typeSpeed={120} />
                        </p>
                    </>
                }
                <p data-aos="fade-left" className="title-desc">در پیلیسوک، ما فقط محصولات نمی‌فروشیم؛ ما عاشق حیواناتیم و دغدغه‌مون رفاه، سلامت و خوشحالی دوست کوچولوی شماست.
                    از غذا و اسباب‌بازی گرفته تا خدمات تخصصی مثل پانسیون، اصلاح و شست‌وشو ، همه چیز رو یک‌جا و با کیفیت بالا برای شما فراهم کردیم.
                </p>
                {/* check box */}
                <div ref={ref} className="grid grid-cols-1 4xs:grid-cols-2 gap-7">
                    {inView &&
                        OurAdvantagesItems.map((item) => (
                            <OurAdvantagesCheckBox key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
            {/* left side backGround Image image */}
            <div data-aos="fade-up" className="bg__our-advantages--first">
                <div className="bg__our-advantages--second relative">
                    <img src="/images/main-page-pic-1-1.png" alt="main-page-pic-1-1" />
                    <img className="heart-img absolute top-0 animate__animated animate__heartBeat animate__slow animate__infinite" src="/images/secend-con-element.png" alt="secend-con-element" />
                </div>
            </div>
        </div>
    );
}