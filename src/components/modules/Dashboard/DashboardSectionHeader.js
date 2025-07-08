import { FaCalendarAlt } from "react-icons/fa";


export default function DashboardSectionHeader({ title, subtitle }) {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-sm font-danaBold">{title}</p>
            <div className="flex gap-1">
                <FaCalendarAlt className="size-3"/>
                <p className="text-xs">{subtitle}</p>
            </div>
        </div>
    );
}