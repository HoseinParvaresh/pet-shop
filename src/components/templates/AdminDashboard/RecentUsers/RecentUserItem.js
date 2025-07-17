import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/shadcn/dialog"
import { Button } from "@/components/shadcn/button"
import { Input } from "@/components/shadcn/input"
import { Label } from "@/components/shadcn/label"
import { convertDate } from "@/Utility/UtilityFunction";
import { IoMdMore } from "react-icons/io";

export default function RecentUserItem(Props) {
    return (
        <div className="px-2 py-3 border-b border-black/15  last:border-none flex items-center justify-between hover:bg-gray-100 transition-all duration-300 hover:rounded-md">
            {/* right */}
            <div className="flex gap-2 items-center">
                <img className="size-10 rounded-full" src="https://secure.gravatar.com/avatar/305d06cbd488be05e4d58cce3723d4d5?s=96&d=mm&r=g" alt="user" />
                <div className="flex flex-col gapy-2">
                    <p className="text-sm">{Props.name}</p>
                    <p className="text-black/30 text-xs font-danaBold">{Props.email}</p>
                </div>
            </div>
            {/* left */}
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Button variant="outline"><IoMdMore/></Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] dir-rtl font-dana">
                        <DialogHeader>
                            <DialogTitle className={"text-right self-center"}>مشخصات کاربر</DialogTitle>
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
                            <div className="grid 2xs:grid-cols-2 gap-4">
                                <div className="grid gap-3">
                                    <Label htmlFor="username-1">نام کاربری</Label>
                                    <Input readOnly id="username-1" name="username" defaultValue={Props.userName} />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="password-1">رمز عبور</Label>
                                    <Input readOnly id="password-1" name="password" defaultValue={Props.password} />
                                </div>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="status-1">ساخته شده در</Label>
                                <Input readOnly id="status-1" name="status" defaultValue={convertDate(Props.createdAt[0], true) + " ساعت " + Props.createdAt[1]} />
                            </div>
                        </div>
                    </DialogContent>
                </form>
            </Dialog>
        </div>
    );
}