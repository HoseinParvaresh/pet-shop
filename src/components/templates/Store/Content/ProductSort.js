export default function ProductSort() {

    const sortButtonHandler = (e) => {
        document.querySelector('.sort-btn--active').classList.remove('sort-btn--active')
        e.target.classList.add('sort-btn--active')
    }
    
    return (
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
    );
}