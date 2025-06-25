import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/layouts/mobile.css"

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"]

export default function PersianCalendar() {
    return (
        <div className="dir-rtl w-full h-13 placeholder:text-slate-500 text-gray-900 bg-white text-sm py-3.5 pr-3.5 pl-13 rounded outline-none">
            <DatePicker
                calendar={persian}
                locale={persian_fa}
                weekDays={weekDays}
                className="rmdp-mobile"
                calendarPosition="bottom-right"
                inputClass="outline-none"
                placeholder="کی ببینیمت؟"
            />
        </div>
    );
}