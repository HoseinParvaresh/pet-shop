
import { LuPackageCheck } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { FaBox } from "react-icons/fa6";
export default function Summary() {

    const items = [
        { title: "7 روز ضمانت بازگشت", desc: "حتی سلیقه ای!", icon: <FaBox/> },
        { title: "تضمین اصالت کالا", desc: "ضمانت کیفیت کالا", icon: <LuPackageCheck /> },
        { title: "پشتیبانی تا ۱۲ شب", desc: "حتی جمعه ها", icon: <BiSupport/> },
    ]
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 rounded-xl overflow-hidden order-2">
            {
                items.map((item, index) => (
                    <div key={index} className="flex flex-col text-dark-primary md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-secondary pt-4 pb-3.5 sm:py-6 px-4.5">
                        <div className="*:size-7 2xs:*:size-10 *:text-primary">
                            {item.icon}
                        </div>
                        <div className="space-y-0.5 sm:space-y-1">
                            <span className="block font-danaBold text-xs 2xs:text-sm/6 xl:text-base/7">{item.title}</span>
                            <span className="block text-xs 2xs:text-sm/6 opacity-70 text-dark-secondary">{item.desc}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
