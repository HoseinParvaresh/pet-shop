"use client"
import React, { useState } from "react"
import { columns } from './columns'
import { data } from './data'
import { flexRender, getCoreRowModel, getFilteredRowModel,getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/shadcn/button"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/shadcn/dropdown-menu"
import { Input } from "@/components/shadcn/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/shadcn/table"
import DashboardSectionHeader from "@/components/modules/Dashboard/DashboardSectionHeader"

export default function Transactions() {
  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full col-span-3 md:col-span-2 bg-white rounded-lg pt-4 pb-1 px-4 h-120" dir="rtl">
      <DashboardSectionHeader title="سابقه تراکنش‌ها" subtitle="در ۳۰ روز گذشته" />

      {/* top */}
      <div className="flex items-center justify-between py-4 flex-row-reverse">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex flex-row-reverse gap-2">
              <ChevronDown />
              ستون‌ها
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dir-rtl">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.columnDef.name}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Input
          placeholder="فیلتر ایمیل..."
          value={(table.getColumn("email")?.getFilterValue()) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm text-right"
        />
      </div>

      {/* center */}
      <div className="rounded-md border border-zinc-200" dir="rtl">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-right">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-right">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  چیزی پیدا نشد!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* bottom */}
      <div className="flex items-center justify-between py-4 flex-row-reverse">
        <div className="text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} از{" "}
          {table.getFilteredRowModel().rows.length} ردیف انتخاب شده
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            بعدی
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            قبلی
          </Button>
        </div>
      </div>
    </div>
  )
}
