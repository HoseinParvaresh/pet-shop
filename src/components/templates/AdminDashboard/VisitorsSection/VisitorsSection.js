"use client"

import React, { useState, useEffect } from "react"
import { VisitorsSectionData as chartData } from "@/Utility/Constants"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { useIsMobile } from "@/hooks/use-mobile"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/shadcn/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/shadcn/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shadcn/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/shadcn/toggle-group"
import { convertDate } from "@/Utility/UtilityFunction"
import DashboardSectionHeader from "@/components/modules/Dashboard/DashboardSectionHeader"

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "دسکتاپ",
    color: "#82ca9d",
  },
  mobile: {
    label: "موبایل",
    color: "#8884d8",
  },
}

export default function VisitorsSection() {

  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = useState("90d")

  useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("1404-03-29")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)

    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card shadow-none border-none w-full">
      <CardHeader>
        <DashboardSectionHeader title={"تمام بازدید کنندگان"} subtitle={"در 3 ماه اخیر"}/>
        <CardAction>
          <ToggleGroup type="single" value={timeRange} onValueChange={setTimeRange} variant="outline" className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex">
            <ToggleGroupItem className="dir-rtl" value="90d">3 ماه گذشته</ToggleGroupItem>
            <ToggleGroupItem className="dir-rtl" value="30d">30 روز گذشته</ToggleGroupItem>
            <ToggleGroupItem className="dir-rtl" value="7d">7 روز گذشته</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="flex w-40 dir-rtl **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden" size="sm" aria-label="Select a value">
              <SelectValue placeholder="3 ماه گذشته" />
            </SelectTrigger>
            <SelectContent className="rounded-xl dir-rtl">
              <SelectItem value="90d" className="rounded-lg">
                3 ماه گذشته
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                30 روز گذشته
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                7 روز گذشته
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={1.0} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} minTickGap={32} tickFormatter={(value) => convertDate(value)} />
            <ChartTooltip cursor={false} defaultIndex={isMobile ? -1 : 10} content={<ChartTooltipContent labelFormatter={(value) => convertDate(value)} indicator="dot" />} />
            <Area dataKey="mobile" type="natural" fill="url(#fillMobile)" stroke="var(--color-mobile)" stackId="a" />
            <Area dataKey="desktop" type="natural" fill="url(#fillDesktop)" stroke="var(--color-desktop)" stackId="a" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
