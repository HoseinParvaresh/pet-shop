export default function SectionName() {
    return (
        <div className="flex flex-col sm:flex-row gap-y-2 items-center justify-between mb-8 lg:mb-15">
            <div className="flex gap-2.5 items-center">
                <span className="hidden sm:inline-block w-4 h-4 bg-amber-400 rounded-sm"></span>
                <h2 className="font-MorabbaBold text-2xl lg:text-3xl text-center"> فروشگاه </h2>
            </div>
            <span className="sm:text-xl font-danaMedium text-slate-500"><span id="count_item_archive">74</span> محصول</span>
        </div>
    );
}