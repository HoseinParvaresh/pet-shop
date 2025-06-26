import PersianCalendar from "./PersianCalendar";

export default function ReservationForm() {

    return (
        <div className="container">
            {/* guide section */}
            <div></div>
            {/* form */}
            <div className="grid grid-cols-1 md:grid-cols-2 mb-30 gap-5 bg-gray-100 p-5 rounded-xl">
                <form className='px-3 space-y-7 md:space-y-8'>
                    <p className="font-MorabbaBold text-2xl">درخواست نوبت دهی</p>
                    {/* first name and last name / number / National code */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                        {/* first name and last name */}
                        <div>
                            <label className="inline-block font-danaBold text-sm mb-2 md:mb-3">نام و نام خانوادگی</label>
                            <input type="text" placeholder="" className="w-full h-13 placeholder:text-slate-500 text-gray-900 bg-white text-sm py-3.5 pr-3.5 pl-13 rounded outline-none" required="" />
                        </div>
                        {/* number */}
                        <div>
                            <label className="inline-block font-danaBold text-sm mb-2 md:mb-3"> شماره تلفن </label>
                            <input type="text" placeholder="" className="w-full h-13 placeholder:text-slate-500 text-gray-900 bg-white text-sm py-3.5 pr-3.5 pl-13 rounded outline-none" required="" />
                        </div>
                        {/* National code */}
                        <div>
                            <label className="inline-block font-danaBold text-sm mb-2 md:mb-3"> کد ملی</label>
                            <input type="text" placeholder="" className="w-full h-13 placeholder:text-slate-500 text-gray-900 bg-white text-sm py-3.5 pr-3.5 pl-13 rounded outline-none" required="" />
                        </div>
                    </div>
                    {/* type of animal /  breed of animal*/}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'>
                        {/* type of animal */}
                        <div>
                            <label className="inline-block font-danaBold text-sm mb-2 md:mb-3"> حیوان  </label>
                            <select name="category" required="" className="w-full h-13 text-slate-500 bg-white text-sm p-3.5 border-l-[14px] border-l-transparent rounded outline-none">
                                <option value={false}> حیوانت چیه؟ </option>
                                <option value="سگ">سگ</option>
                                <option value="گربه">گربه</option>
                                <option value="پرنده">پرنده</option>
                                <option value="همستر">همستر</option>
                            </select>
                        </div>
                        {/* breed of animal */}
                        <div>
                            <label className="inline-block font-danaBold text-sm mb-2 md:mb-3"> نژاد </label>
                            <input type="text" placeholder="نژادش چیه؟" className="w-full h-13 placeholder:text-slate-500 text-gray-900 bg-white text-sm py-3.5 pr-3.5 pl-13 rounded outline-none" required="" />
                        </div>
                    </div>
                    {/* reason for referral / date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                        {/* reason for referral */}
                        <div>
                            <label className="inline-block font-danaBold text-sm mb-2 md:mb-3"> علت مراجعه  </label>
                            <select name="category" required="" className="w-full h-13 text-slate-500 bg-white text-sm p-3.5 border-l-[14px] border-l-transparent rounded outline-none">
                                <option value={false}> چیکار کنیم برات ؟</option>
                                <option value="واکسن">واکسن</option>
                                <option value="اصلاح">اصلاح</option>
                                <option value="پانسیون">پانسیون</option>
                            </select>
                        </div>
                        {/* date picker */}
                        <div>
                            <label className="inline-block font-danaBold text-sm mb-2 md:mb-3"> تاریخ </label>
                            <PersianCalendar />
                        </div>
                    </div>
                    {/* description */}
                    <div>
                        <label className="inline-block font-danaBold text-sm mb-2 md:mb-3"> توضیحات تکمیلی </label>
                        <textarea className="w-full min-h-30 placeholder:text-slate-500 text-gray-900 bg-white text-sm p-3.5 outline-none rounded" placeholder="سابقه درمانی ، موارد که بهشون حساسیت داره ، سابقه واکسن  و..." id="text" name="text" required=""></textarea>
                    </div>
                    {/* button */}
                    <button className="btn btn-primary w-full"> ارسال </button>
                </form>
                <div className="rounded-lg overflow-hidden">
                    <img className="h-full" src="/images/cat4.jpg" alt="cat4" />
                </div>
            </div>
        </div>
    );
}