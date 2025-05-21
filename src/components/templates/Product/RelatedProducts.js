export default function RelatedProducts() {
    return (
        <div className="hidden lg:block bg-primary-light dark:bg-primary-dark rounded-2xl p-4.5 sm:p-5 mt-8">
            {/* Title */}
            <div className="flex items-center gap-x-3 mb-6 sm:mb-7 relative">
                <svg className="hidden md:inline-block text-amber-400 w-9 h-9">
                    <use href="#sparkles"></use>
                </svg>
                <div className="font-MorabbaBold text-xl md:text-2xl"> محصولات مرتبط </div>
            </div>
            {/* products */}
            {/* <Swiper
						className='!p-1'
                		breakpoints={
							{
								1024: {
								slidesPerView: 2,
								spaceBetween: 20,
								},
								1280: {
								slidesPerView: 3,
								spaceBetween: 10,
								}
							  }
							}
              			>		
							{
								Props.relatedProduct.map((product,index) => (
									<SwiperSlide key={index}>
										<RelatedProduct {...product} />
									</SwiperSlide>
								  ))
							}			
              		</Swiper> */}
        </div>
    );
}