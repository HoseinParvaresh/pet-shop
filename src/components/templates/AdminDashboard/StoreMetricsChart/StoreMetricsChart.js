
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MetricCard from "./MetricCard";
import DashboardSectionHeader from '@/components/modules/Dashboard/DashboardSectionHeader';
export default function StoreMetricsChart() {

    const data = [
        {
            name: 'فروردین',
            "فروش کل": 4000,
            "مشتریان": 2400,
            "بازدید کنندگان": 2400,
        },
        {
            name: 'اردیبهشت',
            "فروش کل": 3000,
            "مشتریان": 1398,
            "بازدید کنندگان": 2210,
        },
        {
            name: 'خرداد',
            "فروش کل": 2000,
            "مشتریان": 9800,
            "بازدید کنندگان": 2290,
        },
        {
            name: 'تیر',
            "فروش کل": 2780,
            "مشتریان": 3908,
            "بازدید کنندگان": 2000,
        },
        {
            name: 'مرداد',
            "فروش کل": 1890,
            "مشتریان": 4800,
            "بازدید کنندگان": 2181,
        },
        {
            name: 'شهریور',
            "فروش کل": 2390,
            "مشتریان": 3800,
            "بازدید کنندگان": 2500,
        },
    ];
    const metricCardsData = [
        { id: 1, title: "درآمد", value: 268500, benefit: true, change: 5 },
        { id: 2, title: "کل مشتریان", value: 8400, benefit: true, change: 12.3 },
        { id: 3, title: "بازدید از فروشگاه", value: 59000, benefit: false, change: 2 },
    ]

    return (
        <div className="flex flex-col gap-6 p-4 w-full rounded-lg bg-white">
            <DashboardSectionHeader title={"شاخص های فرودگاه"} subtitle={" در 30 روز گذشته"}/>
            {/* Metric Card */}
            <div className="flex items-center justify-between md:px-3 lg:px-5">
                {
                    metricCardsData.map((data) => (
                        <MetricCard key={data.id} title={data.title} value={data.value} benefit={data.benefit} change={data.change} />
                    ))
                }
            </div>
            {/* chart */}
            <div style={{ width: '100%', height: 300 }} className="dir-ltr">
                <ResponsiveContainer>
                    <BarChart
                        data={data}
                    >
                        <CartesianGrid vertical={false} strokeDasharray="0" />
                        <XAxis className="text-xs" dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend wrapperStyle={{ fontSize: '12px' }} iconSize={10} />
                        <Bar dataKey="فروش کل" fill="#82ca9d" />
                        <Bar dataKey="مشتریان" fill="#8884d8" />
                        <Bar dataKey="بازدید کنندگان" fill="#ffc658" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}