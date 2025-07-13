import { Card, CardContent, CardHeader, } from "@/components/shadcn/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, } from "@/components/shadcn/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import Link from 'next/link';
import { convertDate } from "@/Utility/UtilityFunction";
import { formatNumber } from "@/Utility/UtilityFunction";
export default function TopProductItem(Props) {

    const chartConfig = {
        data: {
            label: "فروش",
            color: `#f69946`,
        }
    }
    const StatisticsCardsVisitorData = [
        { date: "1404-03-01", data: 470 },
        { date: "1404-03-02", data: 224 },
        { date: "1404-03-03", data: 302 },
        { date: "1404-03-04", data: 135 },
        { date: "1404-03-05", data: 294 },
        { date: "1404-03-06", data: 189 },
        { date: "1404-03-07", data: 250 },
    ]

    return (
        <div className="px-4 rounded-2xl">
            <div className="rounded-lg bg-secondary pb-1">
                <div className=" flex flex-col items-center  rounded-md pt-5 px-5">
                    {/* image */}
                    <Link href={"/product/2"}>
                        <div>
                            <div className="bg-gray-200 rounded-full border-10 border-white">
                                <img className="w-60" src="/images/p-1.png" alt="p-1" />
                            </div>
                        </div>
                    </Link>
                    {/* title / total sell */}
                    <div className="text-center flex flex-col gap-2 mt-5">
                        {/* title */}
                        <Link href={"/product/2"} className="text-dark-primary font-danaBold line-clamp-1 text-base xs:text-sm sm:text-base">ظرف غذا مخصوص پرندگان</Link>
                        {/* price */}
                        <div className="flex-center gap-1">
                            <p className=" text-primary font-danaBold text-base xs:text-sm sm:text-base">{formatNumber(4560000)}</p>
                            <svg className="size-3 sm:size-4 text-primary"><use href="#toman"></use></svg>
                        </div>
                        {/* total sell */}
                        <p className="text-dark-primary font-danaBold line-clamp-1 text-base xs:text-sm mt-1">فروش کل :<span>300</span></p>
                    </div>

                </div>
                {/* chart */}
                <Card className={"shadow-none border-none p-0 bg-secondary"}>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <BarChart accessibilityLayer data={StatisticsCardsVisitorData}>
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => convertDate(value)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent labelFormatter={(value) => convertDate(value)} indicator="dot" />}
                                />
                                <Bar dataKey="data" fill="var(--color-data)" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}