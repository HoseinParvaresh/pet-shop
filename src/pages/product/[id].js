import { useState } from 'react';
import Breadcrumb from '@/components/templates/Product/Breadcrumb';
import ProductBanner from '../../components/templates/Product/ProductBanner';
import ProductInfo from '../../components/templates/Product/ProductInfo';
import Summary from '../../components/templates/Product/Summary';
import Description from '@/components/templates/Product/Description';
import RelatedProducts from '@/components/templates/Product/RelatedProducts';
import Comments from '@/components/templates/Product/Comments';
// import Summary from '../Common/Summary';
// import RelatedProduct from './RelatedProduct'
// import Comments from './Comment/Comments';
// import Description from './Description';
// import { FormatNumber,calcDiscountPrice } from './../../../Utils/helperFunction';


export default function Main(Props) {

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
                        <Description />
                        <RelatedProducts />
                        <Comments />
                        {/* Comments */}
                        {/* <Comments comment={Props.comments}/> */}
                    </div>
                    {/* Rating */}
                    <aside className="col-span-12 lg:col-span-4 space-y-8">
                        {/* Rating */}
                        <div className="bg-secondary rounded-2xl p-4.5 sm:p-5">
                            <div className="flex gap-x-4">
                                <div className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-2.5 bg-gray-100 dark:bg-primary-darker rounded-xl">
                                    <svg className="w-10 h-10 md:w-11 md:h-11 text-primary">
                                        <use href="#user-group-mini"></use>
                                    </svg>
                                    <div>
                                        <span className="block font-bold text-sm md:text-base">123</span>
                                        <span className="block text-sm opacity-70">موجود در انبار</span>
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
                    </aside>
                </section>
            </div>
        </main>
    )
}



