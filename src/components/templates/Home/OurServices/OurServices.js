import OurServicesCard from "./OurServicesCard";
import { Swiper, SwiperSlide } from 'swiper/react';

export default function OurServices() {
    return (
        <>
        <div className="mt-10 2xs:mt-30 bg-secondary py-15 px-10 lg:px-27.5 flex-center flex-col text-center gap-3">
            <p className="head-title">خـدمات ما</p>
            <p className="title max-w-110">خدماتـی که مارا متمایـز میـکنـد</p>
            <p className="title-desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه می باشد.</p>
            <div className="w-full">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    >
                    <SwiperSlide>1</SwiperSlide>

                    <SwiperSlide>2</SwiperSlide>

                    <SwiperSlide>3</SwiperSlide>
                </Swiper>
            </div>
        </div>
        
        </>
    );
}