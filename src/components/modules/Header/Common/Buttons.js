export default function Buttons() {
  return (
    <div className="flex items-center justify-between gap-4">
      {/* search button */}
      <a href="/">
        <svg className="size-7.5 cursor-pointer text-dark-primary hover:text-dark-primary/60 transition-colors duration-300">
          <use href="#magnifying-glass-circle"></use>
        </svg>
      </a>
      {/* user button */}
      <a href="/">
        <svg className="size-7.5 cursor-pointer text-dark-primary hover:text-dark-primary/60 transition-colors duration-300">
          <use href="#user-circle"></use>
        </svg>
      </a>
      {/* basket button */}
      <a href="/">
        <svg className="size-7 cursor-pointer text-dark-primary hover:text-dark-primary/60 transition-colors duration-300">
          <use href="#shopping-bag"></use>
        </svg>
      </a>
      {/* favorite button */}
      <a href="/">
        <svg className="size-7 cursor-pointer text-dark-primary hover:text-dark-primary/60 transition-colors duration-300">
          <use href="#heart"></use>
        </svg>
      </a>
      {/* phone number */}
      <button className="flex-center gap-3 bg-dark-primary px-6 py-2 rounded-lg relative cursor-pointer hover:bg-primary transition-colors duration-300 group">
        <svg className="size-5 text-primary group-hover:text-white duration-300">
          <use href="#phone"></use>
        </svg>
        <span className="text-white font-dana text-sm">09176437156</span>
        <img className="absolute h-full left-3" src="/images/paw-header.png" alt="phone image" />
      </button>
    </div>
  );
}
