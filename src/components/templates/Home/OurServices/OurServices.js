import OurServicesCard from "./OurServicesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { OurServicesCards } from "@/Utility/Constants";
export default function OurServices() {

  return (
    <>
      <div className="mt-10 2xs:mt-20 relative bg-secondary py-15 pr-0 pl-4 2xs:px-10 lg:px-27.5 flex-center flex-col text-center gap-3">
        {/* top => head title / title / desc */}
        <div data-aos="fade-down" className="flex-center flex-col text-center gap-3">
          <p className="head-title">خدمات ما</p>
          <p className="title max-w-110">خدماتـی که مارا متمایـز میـکنـد</p>
          <p className="title-desc">در پیلیسوک، خدمات ما فقط رفع نیاز نیست ترکیبی از تخصص، عشق و توجه واقعی به حیوانات خانگی‌ست. همین تفاوت ما را متمایز می‌کند.</p>
        </div>
        {/* ous service card */}
        <div className="container px-0">
          <Swiper
            style={{
              "--swiper-pagination-color": "#F69946",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "0.7",
            }}
            modules={[Pagination]}
            pagination={true}
            slidesPerView={1}
            className="!py-10 !px-5"
            spaceBetween={35}
            breakpoints={{
              640: {
                slidesPerView: 2
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            {
              OurServicesCards.map((card) => (
                <SwiperSlide key={card.id}>
                  <OurServicesCard title={card.title} src={card.src} icon={card.icon} link={card.link} desc={card.desc} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </>
  );
}
