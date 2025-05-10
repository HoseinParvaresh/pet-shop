export default function Product() {
    return (
        <div className="relative w-full h-115">
            {/* bttom */}
            <div className="absolute bg__footer bg-primary h-4/5 w-full bottom-0 rounded-xl md:rounded-2xl">

            </div>
            {/* top */}
            <div className="absolute bg-secondary border border-black/10 rounded-xl md:rounded-2xl h-4/5 w-[calc(100%-20px)] right-[10px] top-0">

            </div>
        </div>
    );
}