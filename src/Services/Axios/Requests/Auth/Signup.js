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
        } else if (error.response?.status === 500) {
            Alert("error", "از سمت سرور مشکلی پیش اومده");
        } else {
            Alert("error", "خطای ناشناخته");
        }
        return false;
    }
}

async function verify () {

    const data = {
        email,
        code
    }
    apiRequests.post("/users/verify/", data)
        .then(res => {
            if (res.status === 200) {
                Alert("successful", "با موفقیت ثبت نام شدید")
                console.log(res);
                setTimeout(()=> {
                    router.push('/')
                }, 1500)
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


export {signup,verify}