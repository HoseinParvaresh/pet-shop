"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { formatNumber } from "@/Utility/UtilityFunction"
import { TiArrowSortedUp } from "react-icons/ti"
import { TiArrowSortedDown } from "react-icons/ti"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/shadcn/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/shadcn/chart"


const chartData = [
    { month: "4 هفته قبل", desktop: 2 },
    { month: "3 هفته قبل", desktop: 50 },
    { month: "2 هفته قبل", desktop: 30 },
    { month: "هفته قبل", desktop: 25 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    }
}

export default function StatisticsCardsItem(Props) {
    return (
        <Card className={"gap-0 pt-4 pb-1.5 shadow-none border-none"}>
            <CardHeader>
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
            </CardHeader>
            <CardContent>
                <ChartContainer className={"h-30 w-full"} config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                    >
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            // tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <defs>
                            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-desktop)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-desktop)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            dataKey="desktop"
                            type="natural"
                            fill="url(#fillDesktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-desktop)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
