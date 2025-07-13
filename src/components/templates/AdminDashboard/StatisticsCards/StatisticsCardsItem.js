"use client"

import { Area, AreaChart, XAxis } from "recharts"
import { formatNumber } from "@/Utility/UtilityFunction"
import { TiArrowSortedUp } from "react-icons/ti"
import { TiArrowSortedDown } from "react-icons/ti"

import { Card, CardContent, CardHeader, } from "@/components/shadcn/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, } from "@/components/shadcn/chart"

export default function StatisticsCardsItem(Props) {

    const lastData = Props.chartData[Props.chartData.length - 1].data
    const secondLastData = Props.chartData[Props.chartData.length - 2].data

    const chartConfig = {
        data: {
            label: Props.title,
            color: `${Props.color}`,
        }
    }

    function calcProfitLossPct(firstData, secondData) {
        if (firstData < secondData) {
            return Math.floor(((secondData - firstData) / firstData) * 100) + "%"
        }
        return Math.floor(((firstData - secondData) / secondData) * 100) + "%"
    }
    return (
        <Card className={`gap-0 pt-4 pb-1.5 shadow-none border-none ${Props.id === 3 ? 'col-span-2 md:col-span-1' : ''}`}>
            <CardHeader>
                <div className="flex justify-between items-center">
                    {/* left => title / price / percent */}
                    <div className="flex flex-col gap-0.5">
                        <p className="text-sm font-danaBold">{Props.title}</p>
                        <p className="text-sm">{formatNumber(lastData)}</p>
                        <div className={`flex-center ${secondLastData < lastData ? 'text-green-500' : 'text-red-500'} text-xs`}>
                            <div className="*:size-5">
                                {secondLastData < lastData ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </div>
                            <div className="flex-center gap-1">
                                <span>{calcProfitLossPct(lastData, secondLastData)}</span>
                                <span>هفته قبل</span>
                            </div>
                        </div>
                    </div>
                    {/* right => icon */}
                    <div style={{ color: Props.color,backgroundColor:`${Props.color}33`}} className={`flex-center size-12 rounded-lg *:size-6`}>
                        {Props.icon}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer className={"h-20 w-full"} config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={Props.chartData}
                    >
                        <XAxis
                            dataKey="week"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            hide={true}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <defs>
                            <linearGradient id={Props.id} x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-data)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-data)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            dataKey="data"
                            type="natural"
                            fill={`url(#${Props.id})`}
                            fillOpacity={0.4}
                            stroke="var(--color-data)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
