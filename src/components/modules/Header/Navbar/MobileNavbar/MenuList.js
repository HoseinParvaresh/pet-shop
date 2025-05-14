import Link from "next/link";
import { menuList } from "@/Utility/Constants";

export default function MenuList() {
    return (
        <ul className="mobile-menu">
            {
                menuList.map((item) => (
                    <li key={item.id} className="mobile-menu__item">
                        <div className="mobile-menu__wrapper">
                            <Link href={item.link}> {item.title} </Link>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}