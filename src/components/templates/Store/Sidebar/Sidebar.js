import ToggleBox from "./ToggleBox"
import Category from "./Category"
import SearchBox from "./SearchBox"
import { toggleList,categoryList } from "@/Utility/Constants"

export default function Sidebar() {
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