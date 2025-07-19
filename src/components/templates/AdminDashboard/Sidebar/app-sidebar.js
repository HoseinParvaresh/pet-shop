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
    },
    {
      title: "مدیریت کاربران",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "لیست کاربران",
          url: "#",
        },
        {
          title: "ایجاد/ ویرایش کاربر",
          url: "#",
        },
        {
          title: "نقش‌ها و سطح دسترسی",
          url: "#",
        },
        {
          title: "گزارش فعالیت",
          url: "#",
        },
      ],
    },
    {
      title: "مدیریت محصولات",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "لیست محصولات",
          url: "#",
        },
        {
          title: "افزودن محصول جدید",
          url: "#",
        },
        {
          title: "دسته‌بندی‌ها",
          url: "#",
        },
        {
          title: "تگ‌ها",
          url: "#",
        },
      ],
    },
    {
      title: "مدیریت سفارشات",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "لیست سفارشات",
          url: "#",
        },
        {
          title: "وضعیت‌ها",
          url: "#",
        },
        {
          title: "فاکتورها",
          url: "#",
        }
      ],
    },
    {
      title: "گزارش‌ها",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "آمار فروش و بازدید",
          url: "#",
        },
        {
          title: "رفتار کاربران",
          url: "#",
        },
        {
          title: "نمودارها و تحلیل‌ها",
          url: "#",
        }
      ],
    },
    {
      title: "کامنت‌ها",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "نظرات کاربران",
          url: "#",
        },
        {
          title: "ارتباط با پشتیبانی",
          url: "#",
        },
        {
          title: "فرم تماس / تیکت‌ها",
          url: "#",
        }
      ],
    },
    {
      title: "تنظیمات سیستم",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "تنظیمات کلی",
          url: "#",
        },
        {
          title: "سئو",
          url: "#",
        },
        {
          title: "ایمیل‌ها / نوتیفیکیشن‌ها",
          url: "#",
        },
        {
          title: "API keys / تنظیمات امنیتی",
          url: "#",
        }
      ],
    },
    {
      title: "مقالات",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "ایجاد مقاله",
          url: "#",
        },
        {
          title: "ویرایش یا حذف مقاله",
          url: "#",
        }
      ],
    },
    {
      title: "تنظیمات",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "پروفایل",
          url: "#",
        },
        {
          title: "تغییر رمز",
          url: "#",
        },
        {
          title: "خروج از سیستم",
          url: "#",
        }
      ],
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
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
