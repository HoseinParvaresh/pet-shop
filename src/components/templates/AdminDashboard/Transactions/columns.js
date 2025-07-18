
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/shadcn/button"
import { Checkbox } from "@/components/shadcn/checkbox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/shadcn/dropdown-menu"
import { formatNumber } from "@/Utility/UtilityFunction"
import { HiOutlineXCircle } from "react-icons/hi2";
import { HiOutlineClock } from "react-icons/hi2";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import TransactionsDialog from "./TransactionsDialog"
import { convertDate } from "@/Utility/UtilityFunction"
import Alert from "@/Utility/Alert"
export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    name: "نام و نام خانوادگی",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex flex-row-reverse gap-2"
      >
        نام و نام خانوادگی
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase text-right pr-3">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    name: "ایمیل",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex flex-row-reverse gap-2"
      >
        ایمیل
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase text-right">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "date",
    name: "تاریخ",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex flex-row-reverse gap-2"
      >
        تاریخ
      </Button>
    ),
    cell: ({ row }) => {
        const date = row.original.date[0]
      return (
        <div className="lowercase text-right">{convertDate(date)}</div>
      )
    },
  },
  {
    accessorKey: "status",
    name: "وضعیت",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex flex-row-reverse gap-2"
      >
        وضعیت
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status")
      return (
        <div className="capitalize text-right">
          {status === "ناموفق" ? <div className="flex items-center gap-1 text-red-500"><HiOutlineXCircle className=" size-4.5" /> <span>ناموفق</span></div> :
            status === "در جریان" ? <div className="flex items-center gap-1 text-yellow-500"><HiOutlineClock className=" size-4.5" /> <span>در جریان</span></div> :
              <div className="flex items-center gap-1 text-green-500"><HiOutlineCheckCircle className=" size-4.5" /> <span>پرداخت شده</span></div>}
        </div>
      )
    },
  },
  {
    accessorKey: "amount",
    name: "مبلغ",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex flex-row-reverse gap-2"
      >
        مبلغ
      </Button>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      return <div className="text-right pr-1">{formatNumber(amount)}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem
              onClick={() => {
                Alert("success","کپی شد!")
                navigator.clipboard.writeText(payment.id);
              }}
            >
              کپی شناسه پرداخت
            </DropdownMenuItem>
            <DropdownMenuSeparator />
              <TransactionsDialog {...row.original}/>
          </DropdownMenuContent>
        </DropdownMenu >
      )
    },
  },
]