import { BiSupport } from "react-icons/bi";
import { LuPackageCheck } from "react-icons/lu";
import { FaTruckFast } from "react-icons/fa6";
import { FaBox } from "react-icons/fa6";

export default function TopFooter() {
    return (
        <div className="flex justify-between items-center bg-primary bg__footer w-full rounded-lg">
            <div className="container flex flex-wrap gap-5 md:gap-8 items-center justify-center sm:justify-around py-5 md:py-7">
                <div className="footer__box">
                    <LuPackageCheck className="text-dark-primary size-6 md:size-8" />
                    <div className="text-white">
                        <p className="footer__box--title">ضمانت کیفیت کالا</p>
                        <p className="text-xs font-danaBold opacity-80">کیفیت را تجربه کنید</p>
                    </div>
                </div>
                <div className="footer__box">
                    <BiSupport className="text-dark-primary size-6 md:size-8" />
                    <div className="text-white">
                        <p className="footer__box--title"> پشتیبانی سریع سایت</p>
                        <p className="text-xs font-danaBold opacity-80">پشتیبانی سریع 24/7 </p>
                    </div>
                </div>
                <div className="footer__box">
                    <FaBox className="text-dark-primary size-6 md:size-8" />
                    <div className="text-white">
                        <p className="footer__box--title"> 7 روز ضمانت بازگشت</p>
                        <p className="text-xs font-danaBold opacity-80"> حتی تعویض کالا !</p>
                    </div>
                </div>
                <div className="footer__box">
                    <FaTruckFast className="text-dark-primary size-6 md:size-8" />
                    <div className="text-white">
                        <p className="footer__box--title"> تحویل سریع کالا</p>
                        <p className="text-xs font-danaBold opacity-80"> تحویل به موقع کالا</p>
                    </div>
                </div>
            </div>
        </div>
    );
}