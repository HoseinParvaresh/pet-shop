import Aside from "@/components/templates/UserDashboard/DashboardAside/Aside";
import Content from "@/components/templates/UserDashboard/DashboardContent/Content";

export default function UserDashboard() {
    return (
        <section className="bg-black/5">
            <div class="relative flex lg:items-start lg:gap-x-8 lg:p-9 max-w-[1440px] mx-auto">
                <Aside/>
                <Content/>
            </div>
        </section>
    );
}