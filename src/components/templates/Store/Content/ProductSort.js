export default function ProductSort() {

    const sortButtonHandler = (e) => {
        document.querySelector('.sort-btn--active').classList.remove('sort-btn--active')
        e.target.classList.add('sort-btn--active')
    }

    const productSortList = [
        {id:1,title:"همه محصولات",dataId:"default",first:true},
        {id:2,title:"ارزان ترین",dataId:"cheapest",first:false},
        {id:3,title:"گران ترین",dataId:"most-expensive",first:false},
        {id:4,title:"پرفروش ترین",dataId:"best-seller",first:false},
        {id:5,title:"محبوب ترین",dataId:"most-popular",first:false},
    ]
    
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
                {
                    productSortList.map((item) => (
                        <p key={item.id} onClick={sortButtonHandler} data-id={item.dataId} className={`sort-btn ${item.first ? 'sort-btn--active' : ''}`} role="button"> {item.title} </p>
                    ))
                }
            </div>
        </div>
    );
}