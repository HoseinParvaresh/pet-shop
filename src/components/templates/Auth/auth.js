import { cn } from "@/Utility/UtilityFunction"
import { Button } from "@/components/shadcn/button"
import { Card, CardContent } from "@/components/shadcn/card"
import { Input } from "@/components/shadcn/input"
import { Label } from "@/components/shadcn/label"
import Link from "next/link"
import React, { useState, useContext } from 'react';
import { AuthContext } from "@/context/authContext"
import { v4 as uuidv4 } from 'uuid';
import { isValidEmail, isValidPassword } from '@/Utility/UtilityFunction';
import Alert from '@/Utility/Alert';
import apiRequests from '@/Services/Axios/Configs/Configs';

export function AuthForm({ className, ...props }) {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [code, setCode] = useState("")
    const [stepRegister, setStepRegister] = useState(['', 'hidden'])

    const authContext = useContext(AuthContext)    

    async function login() {

        const data = {
            email,
            password
        }

        try {
            const res = await apiRequests.post('/users/login/', data);

            if (res.status === 200) {
                Alert("successful", "با موفقیت وارد شدید");
                authContext.login(res.data.user, res.data.access)
                setTimeout(() => {
                    window.location.replace("/")
                }, 2000);
            }
        } catch (error) {
            if (error.response?.status === 401) {
                Alert("error", "آدرس ایمیل قبلا استفاده شده و یا رمزعبور نادرست است");
                return false
            } else if (error.response?.status === 500) {
                Alert("error", "از سمت سرور مشکلی پیش اومده");
                return false
            } else {
                Alert("error", "خطای ناشناخته");
                console.log(error);
                return false
            }
        }
    }
    async function signup() {

        if (!isValidEmail(email)) {
            Alert("error", "آدرس ایمیل وارد شده اشتباه است");
            return false;
        }
        if (!isValidPassword(password)) {
            Alert("error", "رمز عبور ضعیف و یا نادرست است");
            return false;
        }

        const data = {
            username: `user-${uuidv4()}`,
            email,
            password,
            confirm_password: password
        };

        try {
            const res = await apiRequests.post('/users/register/', data);

            if (res.status === 201) {
                Alert("successful", "کد تأیید به ایمیل شما ارسال شد");
                setStepRegister(['hidden', ''])
            }
        } catch (error) {
            if (error.response?.status === 400) {
                login(email, password)
                return false
            } else if (error.response?.status === 500) {
                Alert("error", "از سمت سرور مشکلی پیش اومده");
                return false
            } else {
                Alert("error", "خطای ناشناخته");
                console.log(error);
                return false
            }
        }
    }
    async function verify() {

        const data = {
            email,
            code
        }

        try {
            const res = await apiRequests.post("/users/verify/", data);

            if (res.status === 200) {
                login(email, password)
            }
        } catch (error) {
            if (error.response?.status === 400) {
                return Alert("error", "کد وارد شده اشتباهه")
            } else if (error.response?.status === 500) {
                return Alert("error", "از سمت سرور مشکلی پیش اومده")
            } else {
                return Alert("error", "خطای ناشناخته");
            }
        }
    }
    async function resendCode() {

        try {
            const res = await apiRequests.post('/users/resend-verification-email/', { email });

            if (res.status === 202) {
                Alert("successful", "کد تأیید دوباره به ایمیل شما ارسال شد");
                return true;
            }
        } catch (error) {
            if (error.response?.status === 400) {
                return Alert("error", "آدرس ایمیل وارد شده قبلا استفاده شده است");
            } else if (error.response?.status === 500) {
                return Alert("error", "از سمت سرور مشکلی پیش اومده");
            } else {
                return Alert("error", "خطای ناشناخته");
            }
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    {/* step 1 => enter info */}
                    <form className={`p-6 md:p-8 ${stepRegister[0]}`}>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <Link href={"/"}>
                                    <h1 className="text-3xl font-MorabbaBold text-primary">پیلیسوک</h1>
                                </Link>
                                <p className="text-black/70 text-balance mt-2 font-dana">
                                    ورود یا ثبت نام در سایت
                                </p>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="email">ایمیل</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    className={"dir-ltr"}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password">رمز عبور</Label>
                                    <Link href="#" className="mr-auto text-black/70 hover:text-black text-sm underline-offset-2 hover:underline transition-colors">
                                        رمز عبورت رو فراموش کردی؟
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className={"dir-ltr"} />
                            </div>
                            <div onClick={() => signup(email, password)} className="w-full btn btn-primary btn-sm py-2 rounded-md">
                                ادامه
                            </div>
                            <div className="after:border-black/20 relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                                <span className="bg-white text-black/70 relative z-10 px-2">
                                    یا ادامه می دهید با
                                </span>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <Button variant="outline" type="button" className="w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="sr-only">Login with Apple</span>
                                </Button>
                                <Button variant="outline" type="button" className="w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="sr-only">Login with Google</span>
                                </Button>
                                <Button variant="outline" type="button" className="w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="sr-only">Login with Meta</span>
                                </Button>
                            </div>
                        </div>
                    </form>
                    {/* step 2 => OTP code */}
                    <form className={`p-6 md:p-8 ${stepRegister[1]}`}>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <Link href={"/"}>
                                    <h1 className="text-3xl font-MorabbaBold text-primary">پیلیسوک</h1>
                                </Link>
                                <p className="text-black/70 text-balance mt-3 font-dana">
                                    کد تایید برای {email} ارسال شد
                                </p>
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="code">کد تایید</Label>
                                    <div onClick={() => resendCode(email)} className="mr-auto text-black/70 hover:text-black text-sm underline-offset-2 hover:underline transition-colors">
                                        ارسال دوباره
                                    </div>
                                </div>
                                <Input
                                    id="code"
                                    type="code"
                                    required
                                    className={"dir-ltr"}
                                    value={code} onChange={e => setCode(e.target.value)}
                                />
                            </div>
                            <div onClick={() => verify(email, code)} className="w-full btn btn-primary btn-sm py-2 rounded-md">
                                تایید
                            </div>
                        </div>
                    </form>
                    {/* image */}
                    <div className="bg-black/10 relative hidden md:block">
                        <img
                            src="/images/login-cat.png"
                            alt="Image"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                </CardContent>
            </Card>
            <div className="text-black/60 *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                با کلیک روی ادامه، شما با <a href="#">شرایط خدمات</a> و <a href="#">سیاست حفظ حریم خصوصی</a> ما موافقت می‌کنید.
            </div>

        </div>
    )
}
