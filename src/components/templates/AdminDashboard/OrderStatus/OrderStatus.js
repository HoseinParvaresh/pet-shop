"use client"
import { Bar, BarChart, XAxis, CartesianGrid } from "recharts"
import {
    Card,
    CardContent,
} from "@/components/shadcn/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent
} from "@/components/shadcn/chart"
import DashboardSectionHeader from "@/components/modules/Dashboard/DashboardSectionHeader"
import { OrderSummaryData } from "@/Utility/Constants"



export default function OrderStatus() {

    const chartConfig = {
        complete: {
            label: "کامل شده",
            color: "oklch(79.2% 0.209 151.711)",
        },
        cancel: {
            label: "کنسل شده",
            color: "oklch(63.7% 0.237 25.331)",
        },
        referral: {
            label: "مرجوعی",
            color: "oklch(79.5% 0.184 86.047)"
        }

    }

    return (
        <div className="w-full lg:min-w-110 bg-white rounded-lg p-4">
            <DashboardSectionHeader title={"وضعیت سفارشات"} subtitle={"در 6 ماه گذشته"} />
            <Card className={"border-none shadow-none pb-0"}>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <BarChart accessibilityLayer data={OrderSummaryData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                            />
                            <ChartLegend content={<ChartLegendContent />} />
                            <Bar
                                dataKey="complete"
                                stackId="a"
                                fill="var(--color-complete)"
                                radius={[0, 0, 4, 4]}
                            />
                            <Bar
                                dataKey="cancel"
                                stackId="a"
                                fill="var(--color-cancel)"
                                radius={[0, 0, 0, 0]}
                            />
                            <Bar
                                dataKey="referral"
                                stackId="a"
                                fill="var(--color-referral)"
                                radius={[4, 4, 0, 0]}
                            />
                            <ChartTooltip
                                content={
                                    <ChartTooltipContent
                                        hideLabel
                                        className="w-[180px]"
                                        formatter={(value, name, item, index) => (
                                            <>
                                                <div
                                                    className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-(--color-bg)"
                                                    style={
                                                        {
                                                            "--color-bg": `var(--color-${name})`,
                                                        }
                                                    }
                                                />
                                                {
                                                    chartConfig[name].label
                                                }
                                                <div className="text-foreground ml-auto flex items-baseline gap-0.5 font-dana tabular-nums">
                                                    {value}
                                                    <span className="text-muted-foreground font-normal">
                                                        سفارش
                                                    </span>
                                                </div>
                                                {/* Add this after the last item */}
                                                {index === 2 && (
                                                    <div className="text-foreground mt-1.5 flex gap-1 basis-full items-center border-t pt-1.5 text-xs">
                                                        در مجموع
                                                        <div className="text-foreground ml-auto flex items-baseline gap-0.5 font-dana tabular-nums">
                                                            {item.payload.complete + item.payload.cancel + item.payload.referral}
                                                            <span className="text-muted-foreground font-normal">
                                                                سفارش
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    />
                                }
                                cursor={false}
                                defaultIndex={1}
                            />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    );
}