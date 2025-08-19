import Breadcrumb from '@/components/templates/Product/Breadcrumb';
import ProductBanner from '../../components/templates/Product/ProductBanner';
import ProductInfo from '../../components/templates/Product/ProductInfo';
import Summary from '../../components/templates/Product/Summary';
import Description from '@/components/templates/Product/Description';
import Comments from '@/components/templates/Product/comments/Comments';
import ProductFeatures from '@/components/templates/Product/ProductFeatures';
import StockAndRating from '@/components/templates/Product/StockAndRating';
import ProductActions from '@/components/templates/Product/ProductActions';
import Head from 'next/head'

export default function Main() {

    // useEffect(() => {
    //     addToRecentlyViewed(productId);
    //   }, [productId]);

    return (
        <>
            <div>
                <Head>
                    <title>ظرف غذا مخصوص پرندگان</title>
                </Head>
            </div>
            <main className='max-w-[1920px] m-h mx-auto overflow-x-hidden mt-8 sm:mt-10 mb-10'>
                <div className='container'>
                    <div className='flex flex-col xs:flex-row items-center gap-y-3 justify-between'>
                        <Breadcrumb />
                        <ProductActions />
                    </div>
                    {/* product Info / ProductBanner */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-4.5 gap-x-6 sm:gap-x-7 xl:justify-items-end lg:items-center xl:items-stretch mt-8 sm:mt-10 rounded-2xl p-4.5 lg:p-0 bg-secondary lg:!bg-transparent border border-neutral-100 lg:border-none">
                        <ProductInfo />
                        <ProductBanner />
                    </section>
                    {/* Summary & Description & Comments / Rating & stock */}
                    <section className="grid grid-cols-12 gap-6 sm:gap-7 mt-7 lg:mt-15">
                        {/* Summary / Description / Comments */}
                        <div className="col-span-12 lg:col-span-8">
                            <Summary />
                            <Description />
                        </div>
                        {/* Rating And stock / ProductFeatures  */}
                        <aside className="col-span-12 lg:col-span-4 space-y-8">
                            <StockAndRating />
                            <ProductFeatures />
                        </aside>
                        <div className='col-span-12 lg:col-span-8'>
                            <Comments />
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}



