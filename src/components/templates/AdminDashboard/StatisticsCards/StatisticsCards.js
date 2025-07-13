import StatisticsCardsItem from "./StatisticsCardsItem";
import { FaWallet } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi";
import { StatisticsCardsSalaryData } from "@/Utility/Constants";
import { StatisticsCardsCustomerData } from "@/Utility/Constants";
import { StatisticsCardsVisitorData } from "@/Utility/Constants";
export default function StatisticsCards() {

    

    const StatisticsCards = [
        { id: 1, title: "درآمد", chartData:StatisticsCardsSalaryData, color: "#82ca9d", icon: <FaWallet /> },
        { id: 2, title: "مشتریان", chartData:StatisticsCardsCustomerData, color: "#8884d8", icon: <HiUsers /> },
        { id: 3, title: "بازدید", chartData:StatisticsCardsVisitorData, color: "#ffc658", icon: <HiOutlineEye /> },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {
                StatisticsCards.map((data) => (
                    <StatisticsCardsItem key={data.id} {...data} />
                ))
            }
        </div>
    );
}