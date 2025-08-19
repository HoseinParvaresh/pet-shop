import DashboardSidebar from "@/components/templates/UserDashboard/Sidebar/DashboardSidebar";
import DashboardContent from "@/components/templates/UserDashboard/DashboardContent/DashboardContent";
import Head from 'next/head'

export default function UserDashboard() {
    return (
        <>
            <div>
                <Head>
                    <title>داشبورد کاربر - پیلیسوک</title>
                </Head>
            </div>
            <section className="bg-black/5">
                <div class="relative flex lg:items-start lg:gap-x-8 lg:p-9 max-w-[1440px] mx-auto">
                    <DashboardSidebar />
                    <DashboardContent />
                </div>
            </section>
        </>
    );
}