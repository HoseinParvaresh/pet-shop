import CustomerComment from "./CustomerComment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { customerCommentsItems } from "@/Utility/Constants";
import SectionHeader from "../common/SectionHeader";
export default function CustomerComments() {

    return (
        <div className="container mt-10 2xs:mt-20">
            <SectionHeader
                subTitle={"نظـرات مشتـریان"}
                Title={"نظـرات برخـی از مشتـریان ما"}
                desc={"تجربه‌ی مشتریان واقعی، بهترین نشان‌دهنده کیفیت خدمات ماست. ببینید پت‌دوستان درباره پیلیسوک چه می‌گویند!"}
            />
            {/* bottom => comments */}
            <div data-aos="fade-up" className="flex gap-15">
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    className="!py-10 !px-2 md:!px-5"
                    spaceBetween={40}
                    breakpoints={{
                        1024: { slidesPerView: 2 }
                    }}
                >
                    {
                        customerCommentsItems.map((comment) => (
                            <SwiperSlide key={comment.id}>
                                <CustomerComment {...comment} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}