import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function BottomFooter() {
    return (
        <div className="h-100 container">
            <div className=" py-15 px-10 flex justify-between border-b border-dark-secondary">
                {/* right => logo / phone number / address / social media */}
                <div className="flex flex-col items-start gap-6 w-62">
                    {/* logo */}
                    <a href="/" className="text-primary font-MorabbaHeavy text-3xl self-center"><span className="text-white ml-1">سایت</span> پــیـلـیـسـوک</a>
                    {/* phone number */}
                    <div className="flex items-center gap-3">
                        <svg className="size-12 text-primary rotate-270">
                            <use href="#phone"></use>
                        </svg>
                        <div className="text-white">
                            <p className="font-danaBold text-xl">09176437156</p>
                            <p className="text-xs font-danaBold">سوالی دارید؟ باما تماس بگیرید</p>
                        </div>
                    </div>
                    {/*  address */}
                    <div className="text-white">
                        <p className="font-MorabbaBold text-2xl mb-2">آدرس ما</p>
                        <p className="text-xs font-danaBold"> بوشهر-جم-میدان امام حسین-ساختمان روبروی اداره پست </p>
                    </div>
                    {/* social media */}
                    <div className="flex gap-3 items-center">
                        <Link href={"/"}>
                            <FaInstagram className="p-1.5 size-8 border border-white/60 text-white rounded-full" />
                        </Link>
                        <Link href={"/"}>
                            <FaTelegram className="p-1.5 size-8 border border-white/60 text-white rounded-full" />
                        </Link>
                        <Link href={"/"}>
                            <FaYoutube className="p-1.5 size-8 border border-white/60 text-white rounded-full" />
                        </Link>
                        <Link href={"/"}>
                            <FaWhatsapp className="p-1.5 size-8 border border-white/60 text-white rounded-full" />
                        </Link>
                    </div>
                </div>
                {/* middle => title / links */}
                <div>
                    {/* title */}
                    <p className="font-MorabbaBold text-xl text-white w-62 mb-6">لینک های مفید</p>
                    {/* links */}
                    <div className="flex items-center justify-between">
                        {/* right links */}
                        <ul className="text-white flex flex-col gap-3">
                            <li>
                                <Link href={"/"}>صفحه اصلی</Link>
                            </li>
                            <li>
                                <Link href={"/"}>فروشگاه</Link>
                            </li>
                            <li>
                                <Link href={"/"}>وبلاگ</Link>
                            </li>
                            <li>
                                <Link href={"/"}>درباره ما</Link>
                            </li>
                            <li>
                                <Link href={"/"}>تماس با ما</Link>
                            </li>
                        </ul>
                        {/* left links */}
                        <ul className="text-white flex flex-col gap-3">
                            <li>
                                <Link href={"/"}>قوانین و مقررات </Link>
                            </li>
                            <li>
                                <Link href={"/"}>سوالات متداول</Link>
                            </li>
                            <li>
                                <Link href={"/"}>سبد خرید</Link>
                            </li>
                            <li>
                                <Link href={"/"}>فروش ویژه</Link>
                            </li>
                            <li>
                                <Link href={"/"}>نظرات مشتریان</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* left => left (working hours) / right (Site permissions) */}
                <div className="flex gap-10">
                    {/* working hours => title / box */}
                    <div>
                        {/* title */}
                        <p className="font-MorabbaBold text-xl text-white w-62 mb-6">ساعت های کاری </p>
                        {/* box */}
                        <div className="bg-[#595351] w-full rounded-lg py-5 px-7 flex items-center gap-7 justify-between text-white">
                            <div className="flex flex-col gap-4">
                                <p>شنبه - چهارشنبه:</p>
                                <p>پنجشنبه:</p>
                                <p>جمعه:</p>
                            </div>
                            <div className="flex flex-col gap-4 items-end">
                                <p>8:00 - 15:00</p>
                                <p>8:00 - 13:00</p>
                                <p>تعطیل</p>
                            </div>
                        </div>
                    </div>
                    {/* Site permissions */}
                    <div>
                        <p className="font-MorabbaBold text-xl text-white w-62 mb-6"> مجوز های سایت </p>
                        <div className="flex gap-5">
                            <img src="/images/lisence-1.png" alt="lisence-1" />
                            <img src="/images/lisence-1.png" alt="lisence-1" />
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-white text-center text-sm mt-5">تمامی حقوق برای وبسایت فروشگاهی پیلیسوک محفوظ می باشد</p>
        </div>
    );
}