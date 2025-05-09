import { useState } from "react"

export default function Category(Props) {

    const [categoryFilterBox, setCategoryFilterBox] = useState('')
    const [categoryFilterIcon, setCategoryFilterIcon] = useState('rotate-180')

    const categoryFilterHandler = () => {
        categoryFilterBox ?
            setCategoryFilterBox('') :
            setCategoryFilterBox('h-17')

        categoryFilterIcon ?
            setCategoryFilterIcon('') :
            setCategoryFilterIcon('rotate-180')
    }

    return (
        <div className={`bg-white shadow-md rounded-xl p-5 hidden md:block overflow-hidden ${categoryFilterBox}`} id="category-collapse">
            {/* title & button */}
            <div onClick={categoryFilterHandler} className="flex items-center justify-between mb-5 pb-5 border-b border-b-neutral-200/60 cursor-pointer">
                {/* title */}
                <div className="flex items-center gap-x-2 font-danaBold">
                    <svg className="w-7 h-7">
                        <use href="#folder-open"></use>
                    </svg>
                    <p>دسته بندی محصولات</p>
                </div>
                {/* button */}
                <button type="button" data-collapse="#category-collapse" data-height="h-17">
                    <svg className={`w-5.5 h-5.5 ${categoryFilterIcon}`}>
                        <use href="#chevron-down"></use>
                    </svg>
                </button>
            </div>
            {/* Product Category */}
            <div className="space-y-4.5">
                {
                    Props.items.map((item, index) => (
                        <label key={index} className="checkbox">
                            <input className="checkbox__input" name={`category[${item.id}]`} value="yes" type="checkbox" />
                            <span className="checkbox__marker"></span>
                            <span className="text-sm font-Dana select-none"> {item.name} </span>
                        </label>
                    ))
                }
            </div>
        </div>
    );
}