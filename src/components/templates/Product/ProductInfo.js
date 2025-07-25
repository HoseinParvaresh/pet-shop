import { PiWarningCircle } from "react-icons/pi";

export default function ProductInfo() {
    return (
        <div className="flex flex-col justify-between order-2 lg:order-1">
            {/* product Name & Description */}
            <div>
                {/* Name */}
                <h1 className="text-xl sm:text-[1.625rem]/10 mb-5 font-MorabbaBold text-dark-primary">ظرف غذا مخصوص پرندگان</h1>
                {/* Description */}
                {/* <p className="text-sm sm:text-base line-clamp-4 sm:line-clamp-3 text-dark-secondary">غذا عالی برای پرندگان</p> */}
                <div className="h-36 border border-primary rounded-lg">

                </div>
            </div>
            {/* product Btn & Price & Discount Price */}
            <div className="space-y-5 mt-5 xl:mt-0">
                {/* Discount */}
                <div className="text-center lg:text-right">
                    <span className="font-danaBold sm:text-xl text-red-700/80"><span>20</span>% تخفیف شگفت انگیز</span>
                </div>
                {/* product Btn (add to basket) / Price  / warning / quantity input */}
                <div className={`flex justify-center xl:items-center lg:justify-between flex-wrap-reverse gap-y-4 gap-x-6`}>
                    {/* warning */}
                    <div className="flex items-center gap-1 text-right">
                        <PiWarningCircle className="text-primary shrink-0" />
                        <span className="text-xs text-dark-secondary/80 mt-1"> امکان برگشت کالا با دلیل انصراف از خرید تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد. </span>
                    </div>
                    {/* add to basket button */}
                    <button className="btn btn-primary btn-xl w-full flex-center gap-2 sm:w-auto">
                        <svg className="size-6">
                            <use href="#shopping-cart-solid"></use>
                        </svg>
                        افزودن به سبد خرید
                    </button>
                    {/* <!-- Price --> */}
                    <div className="flex items-end gap-x-2.5 text-primary">
                        <span className="text-gray-400 text-xl line-through">600000</span>
                        <span className="text-2xl font-danaBold flex items-center justify-center gap-2">
                            120000
                            <svg className="w-6 h-6">
                                <use href="#toman">
                                </use>
                            </svg>
                        </span>
                    </div>
                </div>

                {/* <div className={` bg-primary-light dark:bg-primary-dark p-4 rounded-xl`}>
                    <p className='font-danaBold sm:text-xl lg:text-2xl lg:text-center xl:text-right text-red-500'> فعلا موجود نیست </p>
                </div> */}
            </div>
        </div>
    );
}