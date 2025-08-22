
import LastArticle from "./LastArticle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { LastArticlesItem } from "@/Utility/Constants";
import SectionHeader from "../common/SectionHeader";
import { useInView } from "react-intersection-observer";

export default function LastArticles() {

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className="bg-secondary mt-10">
            <div className="container pt-10 h-[720px]">
                {/* top => head title / title / desc */}
                <SectionHeader
                    subTitle={"آخـرین مقالات"}
                    Title={"جدیدتـرین مقالات دانشـنامه ما"}
                    desc={"با تازه‌ترین مقالات آموزشی، به دنیای پت‌ها نزدیک‌تر شوید.نکات کاربردی درباره نگهداری، تغذیه، آموزش و سلامت حیوانات خانگی، همه در دانشنامه پیلیسوک."}
                />
                {/* bottom => article item */}
                <div ref={ref} data-aos="fade-up">
                    <Swiper
                        slidesPerView={1}
                        className="!py-10 !justify-center"
                        spaceBetween={20}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}>
                        {inView &&
                            LastArticlesItem.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <LastArticle {...item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
}