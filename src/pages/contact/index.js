import PageHead from "@/components/modules/PageHead/PageHead";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
export default function Contact() {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")

    const sendMessage = () => {
        console.log("message");
        
    }

    return (
        <div>
            <PageHead title="تماس با ما" image="cat-1.png" />
            <div className="container grid grid-cols-2 gap-10">
                {/* info */}
                <div>
                    <p className="text-4xl/12 font-danaBold text-primary">ما همیشه برای شما و حیوانات خانگی شما در دسترس هستیم</p>
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
                            <span className="dir-ltr text-sm"> بوشهر-جم-میدان امام حسین-ساختمان روبروی اداره پست  </span>
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
                {/* form */}
                <div className="bg-gray-200 rounded-xl p-12.5">
                    <p className="text-3xl text-primary font-danaBold mb-12">نظر خود را ارسال کنید</p>
                    <form action="#" className="space-y-4">
                            <input name="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="نام" className="text_input" required="" />
                            <input name="name" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="ایمیل" className="text_input" required="" />
                            <textarea className="textarea_input" value={message} onChange={e => setMessage(e.target.value)} placeholder="پیام" id="text" name="text" required=""></textarea>
                            <button className="btn btn-primary w-full" onClick={sendMessage}> ارسال پیام </button>

                    </form>
                </div>
            </div>
        </div>
    );
}