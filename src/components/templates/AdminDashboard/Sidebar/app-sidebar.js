"use client"

import * as React from "react"
import { HiOutlineUsers, HiOutlineClipboardList, HiOutlineNewspaper } from "react-icons/hi";
import { TbReportAnalytics, TbSettings, TbPackages, TbDiscount } from "react-icons/tb";

import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/shadcn/sidebar"
import { useSidebar } from "@/components/shadcn/sidebar"


// This is sample data.
const data = {
  user: {
    name: "مدیر سیستم",
    email: "hoseinp753@gmail.com",
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
      title: "مدیریت محصولات",
      url: "#",
      icon: TbPackages,
      items: [
        {
          title: "لیست محصولات",
          url: "#",
        },
        {
          title: "افزودن محصول جدید",
          url: "/admin-dashboard/add-product",
        },
        {
          title: "دسته بندی محصولات",
          url: "#",
        }
      ],
    },
    {
      title: "مدیریت کاربران",
      url: "#",
      icon: HiOutlineUsers,
      items: [
        {
          title: "لیست کاربران",
          url: "#",
        },
        {
          title: "گزارش فعالیت",
          url: "#",
        },
      ],
    },
    {
      title: "مدیریت سفارشات",
      url: "#",
      icon: HiOutlineClipboardList,
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
      title: "مقالات",
      url: "#",
      icon: HiOutlineNewspaper,
      items: [
        {
          title: "لیست مقالات",
          url: "#",
        },
        {
          title: "ایجاد مقاله",
          url: "#",
        }
      ],
    },
    {
      title: "کد تخفیف",
      url: "#",
      icon: TbDiscount,
      items: [
        {
          title: "دریافت کدهای تخفیف",
          url: "#",
        },
        {
          title: "ایجاد کد تخفیف",
          url: "#",
        }
      ],
    },
    {
      title: "گزارش‌ها",
      url: "#",
      icon: TbReportAnalytics,
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
      title: "تنظیمات سیستم",
      url: "#",
      icon: TbSettings,
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
    }
  ],
}


export function AppSidebar({ ...props }) {

  const { toggleSidebar } = useSidebar()
  const triggeredRef = React.useRef(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');

    const handleChange = (e) => {
      if (e.matches && !triggeredRef.current) {
        triggeredRef.current = true;
        toggleSidebar()
      }
    };
    if (mediaQuery.matches && !triggeredRef.current) {
      triggeredRef.current = true;
      toggleSidebar()
    }
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

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
      <SidebarRail className="!hidden lg:!block" />
    </Sidebar>
  )
}
