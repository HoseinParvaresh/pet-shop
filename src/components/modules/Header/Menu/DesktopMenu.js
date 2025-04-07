import Link from "next/link";
import { useState } from "react";
export default function DesktopMenu() {

    const [widthElm,setWidthElm] = useState(0)
    const [transformElm,setTransformElm] = useState(0)

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
        <div>
            <ul onMouseLeave={mouseLeaveHandler}  className="flex items-center justify-center gap-7 font-MorabbaBold text-[18px] text-dark-primary">
            <div className="absolute top-[67px] left-0 h-[2.5px] bg-primary bottom-0 transition-all duration-300" style={styles}></div>
                <li className="cursor-pointer hover:text-primary transition-colors" onMouseEnter={mouseEnterHandler}><Link href="/">صفحه اصلی</Link></li>
                <li className="cursor-pointer hover:text-primary transition-colors" onMouseEnter={mouseEnterHandler}><Link href="/store">فروشگاه</Link></li>
                <li className="cursor-pointer hover:text-primary transition-colors" onMouseEnter={mouseEnterHandler}><Link href="/article">وبلاگ</Link></li>
                <li className="cursor-pointer hover:text-primary transition-colors" onMouseEnter={mouseEnterHandler}><Link href="/about">درباره ما</Link></li>
                <li className="cursor-pointer hover:text-primary transition-colors" onMouseEnter={mouseEnterHandler}><Link href="/contact">تماس با ما</Link></li>
            </ul>
        </div>
    );
}