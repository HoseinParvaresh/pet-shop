import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { signup, verify, resendCode,register } from '@/Services/Axios/Requests/Auth/Signup';

export default function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [code, setCode] = useState("")
    const [stepRegister, setStepRegister] = useState(['', 'hidden'])


    return (
        <div className="h-150 flex justify-center flex-col">
            <Toaster />
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
                            <h2 className="text-2xl mb-1 font-MorabbaBold text-center">عضویت در پیلیسوک</h2>
                        </div>
                        {/* step 1 => enter email */}
                        <div className={`divide-y divide-gray-200 ${stepRegister[0]}`}>
                            <div className="py-8  leading-6 space-y-4 text-gray-700 sm:leading-7">
                                <input value={email} onChange={e => setEmail(e.target.value)} autoComplete="off" autoFocus id="email" name="email" type="text" className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="آدرس ایمیل" />
                                <input value={password} onChange={e => setPassword(e.target.value)} autoComplete="off" autoFocus id="pass" name="pass" type="text" className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="رمز عبور" />
                                <div className="relative">
                                    <button onClick={register} className="btn btn-primary py-1.5 w-full">ادامه</button>
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
                                    <input value={code} onChange={e => setCode(e.target.value)} autoComplete="off" autoFocus id="code" name="code" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="کد تایید" />
                                </div>
                                <div onClick={() => verify(email, code)} className="btn btn-primary py-1.5 w-full mt-5">تایید</div>
                            </form>
                            {/* Resend OTP */}
                            <div className="flex items-center justify-end font-dana text-sm text-slate-500 mt-5">
                                <div onClick={() => resendCode(email)}>
                                    <span className='cursor-pointer'> ارسال دوباره </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
