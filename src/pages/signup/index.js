import React, { useState } from 'react';
import apiRequests from '@/Services/Axios/Configs/Configs';
import { v4 as uuidv4 } from 'uuid';
import { isValidEmail } from '@/Utility/UtilityFunction';
import Alert from '@/Utility/Alert';
import { useRouter } from 'next/router'

export default function Signup() {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [otp1, setOtp1] = useState("")
    const [otp2, setOtp2] = useState("")
    const [otp3, setOtp3] = useState("")
    const [otp4, setOtp4] = useState("")
    const [otp5, setOtp5] = useState("")
    const [stepRegister, setStepRegister] = useState(['', 'hidden'])

    const signup = async () => {

        const username = uuidv4()
        const password = Math.random().toString(36).slice(2, 12)

        if (!isValidEmail(email)) {
            Alert("error", "آدرس ایمیل وارد شده اشتباه است")
            return false
        }

        const data = {
            username: `user-${username}`,
            email,
            password,
            confirm_password: password
        }

        apiRequests.post('/users/register/', data)
            .then(res => {
                if (res.status === 201) {
                    setStepRegister(['hidden', ''])
                    return Alert("successful", "کد تأیید به ایمیل شما ارسال شد")
                }
            }).catch(error => {
                if (error.status === 400) {
                    return Alert("error", "آدرس ایمیل وارد شده قبلا استفاده شده است")
                }
                if (error.status === 500) {
                    return Alert("error", "از سمت سرور مشکلی پیش اومده")
                }
            });

    }
    const moveToNextOtpInput = (e) => {
        let maxLength = parseInt(e.target.maxLength)
        let inputValue = e.target.value

        if (e.key === 'Backspace' && inputValue.length === 0) {
            let previousInput = e.target.previousElementSibling;
            if (previousInput) {
                previousInput.focus();
            }
        } else if (inputValue.length >= maxLength && e.key !== 'Backspace') {
            let nextInput = e.target.nextElementSibling;
            if (nextInput) {
                nextInput.focus()
            }
        }

        if (!e.target.nextElementSibling) {
            verify()
        }
    }
    const verify = async () => {

        const data = {
            email,
            code: otp1 + otp2 + otp3 + otp4 + otp5
        }
        apiRequests.post("/users/verify/",data)
        .then(res => {
            if (res.status === 200) {
                Alert("successful", "با موفقیت ثبت نام شدید")
                router.push('/')
            }
        })
        .catch(error => {
            if (error.status === 400) {
                return Alert("error", "کد وارد شده اشتباهه")
            }
            if (error.status === 500) {
                return Alert("error", "از سمت سرور مشکلی پیش اومده")
            }
        })
    }

    return (
        <div className="h-150 flex justify-center flex-col">
            <img className='absolute size-20 top-27 -right-9' src="/images/cat1.png" alt="cat1" loading='lazy' />
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:px-20">
                    <img className='absolute size-20 -top-[55px] left-0 -z-10' src="/images/cat3.png" alt="cat3" loading='lazy' />
                    <img className='absolute size-20 -bottom-[55px] right-0 -z-10 rotate-180' src="/images/cat2.png" alt="cat2" loading='lazy' />

                    <div className="max-w-md mx-auto">
                        {/* title */}
                        <div>
                            <h1 className="text-2xl mb-1 font-MorabbaBold text-center">عضویت در پیلیسوک</h1>
                        </div>
                        {/* step 1 => enter email */}
                        <div className={`divide-y divide-gray-200 ${stepRegister[0]}`}>
                            <div className="py-8  leading-6 space-y-4 text-gray-700 sm:leading-7">
                                <div className="relative">
                                    <input value={email} onChange={e => setEmail(e.target.value)} autoComplete="off" autoFocus id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="آدرس ایمیل" />
                                    <label htmlFor="email" className="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs">آدرس ایمیل</label>
                                </div>
                                <div className="relative">
                                    <button onClick={signup} className="btn btn-primary py-1.5 w-full">ادامه</button>
                                </div>
                            </div>
                        </div>
                        {/* step 2 => enter otp */}
                        <div className={`${stepRegister[1]}`}>
                            {/* OTP Form Head */}
                            <span className="block text-center my-4 sm:my-5 line-clamp-1"> کد تایید برای <span className="otp-phone__text"> {email} </span> ارسال شد. </span>
                            {/* OTP Inputs */}
                            <form className="otp__form">
                                <div className="flex justify-center gap-x-1" dir="ltr">
                                    <input value={otp1} onChange={e => setOtp1(e.target.value)} onKeyUp={moveToNextOtpInput} className="form-input" type="text" inputMode="numeric" min="0" max="9" maxLength="1" required="" />
                                    <input value={otp2} onChange={e => setOtp2(e.target.value)} onKeyUp={moveToNextOtpInput} className="form-input" type="text" inputMode="numeric" min="0" max="9" maxLength="1" required="" />
                                    <input value={otp3} onChange={e => setOtp3(e.target.value)} onKeyUp={moveToNextOtpInput} className="form-input" type="text" inputMode="numeric" min="0" max="9" maxLength="1" required="" />
                                    <input value={otp4} onChange={e => setOtp4(e.target.value)} onKeyUp={moveToNextOtpInput} className="form-input" type="text" inputMode="numeric" min="0" max="9" maxLength="1" required="" />
                                    <input value={otp5} onChange={e => setOtp5(e.target.value)} onKeyUp={moveToNextOtpInput} className="form-input" type="text" inputMode="numeric" min="0" max="9" maxLength="1" required="" />
                                </div>
                                <button type="submit" className="btn btn-primary py-1.5 w-full mt-5">تایید</button>
                            </form>
                            {/* Resend OTP */}
                            <div className="flex items-center justify-end font-dana text-sm text-slate-500 mt-5">
                                <button type="button" className="user-otp__resend">
                                    <span className='cursor-pointer'> ارسال دوباره </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
