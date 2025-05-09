export default function SearchBox() {
    return (
        <div className="h-17 bg-white rounded-xl p-4 md:p-5">
            <div className="flex justify-between gap-x-6 h-full text-slate-500">
                <input type="text" name="s" className="placeholder-slate-500 bg-transparent flex-grow outline-none" placeholder="جستجو بین محصولات" />
                <button type="submit">
                    <svg className="w-7 h-7 cursor-pointer">
                        <use href="#magnifying-glass"></use>
                    </svg>
                </button>
            </div>
        </div>
    );
}