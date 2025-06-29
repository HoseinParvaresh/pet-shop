import PageHead from "@/components/modules/PageHead/PageHead";
import AboutCard from "@/components/templates/About/AboutCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function About() {
    return (
        <div className="mb-20">
            <PageHead title="درباره ما" image="cat-4.png" />
            <div className="container">
                {/* Description / image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 mb-5">
                    {/* Description */}
                    <div>
                        <p className="text-2xl/8 md:text-4xl/12 font-danaBold text-primary">درباره پیلیسوک</p>
                        <p className="text-sm 3xs:text-base md:text-xl/7 text-dark-secondary my-5 lg:max-w-140">پت شاپ پیلیسوک با عشق به حیوانات و با هدف فراهم کردن بهترین تجربه برای صاحبان پت‌ها راه‌اندازی شده است. ما باور داریم حیوانات خانگی عضوی از خانواده هستند و شایسته بهترین مراقبت و توجه‌اند. به همین دلیل، مجموعه‌ای کامل از محصولات باکیفیت، خدمات تخصصی، و پشتیبانی حرفه‌ای را گرد هم آورده‌ایم تا هر آنچه که پت دوست‌داشتنی‌تان نیاز دارد، در یک مکان قابل دسترس باشد.
                            در پیلیسوک می‌توانید به طیف وسیعی از غذاهای برند، لوازم بهداشتی، اسباب‌بازی، خدمات دامپزشکی، اصلاح و شست‌وشوی حیوانات خانگی و مشاوره تخصصی دسترسی داشته باشید. تیم ما از افراد علاقه‌مند و متخصص تشکیل شده که اولویت‌شان سلامت، شادی و رفاه پت شماست. ما اینجاییم تا تجربه‌ای مطمئن، دلگرم‌کننده و بی‌دردسر از نگهداری حیوان خانگی برای شما بسازیم.</p>
                    </div>
                    {/* image */}
                    <img src="/images/cut-cat.png" alt="cat-cut" />
                </div>
                {/* Examples of our work */}
                <div>
                    <p className="text-2xl/8 md:text-4xl/12 font-danaBold text-primary text-center mt-15 md:mt-20 mb-5 md:mb-15">نمونه کارهای ما</p>
                    <Swiper
                        slidesPerView={1}
                        className="!py-13 !px-4"
                        spaceBetween={30}
                        breakpoints={{
                            640: {
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
                            <AboutCard petName="خپلی" service="اصلاح" image="a1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard petName="غلام" service="شستشو" image="a2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard petName="محمد سُمبل" service="واکسن" image="a3.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard petName="محمود" service="پانسیون" image="a5.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard petName="خالد کشمیری" service="پانسیون" image="cat-res.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard petName="گرگعلی" service="شستشو" image="a6.jpg" />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
}