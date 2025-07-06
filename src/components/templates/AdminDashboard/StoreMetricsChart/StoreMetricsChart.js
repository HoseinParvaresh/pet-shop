import { formatNumber } from "@/Utility/UtilityFunction";

export default function StoreMetricsChart() {
    return (
        <div className="flex flex-col p-4 w-full h-40 rounded-lg bg-white">
            {/* title */}
            <div className="flex flex-col gap-2">
                <p className="text-sm font-danaBold">شاخص های فرودگاه</p>
                <p className="text-xs">درآمد در 30 روز گذشته</p>
            </div>
            {/* overview */}
            <div>
                <div>
                    <p>درآمد</p>
                    <p>{formatNumber(268500)}</p>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}