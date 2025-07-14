import DashboardSectionHeader from "@/components/modules/Dashboard/DashboardSectionHeader";
import TopProductItem from "./TopProductItem";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TopProductsList() {

    const Products = [
        { id: 1, title: "ظرف غذای مخصوص پرندگان", price: 168000, image: "/images/p-1.png", sale: 345 },
        { id: 1, title: "ظرف غذای مخصوص پرندگان", price: 168000, image: "/images/p-1.png", sale: 345 },
        { id: 1, title: "ظرف غذای مخصوص پرندگان", price: 168000, image: "/images/p-1.png", sale: 345 },
        { id: 1, title: "ظرف غذای مخصوص پرندگان", price: 168000, image: "/images/p-1.png", sale: 345 },
        { id: 1, title: "ظرف غذای مخصوص پرندگان", price: 168000, image: "/images/p-1.png", sale: 345 },
        { id: 1, title: "ظرف غذای مخصوص پرندگان", price: 168000, image: "/images/p-1.png", sale: 345 },
    ]

    return (
        <div className="p-4 w-full rounded-lg bg-white">
            <DashboardSectionHeader title={"پرفروش ترین محصولات"} subtitle={" در 7 روز گذشته"} />
            <Swiper
                style={{
                    "--swiper-pagination-color": "#FFBA08",
                    "--swiper-pagination-bullet-inactive-color": "#999999",

                    "--swiper-pagination-bottom" : '-1px',
                    
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mt-4"
            >
                {
                    Products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <TopProductItem  {...product} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}