
import { MdOutlinePets } from "react-icons/md";
import { convertDate } from "@/Utility/UtilityFunction";
import Alert from "@/Utility/Alert";
import { motion } from "framer-motion";
export default function LastArticle({ id, title, author, date, commentNumber, desc, image }) {

    function clickHandler() {
        Alert("info", "این بخش در حال توسعه است و به‌زودی در دسترس قرار می‌گیره")
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: id * 0.3 }}
            className="w-full md:max-w-78 bg-white group rounded-lg overflow-hidden hover:shadow-xl transition-all duration-400">
            {/* top => image */}
            <div className="relative h-50">
                <img className=" object-cover w-full h-full" src={image} alt={`post-${id}`} />
                <p className="absolute bg-primary py-1.5 px-3 rounded-l-[10px] top-46 md:top-47 text-white font-danaBold text-sm">{convertDate(date, true)}</p>
            </div>
            {/* bottom =>  author / comment number / title / desc / button */}
            <div className="px-4 py-5 flex flex-col gap-2 mt-3">
                {/* author / comment number */}
                <div className="text-xs text-black/40 flex items-center gap-2 line-clamp-1">
                    <p>{author}</p>
                    <div className="w-[1px] h-5 bg-black/10"></div>
                    <p><span>{commentNumber}</span> دیدگاه </p>
                </div>
                {/* title */}
                <p onClick={clickHandler} className="line-clamp-2 h-14 font-MorabbaBold text-lg text-dark-primary group-hover:text-primary transition-colors cursor-pointer">{title}</p>
                {/* desc */}
                <p className="line-clamp-2 text-[13px] text-black/40">{desc}</p>
                {/* button */}
                <div className="flex text-sm items-center gap-1 text-dark-primary font-danaBold mt-2 cursor-pointer">
                    <MdOutlinePets className="text-primary size-5 -rotate-45 group-hover:rotate-45 transition-transform duration-500" />
                    <p onClick={clickHandler}> ادامه مطلب </p>
                </div>
            </div>
        </motion.div>
    );
}