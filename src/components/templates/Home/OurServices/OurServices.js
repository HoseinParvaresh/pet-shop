import OurServicesCard from "./OurServicesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function OurServices() {
  return (
    <>
      <div className="mt-10 2xs:mt-20 relative bg-secondary py-15 pr-0 pl-4 2xs:px-10 lg:px-27.5 flex-center flex-col text-center gap-3">
        {/* top => head title / title / desc */}
        <div data-aos="fade-down" className="flex-center flex-col text-center gap-3">
          <p className="head-title">خـدمات ما</p>
          <p className="title max-w-110">خدماتـی که مارا متمایـز میـکنـد</p>
          <p className="title-desc">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
            از طراحان گرافیک است چاپگرها و متون بلکه روزنامه می باشد.
          </p>
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
            <SwiperSlide>
              <OurServicesCard
                title={"آموزش حیوانات"}
                src={"/images/service-1.jpg"}
                icon={"service-1-bg"}
                link={"/"}
                desc={
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <OurServicesCard
                title={"سلامت حیوانات"}
                src={"/images/service-2.jpg"}
                icon={"paw-header"}
                link={"/"}
                desc={
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <OurServicesCard
                title={"نگهداری حیوانات"}
                src={"/images/service-3.jpg"}
                icon={"service-3-bg"}
                link={"/"}
                desc={
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
