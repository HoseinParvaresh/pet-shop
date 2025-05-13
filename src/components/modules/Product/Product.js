import { calcDiscountPrice, formatNumber } from "@/Utility/UtilityFunction";

export default function Product({ price, discount }) {
    return (
        <div className="relative w-full h-110 2xs:h-140 xs:h-100 sm:h-115 xl:h-100 2xl:h-115">
            {/* bottom => button */}
            <div className="absolute bg__footer bg-primary h-4/5 w-full bottom-0 rounded-xl md:rounded-2xl flex justify-center items-end pb-5">
                {/* button */}
                <button className="btn btn-secondary text-xs rounded-full py-3 bottom-0 hover:bg-gray-800">
                    <span>افزودن به سبدخرید</span>
                    <svg class="size-4 text-white">
                        <use href="#shopping-cart-solid"></use>
                    </svg>
                </button>
            </div>
            {/* top => image / title / price */}
            <div className="absolute flex flex-col justify-between xl:justify-around 2xl:justify-between bg-secondary border border-black/10 rounded-xl md:rounded-2xl h-4/5 w-[calc(100%-20px)] right-[10px] top-3 2xs:top-9 xs:top-2 sm:top-4 xl:top-2 2xl:top-4 
                            pt-7 pb-3 px-5 3xs:px-10 xs:px-1 xs:py-4 sm:pb-6 sm:pt-8 sm:px-6 md:py-5 md:px-10 lg:p-6">
                {/* discount */}
                <p className={`${discount ? 'flex-center' : 'hidden'} rounded-full size-10 bg-primary absolute font-danaBold text-sm text-white left-3 top-3`}>{discount}%</p>
                {/* image */}
                <div className="3xs:p-2 xs:p-0 sm:p-0">
                    <div className="bg-gray-200 rounded-full border-10 border-white">
                        <img className="" src="/images/p-1.png" alt="p-1" />
                    </div>
                </div>
                {/* title / price */}
                <div className="text-center flex flex-col gap-2">
                    {/* title */}
                    <p className="text-dark-primary font-danaBold line-clamp-1 text-base xs:text-sm sm:text-base">ظرف غذا مخصوص پرندگان</p>
                    {/* price */}
                    <div className="flex-center gap-1">
                        <p className={` ${discount ? 'block' : 'hidden'} text-xs text-gray-400 line-through`}>{formatNumber(price)}</p>
                        <p className="text-primary font-danaBold text-base xs:text-sm sm:text-base">{discount ? formatNumber(calcDiscountPrice(price, discount)) : formatNumber(price)}</p>
                        <svg class="size-3 sm:size-4 text-primary"><use href="#toman"></use></svg>
                    </div>
                </div>

            </div>
        </div>
    );
}