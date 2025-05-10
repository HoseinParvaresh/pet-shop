import SidebarTitle from "./SidebarTitle";

export default function SearchBox() {
    return (
        <div className="flex flex-col items-center w-full gap-5">
            <SidebarTitle title={"جستجو کنید"} />
            {/* input */}
            <div className="h-15 bg-secondary rounded-xl p-3 flex items-center justify-between w-full border border-black/5">
                <div className="flex justify-between gap-x-6 h-full text-slate-500">
                    <input type="text" name="s" className="placeholder-dark-primary/70 bg-transparent flex-grow outline-none" placeholder="جستجو بین محصولات" />
                </div>
                <button type="submit" className="btn btn-primary py-2.5 px-3">
                    <svg className="size-5 cursor-pointer">
                        <use href="#magnifying-glass"></use>
                    </svg>
                </button>
            </div>
        </div>
    );
}