
import { Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { formatNumber } from "@/Utility/UtilityFunction";
export default function StatisticsCardsItem(Props) {

    return (
        <div className={`flex flex-col ${Props.id === 3 ? 'col-span-1 sm:col-span-2 md:col-span-1' : ''} p-4 w-full h-40 rounded-lg bg-white`}>
            {/* top => left / right */}
            <div className="flex justify-between items-center">
                {/* left => title / price / percent */}
                <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-danaBold">{Props.title}</p>
                    <p className="text-sm">{formatNumber(Props.number)}</p>
                    <div className={`flex-center ${Props.benefit ? 'text-green-500' : 'text-red-500'} text-xs`}>
                        <div className="*:size-5">
                            {Props.benefit ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                        </div>
                        <div className="flex-center gap-1">
                            <span>{Props.percent}%</span>
                            <span>هفته قبل</span>
                        </div>
                    </div>
                </div>
                {/* right => icon */}
                <div className={`flex-center size-12 ${Props.title === 'درآمد' ? 'bg-green-100 text-green-500' : Props.title === 'مشتریان' ? 'bg-blue-100 text-blue-500' : 'bg-amber-100 text-amber-500'} rounded-lg *:size-6`}>
                    {Props.icon}
                </div>
            </div>
            {/* chart */}
            <ResponsiveContainer>
                <LineChart
                    width="100%"
                    height="100%"
                    data={Props.chartData}
                    margin={{
                        top: 10,
                        right: 5,
                        left: 5,
                        bottom: 0,
                    }}
                >
                    <Tooltip />
                    <Line yAxisId="right" type="monotone" dataKey={Props.title} stroke={Props.color} strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}