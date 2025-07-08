import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { formatNumber } from "@/Utility/UtilityFunction";

export default function MetricCard({ title, value, benefit, change }) {
    return (
        <div className="flex flex-col gap-1">
            <p className="text-xs">{title}</p>
            <p className="text-sm font-danaBold">{formatNumber(value)}</p>
            <div className={`flex-center text-xs ${benefit ? 'text-green-500' : 'text-red-500'} `}>
                {benefit ? <TiArrowSortedUp className="size-5" /> : <TiArrowSortedDown className="size-5" />}
                <div className="flex-center gap-1">
                    <span>{change}%</span>
                    <span>ماه قبل</span>
                </div>
            </div>
        </div>
    );
}