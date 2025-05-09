export default function SearchBox() {
    return (
        <div className="h-17 bg-primary/10 rounded-xl p-4 md:p-5 flex items-center justify-between">
            <div className="flex justify-between gap-x-6 h-full text-slate-500">
                <input type="text" name="s" className="placeholder-black/50 bg-transparent flex-grow outline-none" placeholder="جستجو بین محصولات" />
            </div>
            <button type="submit" className="btn btn-primary py-1.5 px-2 md:py-2.5 md:px-3">
                <svg className="size-6 cursor-pointer">
                    <use href="#magnifying-glass"></use>
                </svg>
            </button>
        </div>
    );
}