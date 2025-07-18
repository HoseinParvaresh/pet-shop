
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/shadcn/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/shadcn/dropdown-menu"
import { formatNumber } from "@/Utility/UtilityFunction"
import { HiOutlineXCircle } from "react-icons/hi2"
import { HiOutlineClock } from "react-icons/hi2"
import { HiOutlineCheckCircle } from "react-icons/hi2"
import OrderSummaryDialog from "./OrderSummaryDialog"
import { convertDate } from "@/Utility/UtilityFunction"
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import Alert from "@/Utility/Alert"

export const columns = [
  {
    accessorKey: "id",
    name: "شناسه سفارش",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex flex-row-reverse gap-2"
      >
        شناسه سفارش
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase text-right pr-3">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    name: "name",
    header: () => (
      <Button
        variant="ghost"
        className="flex flex-row-reverse gap-2"
      >
        اسم محصول
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase text-right">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "customerName",
    name: "اسم مشتری",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex flex-row-reverse gap-2"
      >
        مشتری
      </Button>
    ),
    cell: ({ row }) => {
      return (
        <div className="lowercase text-right">{row.getValue("customerName")}</div>
      )
    },
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
        <div className="lowercase text-right">{convertDate(date, true)}</div>
      )
    },
  },
  {
    accessorKey: "price",
    name: "قیمت",
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
      const price = parseFloat(row.getValue("price"))
      return <div className="text-right pr-1">{formatNumber(price)}</div>
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
          {status === "cancelled" ? <div className="flex items-center gap-1 text-red-500"><HiOutlineXCircle className=" size-4.5" /> <span>ناموفق</span></div> :
            status === "pending" ? <div className="flex items-center gap-1 text-yellow-500"><HiOutlineClock className=" size-4.5" /> <span>در جریان</span></div> :
              <div className="flex items-center gap-1 text-green-500"><HiOutlineCheckCircle className=" size-4.5" /> <span>پرداخت شده</span></div>}
        </div>
      )
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        // <DropdownMenu>
        //   <DropdownMenuTrigger asChild>
        //     <Button variant="ghost" className="h-8 w-8 p-0">
        //       <span className="sr-only">Open menu</span>
        //       <MoreHorizontal />
        //     </Button>
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent align="start">
        //     <DropdownMenuItem
        //       onClick={() => {
        //         navigator.clipboard.writeText(payment.id);
        //       }}
        //     >
        //       کپی شناسه پرداخت
        //     </DropdownMenuItem>
        //     <DropdownMenuSeparator />
        //       <OrderSummaryDialog {...row.original}/>
        //   </DropdownMenuContent>
        // </DropdownMenu >
        <div className="flex">
          <div onClick={() => {
            navigator.clipboard.writeText(payment.id);
            Alert("success", "کپی شد!")
          }}>
            <HiOutlineClipboardDocumentList className="p-1 rounded-md size-8 hover:bg-gray-200" />
          </div>
          <div>
            <OrderSummaryDialog {...row.original} />
          </div>
        </div >
      )
    },
  },
]