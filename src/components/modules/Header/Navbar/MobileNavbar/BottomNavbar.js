import MenuList from "./MenuList";

export default function BottomNavbar() {
    return (
        <div className="px-6 relative">
            {/* search input */}
            <div className="text-sm space-y-1 mb-4 pb-4 border-b border-b-neutral-200">
                <div className="flex items-center bg-gray-100 p-3 my-2 rounded-full justify-center">
                    <input type="text" className="text-slate-800 text-sm bg-transparent border-none outline-none" placeholder="جستجو بین محصولات" />
                    <svg className="size-4">
                        <use href="#magnifying-glass"></use>
                    </svg>
                </div>
            </div>
            {/* search drop down */}
            {/* <div id='search-drop_down' className={`absolute ${toggleSearchBox} top-15 right-[22px] left-0 w-5/6 max-h-60 overflow-scroll overflow-x-hidden shadow-normal dark:shadow-none bg-white dark:bg-primary-darker p-5 border-l-8 border-y-8 border-white dark:border-primary-darker text-gray-900 dark:text-white rounded-xl z-20 transition-all`}>
              <div className="space-y-5 text-right">
                {searchValue.length ?
                  searchValue.map((book, index) => (
                    <Link key={index} to={`/book/${book.id}`} className="flex items-center justify-between gap-x-3.5 text-sm">
                      <span className="inline-block w-full">{book.title}</span>
                      <svg className="size-4 rotate-90 shrink-0">
                        <use href="#chevron-down"></use>
                      </svg>
                    </Link>
                  ))
                  :
                  (
                    <p className='text-sm'>متاسفانه نتیجه ای با مشخصات مورد نظر شما پیدا نشد!</p>
                  )
                }
              </div>
            </div> */}
            <MenuList />
        </div>
    );
}