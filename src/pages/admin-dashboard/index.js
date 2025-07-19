import DashboardHeader from "@/components/modules/Dashboard/DashboardHeader";
import StatisticsCards from "@/components/templates/AdminDashboard/StatisticsCards/StatisticsCards";
import StoreMetricsChart from "@/components/templates/AdminDashboard/StoreMetricsChart/StoreMetricsChart";
import TopProductsList from "@/components/templates/AdminDashboard/TopProductsList/TopProductsList";
import Transactions from "@/components/templates/AdminDashboard/Transactions/Transactions";
import VisitorsSection from "@/components/templates/AdminDashboard/VisitorsSection/VisitorsSection";
import TopCategories from "@/components/templates/AdminDashboard/TopCategories/TopCategories";
import RecentUsers from "@/components/templates/AdminDashboard/RecentUsers/RecentUsers";
import OrderStatus from "@/components/templates/AdminDashboard/OrderStatus/OrderStatus";
import OrderSummary from "@/components/templates/AdminDashboard/OrderSummary/OrderSummary";
import DataTables from "@/components/templates/AdminDashboard/DataTables/DataTables";
import { Toaster } from "react-hot-toast";

export default function AdminDashboard() {

    return (
        <div className="bg-black/5 font-dana">
            <Toaster/>
            <div className="relative flex items-start">
                {/* side bar */}
                <div className="bg-yellow-500 hidden lg:block h-screen w-[250px]"></div>
                <section className="flex flex-col w-full overflow-hidden">
                    <DashboardHeader />
                    {/* content */}
                    <section className="p-6 flex flex-col gap-6">
                        <StatisticsCards />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-6">
                            <StoreMetricsChart />
                            <TopProductsList />
                        </div>
                        <DataTables />
                        <div className="flex flex-col md:flex-row gap-6">
                            <VisitorsSection />
                            <TopCategories />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-6">
                            <RecentUsers/>
                            <OrderStatus/>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
}