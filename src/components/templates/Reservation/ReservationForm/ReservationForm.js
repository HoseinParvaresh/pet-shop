
import TextInput from "@/components/modules/Tags/TextInput"
import SelectInput from "@/components/modules/Tags/SelectInput"
import TextareaInput from "@/components/modules/Tags/TextareaInput";
import PersianCalendar from "./PersianCalendar";

export default function ReservationForm() {

    return (
        <div className="container grid grid-cols-1 md:grid-cols-2 mb-30 gap-5 lg:gap-10">
            <form className='px-3 space-y-7 md:space-y-8 bg-gray-100 p-5 rounded-lg'>
                <p className="font-MorabbaBold text-2xl">درخواست رزرو</p>
                {/* first name and last name / number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    {/* first name and last name */}
                    <TextInput label="نام و نام خانوادگی" placeholder="" />
                    {/* number */}
                    <TextInput label="شماره تلفن" placeholder="" />
                </div>
                {/* type of animal /  breed of animal*/}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'>
                    {/* type of animal */}
                    <SelectInput label="حیوان" placeholder="حیوانت چیه؟"
                        selectItems={[
                            { id: 1, value: "سگ" },
                            { id: 2, value: "گربه" },
                            { id: 3, value: "پرنده" },
                            { id: 4, value: "همستر" },
                        ]} />
                    {/* breed of animal */}
                    <TextInput label="نژاد" placeholder="نژادش چیه؟" />
                </div>
                {/* reason for referral / date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    {/* reason for referral */}
                    <SelectInput label="علت مراجعه" placeholder="چیکار کنیم برات ؟"
                        selectItems={[
                            { id: 1, value: "واکسن" },
                            { id: 2, value: "اصلاح" },
                            { id: 3, value: "پانسیون" },
                        ]} />
                    {/* date picker */}
                    <div>
                        <label className="inline-block font-danaBold text-sm mb-2 md:mb-3"> تاریخ </label>
                        <PersianCalendar/>
                    </div>
                </div>
                {/* description */}
                <TextareaInput label="توضیحات تکمیلی" placeholder="سابقه درمانی ، موارد که بهشون حساسیت داره ، سابقه واکسن  و..."/>
                {/* button */}
                <button className="btn btn-primary w-full"> ارسال </button>
            </form>
            <div className="rounded-lg overflow-hidden">
                <img className="h-full" src="/images/cat4.jpg" alt="cat4" />
            </div>
        </div>
    );
}