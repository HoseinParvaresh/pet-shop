import DashboardSectionHeader from "@/components/modules/Dashboard/DashboardSectionHeader";
import { Line, LineChart, Tooltip, ResponsiveContainer } from 'recharts';
import { formatNumber } from "@/Utility/UtilityFunction";
export default function TopProductsList() {

    const chartDataVisit = [
        { "بازدید از فروشگاه": 15000 },
        { "بازدید از فروشگاه": 25000 },
        { "بازدید از فروشگاه": 20000 },
        { "بازدید از فروشگاه": 30000 },
        { "بازدید از فروشگاه": 45000 },
        { "بازدید از فروشگاه": 32000 },
    ]

    return (
        <div className="flex flex-col gap-6 p-4 w-full rounded-lg bg-white max-h-122 overflow-y-scroll">
            <DashboardSectionHeader title={"پرفروش محصولات"} subtitle={" در 30 روز گذشته"} />
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-3 border border-black/30 rounded-lg px-2">
                    {/* right */}
                    <div className="flex items-center gap-1 min-w-max">
                        <img className="size-20" src="/images/p-1.png" alt="p-1" />
                        <div>
                            <p className="text-sm mb-1 font-danaBold">ظرف غذای حیوانات</p>
                            <p className="text-xs">{formatNumber(148000)} <span className="ml-1">تومان</span></p>
                        </div>
                    </div>
                    {/* center */}
                    <div className="min-w-max">
                        <p className="text-sm"> 345 فروش</p>
                    </div>
                    {/* left */}
                    <div className="w-40 h-full">
                        <ResponsiveContainer >
                            <LineChart
                                data={chartDataVisit}
                            >
                                <Tooltip />
                                <Line yAxisId="right" type="monotone" dataKey={"بازدید از فروشگاه"} stroke={"#000"} strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-3 border border-black/30 rounded-lg px-2">
                    {/* right */}
                    <div className="flex items-center gap-1 min-w-max">
                        <img className="size-20" src="/images/p-1.png" alt="p-1" />
                        <div>
                            <p className="text-sm mb-1 font-danaBold">ظرف غذای حیوانات</p>
                            <p className="text-xs">{formatNumber(148000)} <span className="ml-1">تومان</span></p>
                        </div>
                    </div>
                    {/* center */}
                    <div className="min-w-max">
                        <p className="text-sm"> 345 فروش</p>
                    </div>
                    {/* left */}
                    <div className="w-40 h-full">
                        <ResponsiveContainer >
                            <LineChart
                                data={chartDataVisit}
                            >
                                <Tooltip />
                                <Line yAxisId="right" type="monotone" dataKey={"بازدید از فروشگاه"} stroke={"#000"} strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-3 border border-black/30 rounded-lg px-2">
                    {/* right */}
                    <div className="flex items-center gap-1 min-w-max">
                        <img className="size-20" src="/images/p-1.png" alt="p-1" />
                        <div>
                            <p className="text-sm mb-1 font-danaBold">ظرف غذای حیوانات</p>
                            <p className="text-xs">{formatNumber(148000)} <span className="ml-1">تومان</span></p>
                        </div>
                    </div>
                    {/* center */}
                    <div className="min-w-max">
                        <p className="text-sm"> 345 فروش</p>
                    </div>
                    {/* left */}
                    <div className="w-40 h-full">
                        <ResponsiveContainer >
                            <LineChart
                                data={chartDataVisit}
                            >
                                <Tooltip />
                                <Line yAxisId="right" type="monotone" dataKey={"بازدید از فروشگاه"} stroke={"#000"} strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-3 border border-black/30 rounded-lg px-2">
                    {/* right */}
                    <div className="flex items-center gap-1 min-w-max">
                        <img className="size-20" src="/images/p-1.png" alt="p-1" />
                        <div>
                            <p className="text-sm mb-1 font-danaBold">ظرف غذای حیوانات</p>
                            <p className="text-xs">{formatNumber(148000)} <span className="ml-1">تومان</span></p>
                        </div>
                    </div>
                    {/* center */}
                    <div className="min-w-max">
                        <p className="text-sm"> 345 فروش</p>
                    </div>
                    {/* left */}
                    <div className="w-40 h-full">
                        <ResponsiveContainer >
                            <LineChart
                                data={chartDataVisit}
                            >
                                <Tooltip />
                                <Line yAxisId="right" type="monotone" dataKey={"بازدید از فروشگاه"} stroke={"#000"} strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-3 border border-black/30 rounded-lg px-2">
                    {/* right */}
                    <div className="flex items-center gap-1 min-w-max">
                        <img className="size-20" src="/images/p-1.png" alt="p-1" />
                        <div>
                            <p className="text-sm mb-1 font-danaBold">ظرف غذای حیوانات</p>
                            <p className="text-xs">{formatNumber(148000)} <span className="ml-1">تومان</span></p>
                        </div>
                    </div>
                    {/* center */}
                    <div className="min-w-max">
                        <p className="text-sm"> 345 فروش</p>
                    </div>
                    {/* left */}
                    <div className="w-40 h-full">
                        <ResponsiveContainer >
                            <LineChart
                                data={chartDataVisit}
                            >
                                <Tooltip />
                                <Line yAxisId="right" type="monotone" dataKey={"بازدید از فروشگاه"} stroke={"#000"} strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-3 border border-black/30 rounded-lg px-2">
                    {/* right */}
                    <div className="flex items-center gap-1 min-w-max">
                        <img className="size-20" src="/images/p-1.png" alt="p-1" />
                        <div>
                            <p className="text-sm mb-1 font-danaBold">ظرف غذای حیوانات</p>
                            <p className="text-xs">{formatNumber(148000)} <span className="ml-1">تومان</span></p>
                        </div>
                    </div>
                    {/* center */}
                    <div className="min-w-max">
                        <p className="text-sm"> 345 فروش</p>
                    </div>
                    {/* left */}
                    <div className="w-40 h-full">
                        <ResponsiveContainer >
                            <LineChart
                                data={chartDataVisit}
                            >
                                <Tooltip />
                                <Line yAxisId="right" type="monotone" dataKey={"بازدید از فروشگاه"} stroke={"#000"} strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-3 border border-black/30 rounded-lg px-2">
                    {/* right */}
                    <div className="flex items-center gap-1 min-w-max">
                        <img className="size-20" src="/images/p-1.png" alt="p-1" />
                        <div>
                            <p className="text-sm mb-1 font-danaBold">ظرف غذای حیوانات</p>
                            <p className="text-xs">{formatNumber(148000)} <span className="ml-1">تومان</span></p>
                        </div>
                    </div>
                    {/* center */}
                    <div className="min-w-max">
                        <p className="text-sm"> 345 فروش</p>
                    </div>
                    {/* left */}
                    <div className="w-40 h-full">
                        <ResponsiveContainer >
                            <LineChart
                                data={chartDataVisit}
                            >
                                <Tooltip />
                                <Line yAxisId="right" type="monotone" dataKey={"بازدید از فروشگاه"} stroke={"#000"} strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}