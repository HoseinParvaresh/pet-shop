export default function TopImageCard({ title, desc, src }) {
  return (
    <div className="flex-center gap-5 px-5 py-4 shadow-md max-w-85 bg-white hover:bg-dark-primary hover:text-white rounded-xl transition-colors duration-300 animate__animated animate__fadeInUp">
      {/* img */}
      <img className="size-15" src={src} alt="" />
      {/* title / desc */}
      <div className="flex flex-col gap-2">
        <p className="font-MorabbaBold text-xl text-dark-primary">{title}</p>
        <p className="text-sm text-dark-secondary">{desc}</p>
      </div>
    </div>
  );
}
