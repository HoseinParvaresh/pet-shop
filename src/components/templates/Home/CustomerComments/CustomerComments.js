import CustomerComment from "./CustomerComment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function CustomerComments() {
    return (
        <div className="container mt-10 2xs:mt-30">
            {/* top => head title / title / desc */}
            <div data-aos="fade-down" className="flex-center flex-col text-center gap-3">
                <p className="head-title">نظـرات مشتـریان</p>
                <p className="title max-w-110">نظـرات برخـی از مشتـریان ما</p>
                <p className="title-desc">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                    از طراحان گرافیک است چاپگرها و متون بلکه روزنامه می باشد.
                </p>
            </div>
            {/* bottom => comments */}
            <div data-aos="fade-up" className="flex gap-15">
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    className="!py-10 !px-2 md:!px-5"
                    spaceBetween={40}
                    breakpoints={{
                        1024: {
                            slidesPerView: 2
                        }
                    }}
                >
                    <SwiperSlide>
                        <CustomerComment
                            userProfileSrc="/images/c-1.jpg"
                            petProfileSrc="/images/p-1.jpg"
                            name="حسین پرورش"
                            petName="جسیکا"
                            rate={4}
                            desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CustomerComment
                            userProfileSrc="/images/c-1.jpg"
                            petProfileSrc="/images/p-1.jpg"
                            name="حسین پرورش"
                            petName="جسیکا"
                            rate={4}
                            desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CustomerComment
                            userProfileSrc="/images/c-1.jpg"
                            petProfileSrc="/images/p-1.jpg"
                            name="حسین پرورش"
                            petName="جسیکا"
                            rate={4}
                            desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CustomerComment
                            userProfileSrc="/images/c-1.jpg"
                            petProfileSrc="/images/p-1.jpg"
                            name="حسین پرورش"
                            petName="جسیکا"
                            rate={4}
                            desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}