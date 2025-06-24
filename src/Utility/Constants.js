const url = "http://localhost:3000/"

const toggleList = [
    { id: 1, title: 'محصولات تخفیف دار', inputName: 'only_offer' },
    { id: 2, title: 'فقط محصولات موجود', inputName: 'available' },
]
const categoryList = [
    { id: 1, name: 'سگ' },
    { id: 2, name: 'گربه' },
    { id: 3, name: 'پرندگان' },
    { id: 4, name: 'ماهی' },
]
const menuList = [
    { id: 1, title: "صفحه اصلی ", link: "/" },
    { id: 2, title: "فروشگاه", link: "/store" },
    { id: 3, title: "رزرو نوبت", link: "/reservation" },
    { id: 4, title: "درباره ما", link: "/about" },
    { id: 5, title: "تماس با ما ", link: "/contact" },
]

export { url, toggleList, categoryList, menuList }