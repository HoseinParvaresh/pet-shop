import Link from "next/link";
import { useState } from "react";
import { menuList } from "@/Utility/Constants";

export default function DesktopNavbar() {

    const [widthElm, setWidthElm] = useState(0)
    const [transformElm, setTransformElm] = useState(0)

    const mouseEnterHandler = (e) => {
        let elm = e.target.getBoundingClientRect()

        setWidthElm(elm.width)
        setTransformElm(elm.right - elm.width)

    }
    const mouseLeaveHandler = (e) => {
        setWidthElm(0)
    }
    const styles = {
        transform: `translateX(${transformElm}px)`,
        width: widthElm
    };

    return (
        <ul onMouseLeave={mouseLeaveHandler} className="flex items-center justify-center gap-5 xl:gap-10 font-MorabbaBold text-[18px] text-dark-primary">
            <div className="absolute top-[67px] left-0 h-[2.5px] bg-primary bottom-0 transition-all duration-300" style={styles}></div>
            {
                menuList.map((item) => (
                    <li key={item.id} className="cursor-pointer hover:text-primary transition-colors" onMouseEnter={mouseEnterHandler}><Link href={item.link}>{item.title}</Link></li>
                ))
            }
        </ul>
    );
}