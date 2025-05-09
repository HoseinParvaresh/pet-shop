import { useState } from "react"
import ToggleBox from "./ToggleBox"
import Category from "./Category"
import SearchBox from "./SearchBox"

export default function Sidebar() {

    const [toggleList] = useState([
        { id: 1, title: 'فقط کتاب های تخفیف دار', inputName: 'only_offer' },
        { id: 2, title: 'کتاب های موجود', inputName: 'available' },
    ])
    const [categoryList] = useState([
        { id: 1, name: 'داستان و رمان' },
        { id: 2, name: 'مدیریت و کسب و کار' },
        { id: 3, name: 'ادبیات' },
        { id: 4, name: 'روان‌شناسی' },
        { id: 5, name: 'زندگی‌نامه' },
        { id: 6, name: 'هنر' },
        { id: 7, name: 'فلسفه منطق' },
        { id: 8, name: 'تاریخ' }
    ])
    return (
        <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6 mb-20">
            {/* SearchBox & Toggle Box Container & Category Filter */}
            <form className="space-y-6">
                <SearchBox />
                {/* <ToggleBox items={toggleList} /> */}
                <Category items={categoryList} />
            </form>
        </aside>
    )
}