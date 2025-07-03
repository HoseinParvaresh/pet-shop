import { FcSurvey } from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";


export default function UserStatsSummary() {

    const summeryItems = [
        { id: 1, title: "0 سفارش", desc: "سفارش های من", icon: <FcSurvey /> },
        { id: 2, title: "0 تیکت", desc: "تیکت ها", icon: <FcFeedback /> },
        { id: 3, title: "0 موردعلاقه", desc: "محصولات موردعلاقه", icon: <FcLike /> },
        { id: 4, title: "0 تومان", desc: "کیف پول", icon: <FcMoneyTransfer /> },
    ]
    return (
        <div class="lg:pb-8">
            <section class="bg-white flex items-center justify-between flex-wrap gap-x-3 gap-y-4 px-5 sm:px-7 py-5 lg:rounded-lg">
                {
                    summeryItems.map((item) => (
                        <div key={item.id} class="w-37 sm:w-42 flex items-center gap-x-3 sm:gap-x-5">
                            <div className="*:size-9 *:sm:size-11 *:md:size-12">
                                {item.icon}
                            </div>
                            <div class="flex flex-col gap-y-2 text-xs sm:text-sm">
                                <span class="font-danaBold">{item.title}</span>
                                <span class="text-black/80 text-xs">{item.desc}</span>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    );
}