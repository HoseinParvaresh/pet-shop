import { MdOutlinePets } from "react-icons/md";

export default function SidebarTitle({title}) {
    return (
        <div className="relative">
            <p className="head-title font-MorabbaBold">{title}</p>
            <MdOutlinePets className="text-primary/30 size-10 -rotate-40 absolute -top-0.5 right-7/8 -z-10" />
        </div>
    );
}