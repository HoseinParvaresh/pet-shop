import { formatNumber } from "@/Utility/UtilityFunction";

export default function Product() {
    return (
        <div className="relative w-full h-115">
            {/* bottom */}
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
            <div className="absolute bg-secondary border border-black/10 rounded-xl md:rounded-2xl h-4/5 w-[calc(100%-20px)] right-[10px] top-4 p-6">
            {/* image */}
                <div className="bg-gray-200 rounded-full border-10 border-white">
                    <img className="" src="/images/p-1.png" alt="p-1" />
                </div>
                {/* title / price */}
                <div className="text-center">
                    <p className="text-dark-primary font-danaBold line-clamp-1">ظرف غذا مخصوص پرندگان</p>
                    <div className="flex-center gap-1 text-primary font-danaBold">
                        <p>{formatNumber(300000)}</p>
                        <svg class="size-4"><use href="#toman"></use></svg>
                    </div>
                </div>

            </div>
        </div>
    );
}