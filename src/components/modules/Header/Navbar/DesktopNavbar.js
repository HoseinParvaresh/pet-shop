import Link from "next/link";
import { useState } from "react";
import { menuList } from "@/Utility/Constants";
import * as motion from "motion/react-client"


export default function DesktopNavbar() {

    const [widthElm, setWidthElm] = useState(0)
    const [transformElm, setTransformElm] = useState(0)

    const mouseEnterHandler = (e) => {
        let elm = e.target.getBoundingClientRect()

        setWidthElm(elm.width+15)
        setTransformElm(elm.right - elm.width)

    }
    const mouseLeaveHandler = (e) => {
        setWidthElm(0)
    }
    const styles = {
        transform: `translateX(${transformElm-7}px)`,
        width: widthElm
    };

    return (
        <ul onMouseLeave={mouseLeaveHandler} className="flex items-center justify-center gap-5 xl:gap-10 font-MorabbaBold text-[18px] text-dark-primary">
            <div className="absolute top-[70px] left-0 h-[2.5px] bg-primary bottom-0 transition-all duration-300" style={styles}></div>
            {
                menuList.map((item) => (
                    <motion.li
                        key={item.id}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        className="cursor-pointer hover:text-primary transition-colors"
                        onMouseEnter={mouseEnterHandler}
                    >
                        <Link href={item.link}>{item.title}</Link>
                    </motion.li>
                ))
            }
        </ul>
    );
}