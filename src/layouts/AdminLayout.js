import { Toaster } from "react-hot-toast";
import { AppSidebar } from "@/components/templates/AdminDashboard/Sidebar/app-sidebar"
import { SidebarProvider } from "@/components/shadcn/sidebar"
import DashboardHeader from "@/components/templates/UserDashboard/DashboardHeader/DashboardHeader";

const AdminLayout = ({ children }) => (
    <div className="bg-black/5 font-dana">
        <Toaster />
        {/* side bar */}
        <SidebarProvider className="w-full overflow-hidden">
            {/* sidebar */}
            <AppSidebar side="right" />
            <section>
                <DashboardHeader admin={true} />
                {/* content */}
                {children}
            </section>
        </SidebarProvider>
    </div>
)

export default AdminLayout
