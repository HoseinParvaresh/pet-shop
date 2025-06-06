import { MdOutlinePets } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
export default function ProductFeatures() {
    return (
        <div className="bg-secondary rounded-2xl p-4.5 sm:p-5 mt-8">
            {/* Title */}
            <div className="flex items-center gap-x-3 mb-6 sm:mb-7 relative">
                <AiFillProduct className="inline-block text-amber-400 size-6 md:size-9"/>
                <div className="font-MorabbaBold text-xl md:text-2xl"> ویژگی های محصول </div>
            </div>

            <ul class="text-sm md:text-[15px] text-dark-primary rounded-lg">
                <li class="flex items-center gap-2 px-4 py-2">
                    <MdOutlinePets className='size-4 text-primary'/>
                    <span>محکم و با دوام</span>
                </li>
                <li class="flex items-center gap-2 px-4 py-2">
                    <MdOutlinePets className='size-4 text-primary'/>
                    <span>محکم و با دوام</span>
                </li>
                <li class="flex items-center gap-2 px-4 py-2">
                    <MdOutlinePets className='size-4 text-primary'/>
                    <span>محکم و با دوام</span>
                </li>
                <li class="flex items-center gap-2 px-4 py-2">
                    <MdOutlinePets className='size-4 text-primary'/>
                    <span>محکم و با دوام</span>
                </li>
            </ul>

        </div>
    );
}