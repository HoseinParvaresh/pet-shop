export default function TopImageCard({ title, desc, src }) {
  return (
    <div className="flex items-center justify-start md:flex-center gap-4 lg:gap-5 px-3 lg:px-5 py-2 lg:py-4 shadow-md w-full md:w-auto md:max-w-85 bg-white hover:bg-dark-primary hover:-translate-y-4 rounded-xl transition duration-300 group animate__animated animate__fadeInUp">
      {/* img */}
      <img className="size-10 lg:size-15" src={src} alt={title} />
      {/* title / desc */}
      <div className="flex flex-col gap-2">
        <p className="font-MorabbaBold text-base lg:text-xl text-dark-primary group-hover:text-white">{title}</p>
        <p className="text-xs lg:text-sm text-dark-secondary group-hover:text-white">{desc}</p>
      </div>
    </div>
  );
}
