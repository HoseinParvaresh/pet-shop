import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/shadcn/dialog"
import { Input } from "@/components/shadcn/input"
import { Label } from "@/components/shadcn/label"
import { formatNumber } from "@/Utility/UtilityFunction"
import { convertDate } from "@/Utility/UtilityFunction"
import { MdInfoOutline } from "react-icons/md";

export default function OrderSummaryDialog(Props) {

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
        <MdInfoOutline className="p-1 rounded-md size-8 hover:bg-gray-200" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] dir-rtl font-dana">
          <DialogHeader>
            <DialogTitle className={"text-right self-center"}>جزئیات سفارش</DialogTitle>
            <img className="size-50 rounded-full mx-auto mt-2" src={Props.image} alt="profile" />
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-3">
                <Label htmlFor="id-1">شناسه</Label>
                <Input readOnly id="id-1" name="id" defaultValue={Props.id} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name-1">نام محصول</Label>
                <Input readOnly id="name-1" name="name" defaultValue={Props.name} />
              </div>
            </div>
            <div className="grid 2xs:grid-cols-2 gap-4">
              <div className="grid gap-3">
                <Label htmlFor="customerName-1">نام مشتری</Label>
                <Input readOnly id="customerName-1" name="customerName" defaultValue={Props.customerName} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="customerNumber-1">شماره مشتری</Label>
                <Input readOnly id="customerNumber-1" name="customerNumber" defaultValue={Props.customerNumber} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-3">
                <Label htmlFor="price-1">قیمت</Label>
                <Input readOnly id="price-1" name="price" defaultValue={formatNumber(Props.price)} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="status-1">وضعیت</Label>
                <Input readOnly id="status-1" name="status" defaultValue={Props.status} />
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="status-1">تاریخ</Label>
              <Input readOnly id="status-1" name="status" defaultValue={convertDate(Props.date[0],true) + " ساعت " + Props.date[1]} />
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  )
}
