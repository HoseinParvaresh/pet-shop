import SidebarTitle from "./SidebarTitle";

export default function Category(Props) {

    return (
        <div className="flex flex-col items-center w-full gap-5 " id="category-collapse">
            <SidebarTitle title={"دسته بندی"}/>
            {/* Product Category */}
            <div className="space-y-4.5 w-full bg-secondary rounded-xl p-5">
                {
                    Props.items.map((item, index) => (
                        <label key={index} className="checkbox">
                            <input className="checkbox__input" name={`category[${item.id}]`} value="yes" type="checkbox" />
                            <span className="checkbox__marker"></span>
                            <span className="text-sm md:text-base font-Dana select-none text-dark-primary"> {item.name} </span>
                        </label>
                    ))
                }
            </div>
        </div>
    );
}