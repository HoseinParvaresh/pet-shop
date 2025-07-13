import DashboardHeader from "@/components/modules/Dashboard/DashboardHeader";
import StatisticsCards from "@/components/templates/AdminDashboard/StatisticsCards/StatisticsCards";
import StoreMetricsChart from "@/components/templates/AdminDashboard/StoreMetricsChart/StoreMetricsChart";
import TopProductsList from "@/components/templates/AdminDashboard/TopProductsList/TopProductsList";
import Transactions from "@/components/templates/AdminDashboard/Transactions/Transactions";
import VisitorsSection from "@/components/templates/AdminDashboard/VisitorsSection/VisitorsSection";

export default function AdminDashboard() {

    return (
        <div className="bg-black/5">
            <div className="relative flex items-start">
                {/* side bar */}
                <div className="bg-yellow-500 hidden lg:block h-screen w-[250px]"></div>
                {/* content */}
                <section className="flex flex-col w-full overflow-hidden">
                    <DashboardHeader />
                    {/* content */}
                    <section className="p-6 flex flex-col gap-6">
                        <StatisticsCards />
                        {/* Store Metrics Chart / Top Products List   */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <StoreMetricsChart />
                            <TopProductsList />
                        </div>
                        {/* Transactions */}
                        <div className="grid grid-cols-3">
                            <VisitorsSection />
                        </div>
                        <Transactions />
                    </section>
                </section>
            </div>
        </div>
    );
}