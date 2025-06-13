import { v4 as uuidv4 } from 'uuid';
import { isValidEmail } from '@/Utility/UtilityFunction';
import Alert from '@/Utility/Alert';
import apiRequests from '@/Services/Axios/Configs/Configs';


async function signup(email) {
    const username = uuidv4();
    const password = Math.random().toString(36).slice(2, 12);

    if (!isValidEmail(email)) {
        Alert("error", "آدرس ایمیل وارد شده اشتباه است");
        return false;
    }

    const data = {
        username: `user-${username}`,
        email,
        password,
        confirm_password: password
    };

    try {
        const res = await apiRequests.post('/users/register/', data);

        if (res.status === 201) {
            Alert("successful", "کد تأیید به ایمیل شما ارسال شد");
            return true;
        }
    } catch (error) {
        if (error.response?.status === 400) {
            Alert("error", "آدرس ایمیل وارد شده قبلا استفاده شده است");
            return false
        } else if (error.response?.status === 500) {
            Alert("error", "از سمت سرور مشکلی پیش اومده");
            return false
        } else {
            Alert("error", "خطای ناشناخته");
            return false
        }
    }
}

async function verify(email, code) {

    const data = {
        email,
        code
    }

    try {
        const res = await apiRequests.post("/users/verify/", data);

        if (res.status === 200) {
            Alert("successful", "با موفقیت ثبت نام شدید")
            setTimeout(() => {
                window.location.replace("/")
            }, 1500)
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

async function resendCode(email) {

    try {
        const res = await apiRequests.post('/users/register/', { email });

        if (res.status === 202) {
            Alert("successful", "کد تأیید به ایمیل شما ارسال شد");
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


export { signup, verify, resendCode }