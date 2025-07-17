import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/shadcn/dialog"
import { Input } from "@/components/shadcn/input"
import { Label } from "@/components/shadcn/label"
import { formatNumber } from "@/Utility/UtilityFunction"
import { convertDate } from "@/Utility/UtilityFunction"
export default function TransactionsDialog(Props) {

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className="dir-rtl text-sm px-2 py-1.5 hover:bg-zinc-100 rounded-sm cursor-default">جزئیات پرداخت</div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] dir-rtl font-dana">
          <DialogHeader>
            <DialogTitle className={"text-right self-center"}>جزئیات پرداخت</DialogTitle>
            <img className="size-20 rounded-full mx-auto mt-2" src="https://secure.gravatar.com/avatar/305d06cbd488be05e4d58cce3723d4d5?s=96&d=mm&r=g" alt="user profile" />
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-3">
                <Label htmlFor="id-1">شناسه</Label>
                <Input readOnly id="id-1" name="id" defaultValue={Props.id} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name-1">اسم</Label>
                <Input readOnly id="name-1" name="name" defaultValue={Props.name} />
              </div>
            </div>
            <div className="grid 2xs:grid-cols-2 gap-4">
              <div className="grid gap-3">
                <Label htmlFor="email-1">ایمیل</Label>
                <Input readOnly id="email-1" name="email" defaultValue={Props.email} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="number-1">شماره تلفن</Label>
                <Input readOnly id="number-1" name="number" defaultValue={Props.number} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-3">
                <Label htmlFor="amount-1">مبلغ</Label>
                <Input readOnly id="amount-1" name="amount" defaultValue={formatNumber(Props.amount)} />
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
