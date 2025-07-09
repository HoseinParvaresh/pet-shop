import { Line, LineChart, Tooltip, ResponsiveContainer } from 'recharts';
import { formatNumber } from "@/Utility/UtilityFunction";

export default function TopProductItem(Props) {

   

    return (
        <div className="flex flex-col 2xs:flex-row 2xs:items-center justify-between gap-3 border border-black/30 rounded-lg px-2">
            {/* right */}
            <div className="flex items-center gap-1 min-w-max">
                <img className="size-22 2xs:size-20" src={Props.image} alt="p-1" />
                <div>
                    <p className="text-sm md:text-xs lg:text-sm mb-1 font-danaBold">{Props.title}</p>
                    <p className="text-xs">{formatNumber(Props.price)} <span className="ml-1">تومان</span></p>
                </div>
            </div>
            {/* center */}
            <div className="min-w-max">
                <p className="text-sm flex gap-1 2xs:flex-col lg:flex-row"> {Props.sale} <span>فروش</span></p>
            </div>
            {/* left */}
            <div className="2xs:w-40 h-full">
                <ResponsiveContainer >
                    <LineChart
                        data={Props.data}
                    >
                        <Tooltip />
                        <Line yAxisId="right" type="monotone" dataKey={"فروش"} stroke={"#000"} strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}