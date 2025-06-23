import { calcDiscountPrice, formatNumber } from "@/Utility/UtilityFunction";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Product({ price, discount, status }) {

    function addToBasket() {

    }
    return (
        <div className="w-full group">
            {/* bottom => button */}
            <div className="bg__footer bg-primary rounded-xl md:rounded-2xl p-3 flex flex-col gap-3 items-center">
                {/* top => image / title / price */}
                <div className=" relative bg-secondary border border-black/10 rounded-xl p-5 group-hover:shadow-xl transition-all duration-400">
                    {/* discount */}
                    <p className={`${discount ? 'flex-center' : 'hidden'} rounded-full size-10 bg-primary absolute font-danaBold text-sm text-white left-3 top-3`}>{discount}%</p>
                    {/* image */}
                    <Link href={"/product/2"}>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="bg-gray-200 rounded-full border-10 border-white">
                                <img src="/images/p-1.png" alt="p-1" />
                            </div>
                        </motion.div>
                    </Link>

                    {/* title / price */}
                    <div className="text-center flex flex-col gap-2 mt-5">
                        {/* title */}
                        <Link href={"/product/2"} className="text-dark-primary font-danaBold line-clamp-1 text-base xs:text-sm sm:text-base">ظرف غذا مخصوص پرندگان</Link>
                        {/* price */}
                        <div className="flex-center gap-1">
                            <p className={` ${discount && status ? 'block' : 'hidden'} text-xs text-gray-400 line-through`}>{formatNumber(price)}</p>
                            <p className={`${status ? 'block' : 'hidden'} text-primary font-danaBold text-base xs:text-sm sm:text-base`}>{discount ? formatNumber(calcDiscountPrice(price, discount)) : formatNumber(price)}</p>
                            <p className={`${!status ? 'block' : 'hidden'} text-red-500 font-danaBold`}>ناموجود</p>
                            <svg className={`${status ? 'block' : 'hidden'} size-3 sm:size-4 text-primary`}><use href="#toman"></use></svg>
                        </div>
                    </div>

                </div>
                {/* button */}
                <button onClick={addToBasket} className="btn w-full btn-secondary text-xs rounded-xl py-3 hover:bg-gray-800">
                    <span>افزودن به سبدخرید</span>
                    <svg className="size-4 text-white">
                        <use href="#shopping-cart-solid"></use>
                    </svg>
                </button>
            </div>
        </div>
    );
}