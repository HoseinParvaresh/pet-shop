import CatPawTrail from "@/components/templates/Reservation/CatPawTrail";

export default function Reservation() {
    return (
        <div>
            <div className="h-30 bg-primary flex items-center justify-around w-full relative mb-30 overflow-hidden bg__footer">
                {/* right */}
                <div className="z-10">
                    <p className="font-MorabbaBold text-4xl text-dark-primary">رزرو نوبت</p>
                </div>
                {/* left */}
                <div>
                    {/* <img className="w-70" src="/images/cat-2.png" alt="cat" /> */}
                </div>
            </div>
            <div className="container grid grid-cols-2 mb-30 gap-10">
                <form className='px-3 space-y-7 md:space-y-8 bg-gray-100 p-5 rounded-lg'>
                    <p className="font-MorabbaBold text-2xl">درخواست رزرو</p>
                    {/* book name */}
                    <div className="relative">
                        <label className="inline-block font-Dana text-sm mb-2 md:mb-3">عنوان کتاب</label>
                        <input type="text" placeholder='عنوان کتاب' className="w-full h-13 placeholder:text-slate-500 text-gray-900 bg-white text-sm py-3.5 pr-3.5 pl-13 rounded outline-none" required="" />
                    </div>
                    {/* book status / book category / book province */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5'>
                        {/* book category */}
                        <div>
                            <label className="inline-block font-Dana text-sm mb-2 md:mb-3"> دسته بندی </label>
                            <select name="category" required="" className="w-full h-13 text-slate-500 bg-white text-sm p-3.5 border-l-[14px] border-l-transparent rounded outline-none">
                                <option value={false}> موضوعش چیه؟ </option>
                                <option value="داستان و رمان">داستان و رمان</option>
                                <option value="مدیریت و کسب و کار">مدیریت و کسب و کار</option>
                                <option value="ادبیات">ادبیات</option>
                                <option value="روان‌شناسی">روان‌شناسی</option>
                                <option value="زندگی‌نامه">زندگی‌نامه</option>

                            </select>
                        </div>
                        {/* book status */}
                        <div>
                            <label className="inline-block text-sm mb-2 md:mb-3"> وضعیت </label>
                            <select name="status" required="" className="w-full h-13 text-slate-500 bg-white text-sm p-3.5 border-l-[14px] border-l-transparent rounded outline-none">
                                <option value={false}> کتابت در چه حاله؟ </option>
                                <option value="کاملا نو">کاملا نو</option>
                                <option value="در حد نو">در حد نو</option>
                                <option value="آسیب دیده"> آسیب دیده </option>
                            </select>
                        </div>
                    </div>
                    {/* description */}
                    <textarea className="w-full min-h-48 placeholder:text-slate-500 text-gray-900 bg-white text-sm p-3.5 outline-none rounded" placeholder="توضیحات" id="text" name="text" required=""></textarea>
                    {/* button */}
                    <button className={`btn btn-primary sm:w-62 `}> ثبت اطلاعات کتاب </button>
                </form>
                <div className="rounded-lg overflow-hidden">
                    <img src="/images/cat4.jpg" alt="cat4" />
                </div>
            </div>

        </div>
    );
}