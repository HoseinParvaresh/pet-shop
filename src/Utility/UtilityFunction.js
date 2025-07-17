import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import moment from 'moment-jalaali'

function customScroll(id) {
    const scrollPercent = (window.scrollY - 100) / ((document.body.clientHeight) - (window.innerHeight))
    document.querySelector(id).style.right = (Math.round(scrollPercent * 100)) + '%'
}
function formatNumber(num) {
    return new Intl.NumberFormat('en-US', { style: "decimal" }).format(num);
}
function calcDiscountPrice(price, discount) {
    return Math.round(price - (price * (discount / 100)))
}
function toggleMobileNavbar() {
    document.querySelector('.navigation').classList.toggle('menu-active')
    document.querySelector('.mobile-overlay').classList.toggle('show')
}
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
function isValidPassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}
function addToRecentlyViewed(productId) {
    if (typeof window === 'undefined') return;

    let viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    viewed = viewed.filter(id => id !== productId);
    viewed.unshift(productId);
    if (viewed.length > 4) viewed = viewed.slice(0, 4);

    localStorage.setItem('recentlyViewed', JSON.stringify(viewed));
}
function getRecentlyViewed() {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
}
function cn(...inputs) {
    return twMerge(clsx(inputs));
}
function convertDate(dateStr, withYear = false) {
    moment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true })
    const date = moment(dateStr, 'jYYYY-jMM-jDD')
    return withYear
        ? date.format('jD jMMMM jYYYY') 
        : date.format('jD jMMMM')        
}
function calcRelativeTimeDifference(createdAt) {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);

    const timeDifference = currentTime - createdTime;
    const hours = Math.floor(timeDifference / (60 * 60 * 1000));
    const minutes = Math.floor(timeDifference / (60 * 1000));
    const days = Math.floor(hours / 24);


    if (minutes < 1) {
        return 'لحظاتی پیش'
    }
    if (minutes < 60) {
        return `${minutes} دقیقه پیش`
    }
    else {
        if (hours < 24) {
            return `${hours} ساعت پیش`;
        } else {
            return `${days} روز پیش`;
        }
    }
};


export {
    customScroll, formatNumber, calcDiscountPrice, toggleMobileNavbar, isValidEmail, isValidPassword, addToRecentlyViewed,
    getRecentlyViewed, cn, convertDate, calcRelativeTimeDifference
}