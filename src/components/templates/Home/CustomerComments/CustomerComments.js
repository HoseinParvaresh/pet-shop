import CustomerComment from "./CustomerComment";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../common/SectionHeader";
import "swiper/css";
import { customerCommentsItems } from "@/Utility/Constants";
export default function CustomerComments() {

    return (
        <div className="container mt-10 2xs:mt-20">
            <SectionHeader title="نظـرات مشتـریان" subTitle="نظـرات برخـی از مشتـریان ما" desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه می باشد." />
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