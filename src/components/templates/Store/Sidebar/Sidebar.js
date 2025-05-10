import { useState } from "react"
import ToggleBox from "./ToggleBox"
import Category from "./Category"
import SearchBox from "./SearchBox"

export default function Sidebar() {

    const [toggleList] = useState([
        { id: 1, title: 'محصولات تخفیف دار', inputName: 'only_offer' },
        { id: 2, title: 'فقط محصولات موجود', inputName: 'available' },
    ])
    const [categoryList] = useState([
        { id: 1, name: 'سگ' },
        { id: 2, name: 'گربه' },
        { id: 3, name: 'پرندگان' },
        { id: 4, name: 'ماهی' },
    ])
    return (
        <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6 mb-20">
            {/* SearchBox & Toggle Box & Category Filter */}
            <div className="space-y-10">
                <SearchBox />
                <ToggleBox items={toggleList} />
                <Category items={categoryList} />
            </div>
        </aside>
    )
}