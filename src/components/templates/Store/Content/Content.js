import Product from "@/components/modules/Product/Product";

export default function Content() {

    const sortButtonHandler = (e) => {
        document.querySelector('.sort-btn--active').classList.remove('sort-btn--active')
        e.target.classList.add('sort-btn--active')
    }

    return (
        <section className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
            {/* <!-- Filter button in Mobile Size --> */}
            <div className="flex md:hidden items-center gap-6 mb-8">
                {/* filter */}
                <div className="btn btn-primary btn-xl bg-white w-full">
                    <svg className="w-6 h-6 shrink-0">
                        <use href="#funnel"></use>
                    </svg>
                    <span>فیلتر</span>
                </div>
            </div>
            {/* <!-- product Sort => desktop size --> */}
            <div className="hidden md:flex items-center gap-x-6 px-5 mb-8 h-16 bg-secondary shadow-normal dark:shadow-none rounded-xl">
                {/* title */}
                <div className="flex items-center shrink-0 gap-x-2">
                    <svg className="w-7 h-7">
                        <use href="#arrows-up-down"></use>
                    </svg>
                    <span className="font-dana">مرتب سازی بر اساس :</span>
                </div>
                {/* sort */}
                <div className="flex gap-x-5 lg:gap-x-8 h-full ">
                    <a onClick={sortButtonHandler} href={"#"} data-id="default" className="sort-btn sort-btn--active" role="button"> همه محصولات </a>
                    <a onClick={sortButtonHandler} href={"#"} data-id="cheapest" className="sort-btn" role="button"> ارزان ترین</a>
                    <a onClick={sortButtonHandler} href={"#"} data-id="most-expensive" className="sort-btn" role="button"> گران ترین </a>
                    <a onClick={sortButtonHandler} href={"#"} data-id="best-seller" className="sort-btn" role="button"> پرفروش ترین  </a>
                </div>
            </div>
            {/* <!-- product List --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
                <Product/>
                <Product/>
                <Product/>
            </div>
            {/* <!-- Show more Button --> */}
            <button type="button" className="show-more btn btn-xl btn-primary w-full sm:w-auto mt-10 mx-auto">
                مشاهده بیشتر
                <svg className="show-more__icon w-6 h-6">
                    <use href="#chevron-down"></use>
                </svg>
                <svg className="show-more__loading hidden w-6 h-6 animate-spin animate-reverse">
                    <use href="#refresh"></use>
                </svg>
            </button>
        </section>
    );
}