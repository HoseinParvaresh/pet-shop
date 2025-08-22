import OurServicesCard from "./OurServicesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { OurServicesCards } from "@/Utility/Constants";
import { useInView } from "react-intersection-observer";
import SectionHeader from "../common/SectionHeader";
export default function OurServices() {

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <div className="mt-10 2xs:mt-15 relative bg-secondary py-10 pr-0 pl-4 2xs:px-10 lg:px-27.5 flex-center flex-col text-center gap-3">
        {/* top => head title / title / desc */}
        <SectionHeader
          subTitle={"خدمات ما"}
          Title={"خدماتـی که مارا متمایـز میـکنـد"}
          desc={"در پیلیسوک، خدمات ما فقط رفع نیاز نیست ترکیبی از تخصص، عشق و توجه واقعی به حیوانات خانگی‌ست. همین تفاوت ما را متمایز می‌کند."}
        />
        {/* ous service card */}
        <div ref={ref} className="container px-0 h-[496px] md:h-[508px] xl:h-[516px]">
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
            {inView &&
              OurServicesCards.map((card) => (
                <SwiperSlide key={card.id}>
                  <OurServicesCard {...card} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </>
  );
}
