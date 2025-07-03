import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import DashboardHeader from "@/components/templates/UserDashboard/DashboardContent/DashboardHeader/DashboardHeader";
import { FaWallet } from "react-icons/fa";
import { formatNumber } from "@/Utility/UtilityFunction";
import { TiArrowSortedUp } from "react-icons/ti";
import { AreaChart, XAxis, YAxis, Tooltip, Area, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend } from "recharts";
import DashboardSidebar from "@/components/templates/UserDashboard/Sidebar/DashboardSidebar";
export default function AdminDashboard() {

    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]

    const [search, setSearch] = useState()

    return (
        <div className="bg-black/5">
            <div className="relative flex items-start">
                {/* side bar */}
                <div className="bg-white h-screen w-[250px]"></div>
                {/* content */}
                <section class="flex flex-col lg:gap-y-8 w-full overflow-hidden">
                    <DashboardHeader />
                    {/* content */}
                    <section class="bg-white p-5 sm:p-7 lg:rounded-lg h-full">
                        <div class="-mx-5 -mb-6 lg:-m-7 bg-black/5">
                            <div className="grid grid-cols-3 gap-5">
                                <div className="flex flex-col col-span-2 p-4 bg-white w-full h-40 rounded-lg">
                                    {/* top => left / right */}
                                    <div className="flex justify-between items-center">
                                        {/* left => title / price / percent */}
                                        <div className="flex flex-col gap-0.5">
                                            <p className="text-sm font-danaBold">درآمد</p>
                                            <p className="text-sm">{formatNumber(1685000)}</p>
                                            <div className="flex-center text-green-500 text-xs">
                                                <TiArrowSortedUp className="size-5" />
                                                <div className="flex-center gap-1">
                                                    <span>20%</span>
                                                    <span>هفته قبل</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* right => icon */}
                                        <div className="flex-center size-12 bg-green-200 rounded-lg">
                                            <FaWallet className="size-6 text-green-500" />
                                        </div>
                                    </div>
                                    {/* chart */}
                                    <ResponsiveContainer>
                                        <LineChart
                                            width="100%"
                                            height="100%"
                                            data={data}
                                            margin={{
                                                top: 10,
                                                right: 5,
                                                left: 5,
                                                bottom: 0,
                                            }}
                                        >
                                            <Tooltip />
                                            <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="flex flex-col col-span-2 p-4 bg-white w-full h-40 rounded-lg">
                                    {/* top => left / right */}
                                    <div className="flex justify-between items-center">
                                        {/* left => title / price / percent */}
                                        <div className="flex flex-col gap-0.5">
                                            <p className="text-sm font-danaBold">درآمد</p>
                                            <p className="text-sm">{formatNumber(1685000)}</p>
                                            <div className="flex-center text-green-500 text-xs">
                                                <TiArrowSortedUp className="size-5" />
                                                <div className="flex-center gap-1">
                                                    <span>20%</span>
                                                    <span>هفته قبل</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* right => icon */}
                                        <div className="flex-center size-12 bg-green-200 rounded-lg">
                                            <FaWallet className="size-6 text-green-500" />
                                        </div>
                                    </div>
                                    {/* chart */}
                                    <ResponsiveContainer>
                                        <LineChart
                                            width="100%"
                                            height="100%"
                                            data={data}
                                            margin={{
                                                top: 10,
                                                right: 5,
                                                left: 5,
                                                bottom: 0,
                                            }}
                                        >
                                            <Tooltip />
                                            <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="flex flex-col col-span-2 p-4 bg-white w-full h-40 rounded-lg">
                                    {/* top => left / right */}
                                    <div className="flex justify-between items-center">
                                        {/* left => title / price / percent */}
                                        <div className="flex flex-col gap-0.5">
                                            <p className="text-sm font-danaBold">درآمد</p>
                                            <p className="text-sm">{formatNumber(1685000)}</p>
                                            <div className="flex-center text-green-500 text-xs">
                                                <TiArrowSortedUp className="size-5" />
                                                <div className="flex-center gap-1">
                                                    <span>20%</span>
                                                    <span>هفته قبل</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* right => icon */}
                                        <div className="flex-center size-12 bg-green-200 rounded-lg">
                                            <FaWallet className="size-6 text-green-500" />
                                        </div>
                                    </div>
                                    {/* chart */}
                                    <ResponsiveContainer>
                                        <LineChart
                                            width="100%"
                                            height="100%"
                                            data={data}
                                            margin={{
                                                top: 10,
                                                right: 5,
                                                left: 5,
                                                bottom: 0,
                                            }}
                                        >
                                            <Tooltip />
                                            <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

            </div>



        </div>


    );
}