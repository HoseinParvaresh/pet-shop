import CustomerComment from "./CustomerComment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { customerCommentsItems } from "@/Utility/Constants";
export default function CustomerComments() {

    return (
        <div className="container mt-10 2xs:mt-20">
            <div data-aos="fade-down" className="flex-center flex-col text-center gap-3">
                <p className="head-title">نظـرات مشتـریان</p>
                <p className="title max-w-110">نظـرات برخـی از مشتـریان ما</p>
                <p className="title-desc">تجربه‌ی مشتریان واقعی، بهترین نشان‌دهنده کیفیت خدمات ماست. ببینید پت‌دوستان درباره پیلیسوک چه می‌گویند!</p>
            </div>
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
                                <CustomerComment
                                    userProfileSrc={comment.userProfileSrc}
                                    petProfileSrc={comment.petProfileSrc}
                                    name={comment.name}
                                    petName={comment.petName}
                                    rate={comment.rate}
                                    desc={comment.desc} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}