import { RiSettings4Line } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiReceipt } from "react-icons/bi";
import { RiMapPinLine } from "react-icons/ri";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import Link from "next/link";
import * as motion from "motion/react-client"
import AsideMenuItem from "./SidebarMenuItem";

export default function Aside() {

    const AsideMenuItems = [
        { id: 1, title: 'خانه', link: '/', icon: BiHomeAlt2 },
        { id: 2, title: 'سفارش های من', link: '/', icon: BiReceipt },
        { id: 3, title: ' آدرس ها', link: '/', icon: RiMapPinLine },
        { id: 4, title: 'تیکت های پشتیبانی', link: '/', icon: HiOutlineChatAlt2 },
        { id: 5, title: 'علاقه مندی ها', link: '/', icon: AiOutlineHeart },
        { id: 6, title: 'جزئیات حساب', link: '/', icon: MdOutlineManageAccounts },
    ]
    
    return (
        <aside class="navigation -right-65 sm:-right-70 lg:!h-[calc(100vh-64px)] fixed top-0 bottom-0 z-50 md:static lg:sticky lg:top-5 overflow-y-auto w-65 sm:w-70 md:w-66 lg:w-70 shrink-0 bg-white md:border-l md:border-l-black/10 px-7 py-5 lg:rounded-lg max-md:transition-all max-md:duration-300">
            {/* top => buttons / profile */}
            <div class="flex items-center justify-between pb-5 mb-5 border-b border-b-black/5">
                {/* profile */}
                <div class="flex items-center gap-x-2">
                    <img class="size-11 rounded-full" src="https://secure.gravatar.com/avatar/305d06cbd488be05e4d58cce3723d4d5?s=96&amp;d=mm&amp;r=g" loading="lazy" />
                    <div class="flex flex-col gap-2">
                        <span class="max-w-28 truncate select-none text-sm font-danaBold">حسین</span>
                        <span class="text-black text-xs">09176437156</span>
                    </div>
                </div>
                {/* setting and signout button */}
                <div class="flex items-center gap-x-3">
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Link href="/">
                            <RiSettings4Line className="size-5 text-black/50 hover:text-black transition-colors cursor-pointer" />
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Link href="/">
                            <TbLogout2 className="size-5 text-black/50 hover:text-red-500 transition-colors cursor-pointer" />
                        </Link>
                    </motion.div>
                </div>
            </div>
            {/* menu */}
            <div class="flex flex-col gap-y-4">
                {
                    AsideMenuItems.map((item) => (
                        <AsideMenuItem key={item.id} {...item}/>
                    ))
                }
            </div>
        </aside>
    );
}