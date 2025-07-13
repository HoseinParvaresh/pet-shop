"use client"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent } from "@/components/shadcn/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/shadcn/chart"
import MetricCard from "./MetricCard";
import DashboardSectionHeader from '@/components/modules/Dashboard/DashboardSectionHeader';
import { StoreMetricsData } from "@/Utility/Constants";
export default function StoreMetricsChart() {

    const chartConfig = {
        salary: {
            label: "درآمد",
            color: "#82ca9d",
        },
        customer: {
            label: "مشتریان",
            color: "#8884d8",
        },
        visitor: {
            label: "بازدید",
            color: "#ffc658",
        },
    }

    const metricCardsData = [
        { id: 1, title: "درآمد", value: 268500, benefit: true, change: 5,color:"#82ca9d" },
        { id: 2, title: "کل مشتریان", value: 8400, benefit: true, change: 12.3,color:"#8884d8" },
        { id: 3, title: "بازدید از فروشگاه", value: 59000, benefit: false, change: 2,color:"#ffc658" },
    ]

    return (
        <div className="flex flex-col col-span-2 gap-6 p-4 w-full rounded-lg bg-white">
            <DashboardSectionHeader title={"شاخص های فروشگاه"} subtitle={"در 6 ماه گذشته"} />
            {/* Metric Card */}
            <div className="flex items-center justify-between md:px-3 lg:px-5">
                {
                    metricCardsData.map((data) => (
                        <MetricCard key={data.id} title={data.title} value={data.value} benefit={data.benefit} change={data.change} color={data.color} />
                    ))
                }
            </div>
            {/* chart */}
            <Card className={"shadow-none border-none"}>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <BarChart accessibilityLayer data={StoreMetricsData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dashed" />}
                            />
                            <Bar dataKey="salary" fill="var(--color-salary)" radius={4} />
                            <Bar dataKey="customer" fill="var(--color-customer)" radius={4} />
                            <Bar dataKey="visitor" fill="var(--color-visitor)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    );
}