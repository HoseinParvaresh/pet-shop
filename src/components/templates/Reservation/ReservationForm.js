import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { Input } from "@/components/shadcn/input";
import { Label } from '@/components/shadcn/label';

export default function ReservationForm() {
	const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
	const [fullName, setFullName] = useState("");
	const [number, setNumber] = useState("");
	const [nationalCode, setNationalCode] = useState("");
	const [animal, setAnimal] = useState("");
	const [breed, setBreed] = useState("");
	const [referral, setReferral] = useState("");
	const [date, setDate] = useState({ day: "", month: "", year: "" });
	const [description, setDescription] = useState("");

	const appointmentReservation = (e) => {
		e.preventDefault();

		const data = {
			fullName,
			number,
			nationalCode,
			animal,
			breed,
			referral,
			date,
			description,
		};
		console.log(data);
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 mb-30 gap-5 bg-gray-100 p-5 rounded-xl relative z-10">
			<span className="bg__reservation"></span>
			<form className="px-3 space-y-7 md:space-y-8">
				<p className="font-MorabbaBold text-2xl">درخواست نوبت دهی</p>
				{/* first name and last name / number / National code */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
					{/* first name and last name */}
					<div>
                        <label className="label">نام و نام خانوادگی</label>
                        <input name="fullName" type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="" className="text_input" required="" />
                    </div>
					{/* number */}
					<div>
						<label htmlFor="phone" className="label"> شماره تلفن </label>
						<input name="phone" type="text" value={number} onChange={e => setNumber(e.target.value)} placeholder="" className="text_input shadow-xs" required="" />

					</div>
					{/* National code */}
					<div>
						<label className="label"> کد ملی</label>
						<input name="NationalCode" type="text" value={nationalCode} onChange={(e) => setNationalCode(e.target.value)} placeholder="" className="text_input" required="" />
					</div>
				</div>
				{/* type of animal /  breed of animal*/}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
					{/* type of animal */}
					<div>
						<label className="label"> حیوان </label>
						<select name="animal" value={animal} onChange={(e) => setAnimal(e.target.value)} required="" className="select_input">
							<option value={false}> حیوانت چیه؟ </option>
							<option value="سگ">سگ</option>
							<option value="گربه">گربه</option>
							<option value="پرنده">پرنده</option>
							<option value="همستر">همستر</option>
						</select>
					</div>
					{/* breed of animal */}
					<div>
						<label className="label"> نژاد </label>
						<input name="breed" type="text" value={breed} onChange={(e) => setBreed(e.target.value)} placeholder="نژادش چیه؟" className="text_input" required="" />
					</div>
				</div>
				{/* reason for referral / date */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
					{/* reason for referral */}
					<div>
						<label className="label"> علت مراجعه </label>
						<select name="referral" value={referral} onChange={(e) => setReferral(e.target.value)} required="" className="select_input">
							<option value={false}> چیکار کنیم برات ؟</option>
							<option value="واکسن">واکسن</option>
							<option value="اصلاح">اصلاح</option>
							<option value="پانسیون">پانسیون</option>
							<option value="شست‌وشو">شست‌وشو</option>
							<option value="معاینه دامپزشکی">معاینه دامپزشکی</option>
							<option value="مشاوره تغذیه">مشاوره تغذیه </option>
						</select>
					</div>
					{/* date picker */}
					<div>
						<label className="label"> تاریخ </label>
						<div className="dir-rtl w-full h-13 placeholder:text-slate-500 text-gray-900 bg-white text-sm py-3.5 pr-3.5 pl-13 rounded outline-none">
							<DatePicker calendar={persian} locale={persian_fa} weekDays={weekDays} className="rmdp-mobile" calendarPosition="bottom-right" inputClass="outline-none" placeholder="کی ببینیمت؟" value={date} onChange={(e) => setDate({ day: e.day, month: e.month.number, year: e.year })} />
						</div>
					</div>
				</div>
				{/* description */}
				<div>
					<label className="label"> توضیحات تکمیلی </label>
					<textarea className="textarea_input" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="سابقه درمانی ، موارد که بهشون حساسیت داره ، سابقه واکسن  و..." id="text" name="text" required=""></textarea>
				</div>
				{/* button */}
				<button className="btn btn-primary w-full" onClick={appointmentReservation}>
					{" "}
					ارسال{" "}
				</button>
			</form>
			<div className="rounded-lg overflow-hidden hidden lg:block">
				<img className="h-full" src="/images/cat4.jpg" alt="cat4" />
			</div>
		</div>
	);
}
