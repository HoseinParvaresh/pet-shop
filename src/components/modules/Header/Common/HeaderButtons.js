import Link from "next/link";
import * as motion from "motion/react-client"

export default function HeaderButtons() {
  return (
    <div className="flex items-center justify-between gap-4">
      {/* search button */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <Link href="/" className="hidden lg:inline">
          <svg className="size-7.5 cursor-pointer text-white lg:text-dark-primary">
            <use href="#magnifying-glass-circle"></use>
          </svg>
        </Link>
      </motion.div>
      {/* user button */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <Link href="/auth">
          <svg className="size-7.5 cursor-pointer text-white lg:text-dark-primary">
            <use href="#user-circle"></use>
          </svg>
        </Link>
      </motion.div>
      {/* basket button */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <Link href="/">
          <svg className="size-7 cursor-pointer text-white lg:text-dark-primary">
            <use href="#shopping-bag"></use>
          </svg>
        </Link>
      </motion.div>
      {/* phone number */}
      <button className="btn btn-secondary group relative hidden xl:flex">
        <svg className="size-5 text-primary group-hover:text-white duration-300">
          <use href="#phone"></use>
        </svg>
        <span className="text-white font-dana text-sm">09176437156</span>
        <img
          className="absolute h-full left-3"
          src="/images/paw-header.png"
          alt="phone image"
        />
      </button>
    </div>
  );
}
