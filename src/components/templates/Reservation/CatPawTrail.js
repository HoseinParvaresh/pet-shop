import { motion } from "framer-motion";

export default function CatPawTrail() {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-orange-100 rounded-2xl p-4 text-center shadow-lg mx-auto"
    >
      <img src="/images/cat-3.png" alt="Cat" className=" mx-auto" />
      <h2 className="text-lg font-bold mt-2">گربه شیطون</h2>
    </motion.div>
  );
}
