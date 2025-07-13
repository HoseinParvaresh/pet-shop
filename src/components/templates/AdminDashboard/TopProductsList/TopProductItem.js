import { Card, CardContent, CardHeader, } from "@/components/shadcn/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, } from "@/components/shadcn/chart"
import { Area, AreaChart, XAxis } from "recharts"
import Link from 'next/link';
import { convertDate } from "@/Utility/UtilityFunction";
export default function TopProductItem(Props) {

    const chartConfig = {
        data: {
            label: "فروش",
            color: `#000`,
        }
    }
    const StatisticsCardsVisitorData = [
        { date: "1404-02-31", data: 178 },
        { date: "1404-03-01", data: 470 },
        { date: "1404-03-02", data: 103 },
        { date: "1404-03-03", data: 439 },
        { date: "1404-03-04", data: 88 },
        { date: "1404-03-05", data: 294 },
        { date: "1404-03-06", data: 323 },
        { date: "1404-03-07", data: 385 },
        { date: "1404-03-08", data: 438 },
        { date: "1404-03-09", data: 155 },
        { date: "1404-03-10", data: 92 },
        { date: "1404-03-11", data: 492 },
        { date: "1404-03-12", data: 81 },
        { date: "1404-03-13", data: 426 },
        { date: "1404-03-14", data: 307 },
        { date: "1404-03-15", data: 371 },
        { date: "1404-03-16", data: 475 },
        { date: "1404-03-17", data: 107 },
        { date: "1404-03-18", data: 341 },
        { date: "1404-03-19", data: 408 },
        { date: "1404-03-20", data: 169 },
        { date: "1404-03-21", data: 317 },
        { date: "1404-03-22", data: 480 },
        { date: "1404-03-23", data: 132 },
        { date: "1404-03-24", data: 141 },
        { date: "1404-03-25", data: 434 },
        { date: "1404-03-26", data: 448 },
        { date: "1404-03-27", data: 149 },
        { date: "1404-03-28", data: 103 },
        { date: "1404-03-29", data: 446 },
    ]

    return (
        <div className="flex flex-col 2xs:items-center justify-between gap-3 border border-black/20 rounded-lg p-2 2xs:px-2 2xs:py-0">
            {/* right */}
            <Link href={"#"} className="flex items-center gap-2 2xs:gap-1">
                <img className="size-22 2xs:size-20 border border-black/20 2xs:border-none rounded-md" src={Props.image} alt="p-1" />
                <p className="text-sm md:text-xs lg:text-sm mb-1 font-danaBold line-clamp-3">{Props.title}</p>
            </Link>
            {/* center */}
            <div className="mt-2 2xs:mt-0">
                <p className="text-sm flex gap-1 flex-col"> {Props.sale} <span>فروش</span></p>
            </div>
            {/* left */}
            <CardContent className={"p-0"}>
                <ChartContainer className={"h-20 w-full"} config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={StatisticsCardsVisitorData}
                        margin={{ top: 20 }}
                    >
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            hide={true}

                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent labelFormatter={(value) => convertDate(value)} indicator="dot" />} />
                        {/* <defs>
                            <linearGradient id="topProduct" x1="0" y1="0" x2="0" y2="1">
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
                        </defs> */}
                        <Area
                            dataKey="data"
                            type="natural"
                            fill={`url(#topProduct)`}
                            fillOpacity={0.4}
                            stroke="var(--color-data)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </div>
    );
}