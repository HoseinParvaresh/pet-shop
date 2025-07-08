import StatisticsCardsItem from "./StatisticsCardsItem";
import { FaWallet } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi";
export default function StatisticsCards() {

    const chartDataSalary = [
        { "درآمد": 1258755 },
        { "درآمد": 1056000 },
        { "درآمد": 3258596 },
        { "درآمد": 1002586 },
        { "درآمد": 1354120 },
        { "درآمد": 2685000 },
    ]
    const chartDataCustomers = [
        { "مشتریان": 165 },
        { "مشتریان": 150 },
        { "مشتریان": 115 },
        { "مشتریان": 132 },
        { "مشتریان": 100 },
        { "مشتریان": 130 },
    ]
    const chartDataVisit = [
        { "بازدید از فروشگاه": 15000 },
        { "بازدید از فروشگاه": 25000 },
        { "بازدید از فروشگاه": 20000 },
        { "بازدید از فروشگاه": 30000 },
        { "بازدید از فروشگاه": 45000 },
        { "بازدید از فروشگاه": 32000 },
    ]
    
    const StatisticsCardsData = [
        { id: 1, title: "درآمد", number: 268500, percent: 20, benefit: true, chartData: chartDataSalary, color: "#82ca9d", icon: <FaWallet /> },
        { id: 2, title: "مشتریان", number: 130, percent: 15, benefit: true, chartData: chartDataCustomers, color: "#8884d8", icon: <HiUsers /> },
        { id: 3, title: "بازدید از فروشگاه", number: 32000, percent: 5, benefit: false, chartData: chartDataVisit, color: "#ffc658", icon: <HiOutlineEye /> },
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