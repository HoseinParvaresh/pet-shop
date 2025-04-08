import Link from "next/link";

export default function HeaderButtons() {
  return (
    <div className="flex items-center justify-between gap-4">
      {/* search button */}
      <Link href="/" className="hidden lg:inline">
        <svg className="size-7.5 cursor-pointer text-white lg:text-dark-primary hover:text-white/60 lg:hover:text-dark-primary/60 transition-colors duration-300">
          <use href="#magnifying-glass-circle"></use>
        </svg>
      </Link>
      {/* favorite button */}
      <Link href="/" className="hidden lg:inline">
        <svg className="size-7 cursor-pointer text-white lg:text-dark-primary lg:hover:text-dark-primary/60 hover:text-white/60 transition-colors duration-300">
          <use href="#heart"></use>
        </svg>
      </Link>
      {/* user button */}
      <Link href="/">
        <svg className="size-7.5 cursor-pointer text-white lg:text-dark-primary lg:hover:text-dark-primary/60 hover:text-white/60 transition-colors duration-300">
          <use href="#user-circle"></use>
        </svg>
      </Link>
      {/* basket button */}
      <Link href="/">
        <svg className="size-7 cursor-pointer text-white lg:text-dark-primary lg:hover:text-dark-primary/60 hover:text-white/60 transition-colors duration-300">
          <use href="#shopping-bag"></use>
        </svg>
      </Link>
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
