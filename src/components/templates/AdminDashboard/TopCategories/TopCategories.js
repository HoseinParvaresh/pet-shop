"use client"
import DashboardSectionHeader from "@/components/modules/Dashboard/DashboardSectionHeader";
import { Pie, PieChart } from "recharts"
import { Card, CardContent } from "@/components/shadcn/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent,ChartLegend,ChartLegendContent } from "@/components/shadcn/chart"

export default function TopCategories() {

    const chartData = [
        { animal: "cat", sell: 275, fill: "#D2691E" },
        { animal: "dog", sell: 200, fill: "#5C4033" },
        { animal: "fish", sell: 187, fill: "#40E0D0" },
        { animal: "bird", sell: 173, fill: "#FFD700" },
        { animal: "other", sell: 90, fill: "#708090" },
    ]

    const chartConfig = {
        cat: {
            label: "گربه",
            color: "#D2691E",
        },
        dog: {
            label: "سگ",
            color: "var(--chart-2)",
        },
        fish: {
            label: "ماهی",
            color: "var(--chart-3)",
        },
        bird: {
            label: "پرنده",
            color: "var(--chart-4)",
        },
        other: {
            label: "سایر",
            color: "var(--chart-5)",
        },
    }
    return (
        <div className="p-4 w-full rounded-lg bg-white">
            <DashboardSectionHeader title={"برترین دسته بندی ها"} subtitle={"بر اساس فروش"} />
            <Card className="flex flex-col border-none shadow-none p-0">
                <CardContent className="flex-1 pb-0">
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[250px]"
                    >
                        <PieChart>
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Pie
                                data={chartData}
                                dataKey="sell"
                                nameKey="animal"
                                innerRadius={50}
                            />
                            <ChartLegend
                                content={<ChartLegendContent nameKey="animal" />}
                                className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
                            />
                        </PieChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    );
}