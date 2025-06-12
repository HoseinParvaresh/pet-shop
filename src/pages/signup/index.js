import React, { useState } from 'react';
import apiRequests from '@/Services/Axios/Configs/Configs';
import { v4 as uuidv4 } from 'uuid';
import { isValidEmail } from '@/Utility/UtilityFunction';
import { token } from '@/Utility/Constants';

export default function Signup() {

    const [email, setEmail] = useState("")
    const username = uuidv4()
    const password = Math.random().toString(36).slice(2, 12)

    const signup = async () => {

        if(!isValidEmail(email)) {
            return false
        }

        const data = {
            username: `user-${username}`,
            email,
            password,
            confirm_password: password
        }

        apiRequests.post('/users/register/',data).then(res => {
            console.log(res);
        }).catch(error => console.log(error)); 

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
                        <div>
                            <h1 className="text-2xl mb-1 font-MorabbaBold">عضویت در پیلیسوک</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
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
                    </div>
                </div>
            </div>
        </div>
    )
}
