import DashboardHeader from "@/components/templates/UserDashboard/DashboardContent/DashboardHeader/DashboardHeader";
import StatisticsCards from "@/components/templates/AdminDashboard/StatisticsCards/StatisticsCards";
import StoreMetricsChart from "@/components/templates/AdminDashboard/StoreMetricsChart/StoreMetricsChart";
import TopProductsList from "@/components/templates/AdminDashboard/TopProductsList/TopProductsList";

export default function AdminDashboard() {

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
                        <StatisticsCards />
                        {/* Store Metrics Chart / Top Products List   */}
                        <div className="flex gap-6">
                            <StoreMetricsChart />
                            <TopProductsList />
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
}