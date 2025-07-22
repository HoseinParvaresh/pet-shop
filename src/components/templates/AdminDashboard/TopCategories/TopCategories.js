"use client"
import DashboardSectionHeader from "@/components/templates/AdminDashboard/common/DashboardSectionHeader";
import { Pie, PieChart, Label } from "recharts"
import { Card, CardContent } from "@/components/shadcn/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/shadcn/chart"

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
        <div className="p-4 md:min-w-90 lg:min-w-95 xl:min-w-101 col-span-1 rounded-lg bg-white">
            <DashboardSectionHeader title={"آمار دسته بندی ها"} subtitle={"بر اساس فروش در 30 روز گذشته"} />
            <Card className="flex flex-col border-none shadow-none p-0">
                <CardContent className="flex-1 p-0">
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-w-[300px]"
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
                                innerRadius={70}
                                strokeWidth={50}
                            >
                                <Label
                                    content={({ viewBox }) => {
                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                            return (
                                                <text
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                >
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        className="fill-foreground text-3xl font-bold"
                                                    >
                                                        854
                                                    </tspan>
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={(viewBox.cy || 0) + 24}
                                                        className="fill-muted-foreground"
                                                    >
                                                        فروش کل
                                                    </tspan>
                                                </text>
                                            )
                                        }
                                    }}
                                />
                            </Pie>
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