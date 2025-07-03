import DashboardHeader from "@/components/templates/UserDashboard/DashboardContent/DashboardHeader/DashboardHeader";
import { FaWallet } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import StatisticsCards from "@/components/templates/AdminDashboard/StatisticsCards/StatisticsCards";
import { HiOutlineEye } from "react-icons/hi";

export default function AdminDashboard() {

    const chartDataSalary = [
        {
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]
    const StatisticsCardsData = [
        { id: 1, title: "درآمد", number: 1685000, percent: 20, benefit: true, chartData: chartDataSalary, color: "green", icon: <FaWallet /> },
        { id: 2, title: "کل مشتریان", number: 8400, percent: 15, benefit: true, chartData: chartDataSalary, color: "blue", icon: <HiUsers /> },
        { id: 3, title: "بازدید از فروشگاه", number: 59000, percent: 5, benefit: false, chartData: chartDataSalary, color: "amber", icon: <HiOutlineEye /> },
    ]

    return (
        <div className="bg-black/5">
            <div className="relative flex items-start">
                {/* side bar */}
                <div className="bg-yellow-500 hidden lg:block h-screen w-[250px]"></div>
                {/* content */}
                <section class="flex flex-col w-full overflow-hidden">
                    <DashboardHeader />
                    {/* content */}
                    <section class="bg-black/5 p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {
                                StatisticsCardsData.map((data) => (
                                    <StatisticsCards key={data.id} title={data.title} number={data.number} percent={data.percent}
                                        benefit={data.benefit} chartData={data.chartData} color={data.color} icon={data.icon} />
                                ))
                            }
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
}