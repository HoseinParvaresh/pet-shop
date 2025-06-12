const url = "/"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ5OTIwMDMzLCJpYXQiOjE3NDk3NDcyMzMsImp0aSI6ImU2YzNiMmI1YTViYTQ0NjY5YmFlZmUzNjcyMzdhY2FjIiwidXNlcl9pZCI6MX0.KuFX-RgmbM-mcKKrIAFzRs9FEVnw0Db31nbilYkzAV0"

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
    { id: 3, title: "وبلاگ", link: "#" },
    { id: 4, title: "درباره ما", link: "#" },
    { id: 5, title: "تماس با ما ", link: "#" },
]




export { url, toggleList, categoryList, menuList,token }