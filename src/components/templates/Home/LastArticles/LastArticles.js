
import LastArticle from "./LastArticle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function LastArticles() {
    return (
        <div className="bg-secondary mt-10">
            <div className="container py-10">
                {/* top => head title / title / desc */}
                <div data-aos="fade-down" className="flex-center flex-col text-center gap-3">
                    <p className="head-title"> آخـرین مقالات</p>
                    <p className="title max-w-110"> جدیدتـرین مقالات دانشـنامه ما</p>
                    <p className="title-desc">
                        با تازه‌ترین مقالات آموزشی، به دنیای پت‌ها نزدیک‌تر شوید.
                        نکات کاربردی درباره نگهداری، تغذیه، آموزش و سلامت حیوانات خانگی، همه در دانشنامه پیلیسوک.
                    </p>
                </div>
                {/* bottom => article item */}
                <div data-aos="fade-up">
                    <Swiper
                        slidesPerView={1}
                        className="!py-10  !justify-center"
                        spaceBetween={20}
                        breakpoints={{
                            768: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <LastArticle />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LastArticle />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LastArticle />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LastArticle />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LastArticle />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LastArticle />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
}