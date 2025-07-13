import StatisticsCardsItem from "./StatisticsCardsItem";
import { FaWallet } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi";
export default function StatisticsCards() {

    const chartData = [
        { month: "4 هفته قبل", data: 2 },
        { month: "3 هفته قبل", data: 50 },
        { month: "2 هفته قبل", data: 30 },
        { month: "هفته قبل", data: 25 },
    ]

    const StatisticsCardsData = [
        { id: 1, title: "درآمد", chartData, color: "#82ca9d", icon: <FaWallet /> },
        { id: 2, title: "مشتریان", chartData, color: "#8884d8", icon: <HiUsers /> },
        { id: 3, title: "بازدید از فروشگاه", chartData, color: "#ffc658", icon: <HiOutlineEye /> },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {
                StatisticsCardsData.map((data) => (
                    <StatisticsCardsItem key={data.id} {...data} />
                ))
            }
        </div>
    );
}