import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MdOutlinePets } from "react-icons/md";
import Product from '@/components/modules/Product/Product';

export default function RelatedProducts() {
    return (
        <div className=" bg-secondary rounded-2xl p-4.5 sm:p-5 mt-8">
            {/* Title */}
            <div className="flex items-center gap-x-3 mb-6 sm:mb-7 relative">
                <svg className="hidden md:inline-block text-amber-400 w-9 h-9">
                    <use href="#sparkles"></use>
                </svg>
                <div className="font-MorabbaBold text-xl md:text-2xl"> ویژگی های محصول </div>
            </div>
            {/* products */}
            {/* <Swiper
                pagination={true} 
                modules={[Pagination]}
                className='!px-8 !pb-9'
                slidesPerView={1}
                spaceBetween={35}
            >
                <SwiperSlide>
                    <Product price={30000} discount={false} status={true}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Product price={30000} discount={false} status={true}/>
                </SwiperSlide>

            </Swiper> */}


            <ul class="text-sm md:text-[15px] text-dark-primary rounded-lg">
                <li class="flex items-center gap-2 px-4 py-2">
                    <MdOutlinePets className='size-4 text-primary'/>
                    <span>محکم و با دوام</span>
                </li>
                <li class="flex items-center gap-2 px-4 py-2">
                    <MdOutlinePets className='size-4 text-primary'/>
                    <span>محکم و با دوام</span>
                </li>
                <li class="flex items-center gap-2 px-4 py-2">
                    <MdOutlinePets className='size-4 text-primary'/>
                    <span>محکم و با دوام</span>
                </li>
                <li class="flex items-center gap-2 px-4 py-2">
                    <MdOutlinePets className='size-4 text-primary'/>
                    <span>محکم و با دوام</span>
                </li>
            </ul>

        </div>
    );
}