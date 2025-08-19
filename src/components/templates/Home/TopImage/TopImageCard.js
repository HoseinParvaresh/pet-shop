import { memo } from "react";
import { motion } from 'framer-motion';
const TopImageCard = memo(function TopImageCard({ id, title, desc, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: id * 0.3 }}
      className="flex items-center p-3 gap-3 w-full md:w-55 lg:w-75 2xl:w-95 shadow bg-white hover:bg-dark-primary hover:-translate-y-4 rounded-xl transition duration-300 group animate__animated animate__fadeInUp"
    >
      {/* img */}
      <img className="size-10 lg:size-15" src={image} alt={title} />
      {/* title / desc */}
      <div className="flex flex-col gap-2">
        <p className="font-MorabbaBold text-[15px] lg:text-lg text-dark-primary group-hover:text-white">{title}</p>
        <p className="text-[10px] lg:text-[13px] text-dark-secondary group-hover:text-white line-clamp-2">{desc}</p>
      </div>
    </motion.div >
  );
});

export default TopImageCard;
