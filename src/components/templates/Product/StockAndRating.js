import { LiaClipboardListSolid } from "react-icons/lia";

export default function StockAndRating() {
    return (
        <div className="bg-secondary rounded-2xl p-4.5 sm:p-5">
            <div className="flex gap-x-4">
                {/* stock */}
                <div className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-2.5 bg-dark-primary/10 rounded-xl">
                    <LiaClipboardListSolid className='size-10 text-primary' />
                    <div>
                        <span className="block font-bold text-sm md:text-base">123</span>
                        <span className="block text-sm opacity-70">موجود در انبار</span>
                    </div>
                </div>
                {/* Rating */}
                <div className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-2.5 bg-dark-primary/10 rounded-xl">
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
    );
}