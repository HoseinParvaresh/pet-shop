import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Product from '@/components/modules/Product/Product';

export default function RelatedProducts() {
    return (
        <div className=" bg-secondary rounded-2xl p-4.5 sm:p-5 mt-8">
            {/* Title */}
            <div className="flex items-center gap-x-3 mb-6 sm:mb-7 relative">
                <svg className="hidden md:inline-block text-amber-400 w-9 h-9">
                    <use href="#sparkles"></use>
                </svg>
                <div className="font-MorabbaBold text-xl md:text-2xl"> محصولات مرتبط </div>
            </div>
            {/* products */}
            <Swiper
                modules={Pagination}
                className='!px-8'
                slidesPerView={1}
                spaceBetween={35}
            >
                <SwiperSlide>
                    <Product price={30000} discount={false} status={true}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Product price={30000} discount={false} status={true}/>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}