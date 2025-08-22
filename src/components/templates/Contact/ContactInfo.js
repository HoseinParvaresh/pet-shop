import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function ContactInfo() {
    return (
        <div>
            <p className="text-2xl/8 md:text-4xl/13 font-MorabbaBold text-primary">ما همیشه برای شما و حیوانات خانگی شما در دسترس هستیم</p>
            <p className="text-sm/6 text-dark-secondary my-5">اگر سوالی دارید، نیاز به مشاوره در خرید محصولات دارید یا هر پیشنهادی برای بهتر شدن خدمات ما در ذهن‌تان هست، با کمال میل منتظر شنیدن صدای شما هستیم. تیم پشتیبانی پیلیسوک با عشق به حیوانات و احترام به شما، پاسخ‌گوی سوالات و نیازهای شما خواهد بود.</p>
            {/* address / number / email */}
            <div className="space-y-5 text-dark-primary">
                <p className="font-danaBold text-lg ">اطلاعات تماس:</p>
                <div className="flex items-center gap-2">
                    <svg className="size-5">
                        <use href="#phone"></use>
                    </svg>
                    <span className="dir-ltr text-sm"> 0917 643 7156</span>
                </div>
                <div className="flex items-center gap-2">
                    <svg className="size-5">
                        <use href="#map-pin"></use>
                    </svg>
                    <span className="dir-ltr text-sm text-right"> بوشهر-جم-میدان امام حسین-ساختمان روبروی اداره پست  </span>
                </div>
                <div className="flex items-center gap-2">
                    <svg className="size-5">
                        <use href="#envelope"></use>
                    </svg>
                    <span className="dir-ltr text-sm"> parvaresh.dev@gmail.com </span>
                </div>
            </div>
            {/* social media */}
            <div className="flex-center gap-2 mt-5 *:size-12 *:text-white *:bg-dark-primary *:rounded-full *:p-3 *:shrink-0">
                <FaWhatsapp />
                <FaTelegram />
                <FaInstagram />
                <FaGithub />
                <FaYoutube />
            </div>
        </div>
    );
}