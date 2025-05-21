import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductBanner() {
    return (
        <div className="order-1 w-full xl:h-[360px] rounded-xl">
            <Swiper
                style={{
                    '--swiper-pagination-color': '#16a34a',
                    '--swiper-pagination-bullet-inactive-color': 'gray',
                    '--swiper-pagination-bullet-inactive-opacity': '0.4'
                }}
                zoom={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Zoom, Pagination]}
                className="mySwiper h-full"
            >
                <SwiperSlide>
                    <div className="swiper-zoom-container child:rounded-2xl">
                        <img src='/images/p-1.png' alt='img' loading='lazy' />
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
}