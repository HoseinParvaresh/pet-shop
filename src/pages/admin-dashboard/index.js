import StatisticsCards from "@/components/templates/AdminDashboard/StatisticsCards/StatisticsCards";
import StoreMetricsChart from "@/components/templates/AdminDashboard/StoreMetricsChart/StoreMetricsChart";
import TopProductsList from "@/components/templates/AdminDashboard/TopProductsList/TopProductsList";
import VisitorsSection from "@/components/templates/AdminDashboard/VisitorsSection/VisitorsSection";
import TopCategories from "@/components/templates/AdminDashboard/TopCategories/TopCategories";
import RecentUsers from "@/components/templates/AdminDashboard/RecentUsers/RecentUsers";
import OrderStatus from "@/components/templates/AdminDashboard/OrderStatus/OrderStatus";
import DataTables from "@/components/templates/AdminDashboard/DataTables/DataTables";
import Sidebar from "@/components/templates/AdminDashboard/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";
import { AppSidebar } from "@/components/templates/AdminDashboard/Sidebar/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/shadcn/sidebar"

export default function AdminDashboard() {

    return (
        <div className="bg-black/5 font-dana">
            <Toaster />
            {/* side bar */}
            <SidebarProvider className="flex w-full overflow-hidden">
                <AppSidebar side="right" />
                <div>
                    <div className="w-full bg-white p-6">
                        <SidebarTrigger />
                    </div>
                    {/* content */}
                    <section className="flex flex-col gap-6  p-6">
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
                            <RecentUsers />
                            <OrderStatus />
                        </div>
                    </section>
                </div>
            </SidebarProvider>
        </div>
    );
}