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
            در پیلیسوک، خدمات ما فقط رفع نیاز نیست ترکیبی از تخصص، عشق و توجه واقعی به حیوانات خانگی‌ست.
            همین تفاوت ما را متمایز می‌کند.
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
                link={"/about"}
                desc={
                  "رفتار خوب، با آموزش درست شروع می‌شه! در پیلیسوک، مربیان حرفه‌ای با روش‌های مهربون و اصولی به پت شما آموزش می‌دن تا زندگی کنار هم راحت‌تر و شادتر باشه."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <OurServicesCard
                title={"سلامت حیوانات"}
                src={"/images/service-2.jpg"}
                icon={"paw-header"}
                link={"/about"}
                desc={
                  "سلامتی پت‌ها برای ما اولویت شماره یکه! خدمات دامپزشکی پیلیسوک با حضور پزشکان مجرب، شامل واکسیناسیون، معاینه، چکاپ و مشاوره تخصصی هست."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <OurServicesCard
                title={"نگهداری حیوانات"}
                src={"/images/service-3.jpg"}
                icon={"service-3-bg"}
                link={"/about"}
                desc={
                  "نگران تنها موندن پت عزیزتون نباشید! ما در پیلیسوک با محیطی امن، تمیز و شاد، از حیوانات خانگی شما مثل یکی از اعضای خانواده مراقبت می‌کنیم."
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
