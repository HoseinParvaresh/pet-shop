import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function BottomFooter() {
    return (
        <div className="h-100 container py-10">
            {/* right => logo / phone number / address / social media */}
            <div className="py-5 flex flex-col justify-center items-start gap-6 w-60">
                {/* logo */}
                <a href="/" className="text-primary font-MorabbaHeavy text-3xl self-center">پــیـلـیـسـوک</a>
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
                <div className="flex gap-3">
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
            {/* middle */}
            <div></div>
            {/* left */}
            <div></div>
        </div>
    );
}