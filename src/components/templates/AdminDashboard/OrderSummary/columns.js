
import { Button } from "@/components/shadcn/button"
import { formatNumber } from "@/Utility/UtilityFunction"

import OrderSummaryDialog from "./OrderSummaryDialog"
import { convertDate } from "@/Utility/UtilityFunction"
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import Alert from "@/Utility/Alert"
import StatusBadge from "./StatusBadge";

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
    name: "اسم محصول",
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
          <StatusBadge status={status} />
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