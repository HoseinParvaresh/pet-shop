import Link from "next/link";

export default function AsideMenuItem({title,link,icon}) {
    return (
        <Link href={link} class="flex items-center gap-x-2.5 py-1.5 group">
            <span class="active-badge block w-0.5 h-5 ml-1 rounded-full">
            </span>
            <div className="*:size-5 text-black/80 group-hover:text-primary transition-colors">
                {icon}
            </div>
            <span class="group-hover:text-primary text-sm transition-colors">{title}</span>
        </Link>
    );
}