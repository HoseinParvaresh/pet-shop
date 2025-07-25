import TopProductItem from "./TopProductItem";
import DashboardSectionHeader from "../common/DashboardSectionHeader";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { TopProductsListData } from "@/Utility/Constants";

export default function TopProductsList() {

    const Products = [
        { id: 1, title: "غذای مخصوص گربه", price: 168000, image: "/images/p-4.png", sale: 4001,data:TopProductsListData[0] },
        { id: 2, title: "اسباب بازی خوراکی سگ", price: 245000, image: "/images/p-2.png", sale: 3894,data:TopProductsListData[1] },
        { id: 3, title: "اسباب بازی گربه", price: 489000, image: "/images/p-5.png", sale: 3647,data:TopProductsListData[2] },
        { id: 4, title: "ظرف غذای مخصوص پرندگان", price: 83000, image: "/images/p-1.png", sale: 3308,data:TopProductsListData[3] },

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
                slidesPerView={1}
                breakpoints={{
                    530: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 1
                    },
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