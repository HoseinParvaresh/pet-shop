import { useState } from 'react';
import Breadcrumb from './Breadcrumb';
import ProductBanner from './ProductBanner';
import ProductInfo from './ProductInfo';
import Summary from './Summary';
// import Summary from '../Common/Summary';
// import RelatedProduct from './RelatedProduct'
// import Comments from './Comment/Comments';
// import Description from './Description';
// import { FormatNumber,calcDiscountPrice } from './../../../Utils/helperFunction';


export default function Main(Props) {


    const [productContent, setProductContent] = useState('max-h-[400px]')
    const [productContentShadow, setProductContentShadow] = useState('')
    const [btnContent, setBtnContent] = useState('مشاهده بیشتر مطلب')
    const [btnRotate, setBtnRotate] = useState('')
    const [showContent, setShowContent] = useState(false)

    const showFullContent = () => {

        if (showContent) {
            setProductContent('max-h-[400px]')
            setProductContentShadow('')
            setBtnContent('مشاهده بیشتر مطلب')
            setBtnRotate('')
            setShowContent(false)
        } else {
            setProductContent('max-h-full')
            setProductContentShadow('hidden')
            setBtnContent('مشاهده کمتر مطلب')
            setBtnRotate('rotate-180')
            setShowContent(true)
        }
    }

    return (
        <main className='max-w-[1920px] m-h mx-auto overflow-x-hidden mt-8 sm:mt-10'>
            <div className='container'>
                {/* Breadcrumb */}
                <Breadcrumb />
                {/* product Info / & product Btn & Price */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-4.5 gap-x-6 sm:gap-x-7 lg:items-center xl:items-stretch mt-8 sm:mt-10 rounded-2xl p-4.5 lg:p-0 bg-secondary lg:!bg-transparent border border-neutral-100 lg:border-none">
                    <ProductInfo />
                    <ProductBanner />
                </section>
                {/* Summary & Description & Related products & Comments / product Teacher & Rating */}
                <section className="grid grid-cols-12 gap-6 sm:gap-7 mt-7 lg:mt-20">
                    {/* product Box Info(Summary) & Description & Related products & Comments */}
                    <div className="col-span-12 lg:col-span-8">
                            <Summary />
                        {/* Description */}
                        <div className="bg-primary-light dark:bg-primary-dark rounded-2xl p-4.5 sm:p-5 mt-8">
                            {/* title */}
                            <div className="flex items-center gap-x-2 mb-5 sm:mb-6 relative">
                                <svg className="inline-block text-amber-400 w-7 h-7 md:w-9 md:h-9">
                                    <use href="#document-text-fill"></use>
                                </svg>
                                <div className="font-MorabbaBold text-xl md:text-2xl">توضیحات</div>
                            </div>
                            {/* text */}
                            <div className="relative overflow-hidden">
                                <div className={`${productContent} wp-content text-primary-darker dark:text-gray-300 child:leading-7 child:my-5`}>
                                    {/* <Description items={Props.description}/> */}
                                </div>
                                <div className={`${productContentShadow} absolute bottom-0 right-0 left-0 h-[160px] bg-gradient-to-t from-primary-light dark:from-primary-dark from-0% via-primary-light/[55%] dark:via-primary-dark/[55%] via-70% to-primary-light/0 dark:to-primary-dark/0 to-100%`}></div>
                            </div>
                            {/* btn */}
                            <button type="button" className="button-xl button-primary w-full sm:w-auto mx-auto mt-5" onClick={showFullContent}>
                                <span>  </span>
                                <svg className={` w-6 h-6`}>
                                    <use href="#chevron-down"></use>
                                </svg>
                            </button>
                        </div>


                        {/* <!-- Related products --> */}
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
                        {/* Comments */}
                        {/* <Comments comment={Props.comments}/> */}
                    </div>
                    {/* product Teacher & Rating */}
                    <aside className="col-span-12 lg:col-span-4 space-y-8">
                        {/* Rating */}
                        <div className="bg-primary-light dark:bg-primary-dark rounded-2xl p-4.5 sm:p-5">
                            <div className="flex gap-x-4">
                                <div className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-2.5 bg-gray-100 dark:bg-primary-darker rounded-xl">
                                    <svg className="w-10 h-10 md:w-11 md:h-11 text-primary">
                                        <use href="#user-group-mini"></use>
                                    </svg>
                                    <div>
                                        <span className="block font-bold text-sm md:text-base">123</span>
                                        <span className="block text-sm opacity-70">خریدار</span>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-2.5 bg-gray-100 dark:bg-primary-darker rounded-xl">
                                    <svg className="w-10 h-10 md:w-11 md:h-11 text-amber-500">
                                        <use href="#star-mini"></use>
                                    </svg>
                                    <div>
                                        <span className="block font-bold text-sm md:text-base">5.0</span>
                                        <span className="block text-sm opacity-70">امتیاز</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- product user --> */}
                        <div className="bg-primary-light dark:bg-primary-dark rounded-2xl pt-6 px-4.5 pb-4.5 md:py-6 md:px-5 text-center">
                            <img className="block mb-4 mx-auto object-cover rounded-full" width="90" height="90" src='#' alt='image' loading='lazy' />
                            <span className="font-DanaBold text-lg mb-2"> ممد | نویسنده </span>
                            <p className="mt-2"></p>
                            <div className="button-primary button-outline button-lg mx-auto mt-4"> مشاهده کتاب های بیشتر </div>
                        </div>
                    </aside>
                </section>
            </div>
        </main>
    )
}



