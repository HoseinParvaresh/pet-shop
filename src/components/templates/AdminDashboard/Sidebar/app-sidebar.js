"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/shadcn/sidebar"

// This is sample data.
const data = {
  user: {
    name: "مدیر سیستم",
    email: "admin@example.com",
    avatar: "/avatars/admin.jpg",
  },
  teams: [
    {
      name: "تیم توسعه",
      logo: GalleryVerticalEnd,
      plan: "حرفه‌ای",
    },
    {
      name: "تیم بازاریابی",
      logo: AudioWaveform,
      plan: "استاندارد",
    },
    {
      name: "تیم پشتیبانی",
      logo: Command,
      plan: "رایگان",
    },
  ],
  navMain: [
    {
      title: "داشبورد",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "مرور کلی",
          url: "#",
        },
        {
          title: "آمار و گزارش‌ها",
          url: "#",
        },
        {
          title: "تنظیمات",
          url: "#",
        },
      ],
    },
    {
      title: "کاربران",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "لیست کاربران",
          url: "#",
        },
        {
          title: "نقش‌ها و دسترسی‌ها",
          url: "#",
        },
        {
          title: "گزارش فعالیت",
          url: "#",
        },
      ],
    },
    {
      title: "مستندات",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "معرفی",
          url: "#",
        },
        {
          title: "شروع سریع",
          url: "#",
        },
        {
          title: "آموزش‌ها",
          url: "#",
        },
        {
          title: "تغییرات",
          url: "#",
        },
      ],
    },
    {
      title: "تنظیمات",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "عمومی",
          url: "#",
        },
        {
          title: "تیم",
          url: "#",
        },
        {
          title: "صورتحساب",
          url: "#",
        },
        {
          title: "محدودیت‌ها",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "طراحی مهندسی",
      url: "#",
      icon: Frame,
    },
    {
      name: "فروش و بازاریابی",
      url: "#",
      icon: PieChart,
    },
    {
      name: "سفر و گردشگری",
      url: "#",
      icon: Map,
    },
  ],
}



export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
