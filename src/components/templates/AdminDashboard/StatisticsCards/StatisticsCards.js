import { AreaChart, XAxis, YAxis, Tooltip, Area, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend } from "recharts";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { formatNumber } from "@/Utility/UtilityFunction";

export default function StatisticsCards({ title, number, percent, benefit, chartData, color, icon }) {

    return (
        <div className="flex flex-col p-4 w-full h-40 rounded-lg bg-white">
            <div className="text-green-500 text-blue-500 text-yellow-500"></div>
            {/* top => left / right */}
            <div className="flex justify-between items-center">
                {/* left => title / price / percent */}
                <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-danaBold">{title}</p>
                    <p className="text-sm">{formatNumber(number)}</p>
                    <div className={`flex-center ${benefit ? 'text-green-500' : 'text-red-500'} text-xs`}>
                        <div className="*:size-5">
                            {benefit ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                        </div>
                        <div className="flex-center gap-1">
                            <span>{percent}%</span>
                            <span>هفته قبل</span>
                        </div>
                    </div>
                </div>
                {/* right => icon */}
                <div className={`flex-center size-12 bg-${color}-200 rounded-lg *:size-6 *:text-${color}-500`}>
                    {icon}
                </div>
            </div>
            {/* chart */}
            <ResponsiveContainer>
                <LineChart
                    width="100%"
                    height="100%"
                    data={chartData}
                    margin={{
                        top: 10,
                        right: 5,
                        left: 5,
                        bottom: 0,
                    }}
                >
                    <Tooltip />
                    <Line yAxisId="right" type="monotone" dataKey="درآمد" stroke={`${color === 'green' ? '#82ca9d' : color === 'blue' ? '#8884d8' : '#ffc658'}`} strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}