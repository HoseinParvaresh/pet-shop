import { AppSidebar } from "./app-sidebar"
import {SidebarProvider} from "@/components/shadcn/sidebar"

export default function Sidebar() {
  return (
    <SidebarProvider>
      <AppSidebar side="right" />
    </SidebarProvider>
  )
}
