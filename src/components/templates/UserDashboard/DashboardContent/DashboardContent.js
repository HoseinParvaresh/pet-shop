import DashboardHeader from "./DashboardHeader/DashboardHeader";
import UserStatsSummary from "./UserStatsSummary/UserStatsSummary";
import RecentlyViewedProducts from "./RecentlyViewedProducts/RecentlyViewedProducts";
import LatestInteractions from "./LatestInteractions/LatestInteractions";

export default function DashboardContent() {
    return (
        <section class="flex flex-col lg:gap-y-8 w-full overflow-hidden">
            <DashboardHeader />
            <section class="bg-white p-5 sm:p-7 lg:rounded-lg h-full">
                    <div class="-mx-5 -mb-6 lg:-m-7 bg-black/5">
                        <UserStatsSummary/>
                        <RecentlyViewedProducts/>
                        <LatestInteractions/>
                    </div>
            </section>
        </section>
    );
}