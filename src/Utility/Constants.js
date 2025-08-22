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
const productSortList = [
    { id: 1, title: "همه محصولات", dataId: "default", first: true },
    { id: 2, title: "ارزان ترین", dataId: "cheapest", first: false },
    { id: 3, title: "گران ترین", dataId: "most-expensive", first: false },
    { id: 4, title: "پرفروش ترین", dataId: "best-seller", first: false },
]
// about page
const AboutExamplesOfOurWork = [
    { id: 1, petName: "خپلی", service: "اصلاح", image: "a1.jpg" },
    { id: 2, petName: "خسرو", service: "شستشو", image: "a2.jpg" },
    { id: 3, petName: "محمد سُمبل", service: "واکسن", image: "a3.png" },
    { id: 4, petName: "محمود", service: "پانسیون", image: "a5.png" },
    { id: 5, petName: "خالد کشمیری", service: "پانسیون", image: "cat-res.jpg" },
    { id: 6, petName: "گرگعلی", service: "شستشو", image: "a6.jpg" },
]
// main page
const OurServicesCards = [
    { id: 1, title: "آموزش حیوانات", src: "/images/service-1.jpg", icon: "service-1-bg", link: "/about", desc: "رفتار خوب، با آموزش درست شروع می‌شه! در پیلیسوک، مربیان حرفه‌ای با روش‌های مهربون و اصولی به پت شما آموزش می‌دن تا زندگی کنار هم راحت‌تر و شادتر باشه." },
    { id: 2, title: "سلامت حیوانات", src: "/images/service-2.jpg", icon: "paw-header", link: "/about", desc: "سلامتی پت‌ها برای ما اولویت شماره یکه! خدمات دامپزشکی پیلیسوک با حضور پزشکان مجرب، شامل واکسیناسیون، معاینه، چکاپ و مشاوره تخصصی هست." },
    { id: 3, title: "نگهداری حیوانات", src: "/images/service-3.jpg", icon: "service-3-bg", link: "/about", desc: "نگران تنها موندن پت عزیزتون نباشید! ما در پیلیسوک با محیطی امن، تمیز و شاد، از حیوانات خانگی شما مثل یکی از اعضای خانواده مراقبت می‌کنیم." }
]
const customerCommentsItems = [
    { id: 1, userProfileSrc: "/images/c-1.jpg", petProfileSrc: "/images/c-p-1.jpg", name: "حسین پرورش", petName: "جسیکا", rate: 4, desc: "واقعا خوشحالم که با پیلیسوک آشنا شدم. همیشه سفارش‌هام به موقع و با بسته‌بندی عالی می‌رسه. پت‌م عاشق غذای جدیدش شده!" },
    { id: 2, userProfileSrc: "/images/c-2.jpg", petProfileSrc: "/images/c-p-2.jpg", name: "رسول احمدزاده", petName: "برکلی", rate: 5, desc: "یه بار مجبور شدم گربه‌م رو چند روز بسپرم پانسیون پیلیسوک، انقدر رسیدگی خوب بود که اصلاً دلش نمی‌خواست برگرده خونه! واقعاً ممنونم." },
    { id: 3, userProfileSrc: "/images/c-3.jpg", petProfileSrc: "/images/c-p-3.jpg", name: "علی ابراهیمی", petName: "چارلی", rate: 3, desc: "از خدمات آرایش و اصلاح سگم خیلی راضی‌ام. تیمشون خیلی صبور و مهربونن. اولین‌باره که بعد از اصلاح، سگم استرس نداره." },
]
const LastArticlesItem = [
    {
        id: 1,
        title: "آشنایی با زبان بدن گربه‌ها",
        image: "/images/a-3.jpg",
        date: "1404-03-14",
        author: "طراح سایت",
        commentNumber: 10,
        desc: "زبان بدن گربه‌ها اطلاعات زیادی در مورد احساسات آن‌ها می‌دهد. در این مطلب آن را بررسی می‌کنیم."
    },
    {
        id: 2,
        title: "نکات مهم در تغذیه سگ‌ها",
        image: "/images/a-2.jpg",
        date: "1404-04-01",
        author: "مدیر محتوا",
        commentNumber: 7,
        desc: "در این مقاله به بررسی غذاهای مناسب و ممنوعه برای سگ‌ها می‌پردازیم تا سلامت آن‌ها تضمین شود."
    },
    {
        id: 3,
        title: "چگونه گربه‌ای سالم و شاد داشته باشیم؟",
        image: "/images/a3.png",
        date: "1404-12-10",
        author: "کارشناس دامپزشکی",
        commentNumber: 5,
        desc: "با رعایت چند نکته ساده می‌توانید از نظر جسمی و روانی از گربه‌تان مراقبت کنید."
    },
    {
        id: 4,
        title: "آشنایی با رفتارهای غیرعادی حیوانات خانگی",
        image: "/images/a-4.jpg",
        date: "1404-8-18",
        author: "تیم پیلیسوک",
        commentNumber: 12,
        desc: "رفتارهای غیرعادی ممکن است نشانه بیماری یا استرس در حیوانات باشد؛ در این مقاله آن‌ها را بررسی می‌کنیم."
    }
];
//chart data
const TransactionsData = [
    { id: "m5gr84i9", amount: 135000, status: "پرداخت شده", email: "ken99@example.com", name: "حسین پرورش", number: "09176437156", date: ["1404-05-05", "18:20:16"] },
    { id: "3u1reuv4", amount: 42500, status: "پرداخت شده", email: "Abe45@example.com", name: "علی ابراهیمی", number: "09164778809", date: ["1404-01-06", "12:45:00"] },
    { id: "derv1ws0", amount: 1890500, status: "در جریان", email: "Monserrat44@example.com", name: "محمد محمودی", number: "09175488963", date: ["1404-06-07", "19:30:10"] },
    { id: "5kma53ae", amount: 3000000, status: "پرداخت شده", email: "Silas22@example.com", name: "راحله رضایی", number: "09175263224", date: ["1404-11-08", "22:12:60"] },
    { id: "bhqecj4p", amount: 10500, status: "ناموفق", email: "hojat@example.com", name: "حجت پولادی", number: "09307717247", date: ["1404-10-09", "21:55:50"] },
    { id: "aqjhcj5m", amount: 852000, status: "در جریان", email: "saeed@example.com", name: "سعید محمدی", number: "09352145524", date: ["1404-08-10", "15:48:01"] },
    { id: "wvw43343", amount: 423000, status: "موفق", email: "ali@example.com", name: "علی مردانی", number: "09352145524", date: ["1404-06-11", "00:26:09"] },
]
const VisitorsSectionData = [
    { date: "1404-01-01", desktop: 222, mobile: 150 },
    { date: "1404-01-02", desktop: 97, mobile: 180 },
    { date: "1404-01-03", desktop: 167, mobile: 120 },
    { date: "1404-01-04", desktop: 242, mobile: 260 },
    { date: "1404-01-05", desktop: 373, mobile: 290 },
    { date: "1404-01-06", desktop: 301, mobile: 340 },
    { date: "1404-01-07", desktop: 245, mobile: 180 },
    { date: "1404-01-08", desktop: 409, mobile: 320 },
    { date: "1404-01-09", desktop: 59, mobile: 110 },
    { date: "1404-01-10", desktop: 261, mobile: 190 },
    { date: "1404-01-11", desktop: 327, mobile: 350 },
    { date: "1404-01-12", desktop: 292, mobile: 210 },
    { date: "1404-01-13", desktop: 342, mobile: 380 },
    { date: "1404-01-14", desktop: 137, mobile: 220 },
    { date: "1404-01-15", desktop: 120, mobile: 170 },
    { date: "1404-01-16", desktop: 138, mobile: 190 },
    { date: "1404-01-17", desktop: 446, mobile: 360 },
    { date: "1404-01-18", desktop: 364, mobile: 410 },
    { date: "1404-01-19", desktop: 243, mobile: 180 },
    { date: "1404-01-20", desktop: 89, mobile: 150 },
    { date: "1404-01-21", desktop: 137, mobile: 200 },
    { date: "1404-01-22", desktop: 224, mobile: 170 },
    { date: "1404-01-23", desktop: 138, mobile: 230 },
    { date: "1404-01-24", desktop: 387, mobile: 290 },
    { date: "1404-01-25", desktop: 215, mobile: 250 },
    { date: "1404-01-26", desktop: 75, mobile: 130 },
    { date: "1404-01-27", desktop: 383, mobile: 420 },
    { date: "1404-01-28", desktop: 122, mobile: 180 },
    { date: "1404-01-29", desktop: 315, mobile: 240 },
    { date: "1404-01-30", desktop: 454, mobile: 380 },
    { date: "1404-01-31", desktop: 165, mobile: 220 },
    { date: "1404-02-01", desktop: 293, mobile: 310 },
    { date: "1404-02-02", desktop: 247, mobile: 190 },
    { date: "1404-02-03", desktop: 385, mobile: 420 },
    { date: "1404-02-04", desktop: 481, mobile: 390 },
    { date: "1404-02-05", desktop: 498, mobile: 520 },
    { date: "1404-02-06", desktop: 388, mobile: 300 },
    { date: "1404-02-07", desktop: 149, mobile: 210 },
    { date: "1404-02-08", desktop: 227, mobile: 180 },
    { date: "1404-02-09", desktop: 293, mobile: 330 },
    { date: "1404-02-10", desktop: 335, mobile: 270 },
    { date: "1404-02-11", desktop: 197, mobile: 240 },
    { date: "1404-02-12", desktop: 197, mobile: 160 },
    { date: "1404-02-13", desktop: 448, mobile: 490 },
    { date: "1404-02-14", desktop: 473, mobile: 380 },
    { date: "1404-02-15", desktop: 338, mobile: 400 },
    { date: "1404-02-16", desktop: 499, mobile: 420 },
    { date: "1404-02-17", desktop: 315, mobile: 350 },
    { date: "1404-02-18", desktop: 235, mobile: 180 },
    { date: "1404-02-19", desktop: 177, mobile: 230 },
    { date: "1404-02-20", desktop: 82, mobile: 140 },
    { date: "1404-02-21", desktop: 81, mobile: 120 },
    { date: "1404-02-22", desktop: 252, mobile: 290 },
    { date: "1404-02-23", desktop: 294, mobile: 220 },
    { date: "1404-02-24", desktop: 201, mobile: 250 },
    { date: "1404-02-25", desktop: 213, mobile: 170 },
    { date: "1404-02-26", desktop: 420, mobile: 460 },
    { date: "1404-02-27", desktop: 233, mobile: 190 },
    { date: "1404-02-28", desktop: 78, mobile: 130 },
    { date: "1404-02-29", desktop: 340, mobile: 280 },
    { date: "1404-02-30", desktop: 178, mobile: 230 },
    { date: "1404-02-31", desktop: 178, mobile: 200 },
    { date: "1404-03-01", desktop: 470, mobile: 410 },
    { date: "1404-03-02", desktop: 103, mobile: 160 },
    { date: "1404-03-03", desktop: 439, mobile: 380 },
    { date: "1404-03-04", desktop: 88, mobile: 140 },
    { date: "1404-03-05", desktop: 294, mobile: 250 },
    { date: "1404-03-06", desktop: 323, mobile: 370 },
    { date: "1404-03-07", desktop: 385, mobile: 320 },
    { date: "1404-03-08", desktop: 438, mobile: 480 },
    { date: "1404-03-09", desktop: 155, mobile: 200 },
    { date: "1404-03-10", desktop: 92, mobile: 150 },
    { date: "1404-03-11", desktop: 492, mobile: 420 },
    { date: "1404-03-12", desktop: 81, mobile: 130 },
    { date: "1404-03-13", desktop: 426, mobile: 380 },
    { date: "1404-03-14", desktop: 307, mobile: 350 },
    { date: "1404-03-15", desktop: 371, mobile: 310 },
    { date: "1404-03-16", desktop: 475, mobile: 520 },
    { date: "1404-03-17", desktop: 107, mobile: 170 },
    { date: "1404-03-18", desktop: 341, mobile: 290 },
    { date: "1404-03-19", desktop: 408, mobile: 450 },
    { date: "1404-03-20", desktop: 169, mobile: 210 },
    { date: "1404-03-21", desktop: 317, mobile: 270 },
    { date: "1404-03-22", desktop: 480, mobile: 530 },
    { date: "1404-03-23", desktop: 132, mobile: 180 },
    { date: "1404-03-24", desktop: 141, mobile: 190 },
    { date: "1404-03-25", desktop: 434, mobile: 380 },
    { date: "1404-03-26", desktop: 448, mobile: 490 },
    { date: "1404-03-27", desktop: 149, mobile: 200 },
    { date: "1404-03-28", desktop: 103, mobile: 160 },
    { date: "1404-03-29", desktop: 446, mobile: 400 },
]
const StatisticsCardsSalaryData = [
    { week: "4 هفته قبل", data: 3820000 },
    { week: "3 هفته قبل", data: 6540000 },
    { week: "2 هفته قبل", data: 5790000 },
    { week: "هفته قبل", data: 7960000 },
]
const StatisticsCardsCustomerData = [
    { week: "4 هفته قبل", data: 70 },
    { week: "3 هفته قبل", data: 53 },
    { week: "2 هفته قبل", data: 80 },
    { week: "هفته قبل", data: 61 },
]
const StatisticsCardsVisitorData = [
    { week: "4 هفته قبل", data: 1500 },
    { week: "3 هفته قبل", data: 2863 },
    { week: "2 هفته قبل", data: 1452 },
    { week: "هفته قبل", data: 2750 },
]
const StoreMetricsData = [
    { month: "فروردین", salary: 186, customer: 80, visitor: 100 },
    { month: "اردیبهشت", salary: 305, customer: 200, visitor: 200 },
    { month: "خرداد", salary: 237, customer: 120, visitor: 150 },
    { month: "تیر", salary: 73, customer: 190, visitor: 83 },
    { month: "مرداد", salary: 209, customer: 130, visitor: 220 },
    { month: "شهریور", salary: 214, customer: 140, visitor: 128 },
]
const TopProductsListData = [
    [
        { date: "1404-03-01", data: 301 },
        { date: "1404-03-02", data: 221 },
        { date: "1404-03-03", data: 189 },
        { date: "1404-03-04", data: 418 },
        { date: "1404-03-05", data: 83 },
        { date: "1404-03-06", data: 226 },
        { date: "1404-03-07", data: 347 },
    ],
    [
        { date: "1404-03-01", data: 470 },
        { date: "1404-03-02", data: 224 },
        { date: "1404-03-03", data: 302 },
        { date: "1404-03-04", data: 135 },
        { date: "1404-03-05", data: 294 },
        { date: "1404-03-06", data: 189 },
        { date: "1404-03-07", data: 250 },
    ],
    [
        { date: "1404-03-01", data: 302 },
        { date: "1404-03-02", data: 111 },
        { date: "1404-03-03", data: 204 },
        { date: "1404-03-04", data: 45 },
        { date: "1404-03-05", data: 98 },
        { date: "1404-03-06", data: 201 },
        { date: "1404-03-07", data: 292 },
    ],
    [
        { date: "1404-03-01", data: 197 },
        { date: "1404-03-02", data: 265 },
        { date: "1404-03-03", data: 442 },
        { date: "1404-03-04", data: 318 },
        { date: "1404-03-05", data: 209 },
        { date: "1404-03-06", data: 367 },
        { date: "1404-03-07", data: 125 },
    ],
]
const RecentUsersData = [
    { id: "5dff23", name: "الهام جوادی", userName: "elham-javadi", email: "emy_jac@xyz.com", number: "09174561236", password: "elham23431vev", createdAt: ["1404-11-16", "16:20:12"] },
    { id: "8acb39", name: "سعید نعمتی", userName: "saeed-nemati", email: "saeed_n@xyz.com", number: "09123567891", password: "Saeed!2024@", createdAt: ["1403-09-21", "09:45:33"] },
    { id: "2fd781", name: "مهسا رجبی", userName: "mahsa-rajabi", email: "mahsa_r@xyz.com", number: "09381122345", password: "MahsaR!984#", createdAt: ["1404-03-10", "18:30:11"] },
    { id: "7bfa90", name: "کامران صادقی", userName: "kamran-sadeghi", email: "kamran_sd@xyz.com", number: "09212345678", password: "K@mran2025**", createdAt: ["1404-05-04", "11:12:09"] },
    { id: "d3412e", name: "لیلا کرمی", userName: "leila-karami", email: "leila_kr@xyz.com", number: "09191122334", password: "LeilaK#1403!", createdAt: ["1403-12-29", "20:55:44"] },
    { id: "6ae9cb", name: "امیررضا احمدی", userName: "amirreza-ahmadi", email: "amirreza_a@xyz.com", number: "09357788900", password: "Amir!Rz@23", createdAt: ["1404-06-13", "14:14:14"] },
]
const OrderStatusData = [
    { month: "فروردین", complete: 450, cancel: 300, referral: 36 },
    { month: "اردیبهشت", complete: 442, cancel: 220, referral: 38 },
    { month: "خرداد", complete: 520, cancel: 120, referral: 36 },
    { month: "تیر", complete: 550, cancel: 140, referral: 56 },
    { month: "مرداد", complete: 600, cancel: 250, referral: 55 },
    { month: "شهریور", complete: 480, cancel: 100, referral: 37 },
]
const OrderSummaryData = [
    { id: "a1b2c3d4", name: "تشویقی سگ", image: "/images/p-1.png", customerName: "نگین رفیعی", customerNumber: "09121234567", price: "95000", status: "pending", date: ["1404-04-11", "14:22:31"] },
    { id: "e5f6g7h8", name: "جعبه خاک گربه", image: "/images/p-2.png", customerName: "محمدرضا عزتی", customerNumber: "09124560088", price: "132000", status: "processing", date: ["1404-05-06", "10:01:45"] },
    { id: "i9j0k1l2", name: "ظرف غذا استیل", image: "/images/p-3.png", customerName: "زهرا امیری", customerNumber: "09223334455", price: "78000", status: "shipped", date: ["1404-03-20", "19:40:02"] },
    { id: "m3n4o5p6", name: "لباس زمستانی سگ", image: "/images/p-4.png", customerName: "علی شاکری", customerNumber: "09357779900", price: "240000", status: "delivered", date: ["1404-02-17", "08:15:27"] },
    { id: "q7r8s9t0", name: "تشک گربه", image: "/images/p-5.png", customerName: "فرزانه جلالی", customerNumber: "09128881234", price: "185000", status: "canceled", date: ["1404-06-03", "11:59:59"] },
    { id: "u1v2w3x4", name: "باکس حمل پرنده", image: "/images/p-6.png", customerName: "مهدی کیان", customerNumber: "09350001122", price: "145000", status: "returned", date: ["1404-07-21", "16:16:16"] },
    { id: "y5z6a7b8", name: "ظرف آب اتومات", image: "/images/p-7.png", customerName: "شیما محمدی", customerNumber: "09127776655", price: "112000", status: "failed", date: ["1404-08-08", "12:32:10"] },
    { id: "c9d0e1f2", name: "قلاده چرمی سگ", image: "/images/p-1.png", customerName: "نریمان راد", customerNumber: "09193334466", price: "99000", status: "pending", date: ["1404-01-12", "09:12:33"] },
    { id: "g3h4i5j6", name: "عروسک گربه", image: "/images/p-2.png", customerName: "سمانه حاجی‌پور", customerNumber: "09215558844", price: "67000", status: "processing", date: ["1404-10-01", "13:01:01"] },
    { id: "k7l8m9n0", name: "شامپو حیوانات", image: "/images/p-3.png", customerName: "فریبرز یکتا", customerNumber: "09126669977", price: "59000", status: "shipped", date: ["1404-09-27", "15:49:20"] },
    { id: "o1p2q3r4", name: "کیف حمل سگ", image: "/images/p-4.png", customerName: "نسترن جعفری", customerNumber: "09131110022", price: "305000", status: "delivered", date: ["1404-03-04", "17:35:55"] },
    { id: "s5t6u7v8", name: "پتو نرم حیوانات", image: "/images/p-5.png", customerName: "بهزاد نیکو", customerNumber: "09123456789", price: "129000", status: "canceled", date: ["1404-04-19", "20:10:41"] },
    { id: "w9x0y1z2", name: "توالت گربه", image: "/images/p-6.png", customerName: "بهناز سلیمانی", customerNumber: "09361122334", price: "215000", status: "returned", date: ["1404-11-11", "07:44:30"] },
    { id: "a3b4c5d6", name: "تشویقی مرغی سگ", image: "/images/p-7.png", customerName: "شروین فرهمند", customerNumber: "09125557788", price: "47000", status: "failed", date: ["1404-02-08", "18:25:19"] },
    { id: "e7f8g9h0", name: "شن ضدبو گربه", image: "/images/p-1.png", customerName: "شایسته عزیزی", customerNumber: "09224440011", price: "138000", status: "pending", date: ["1404-05-28", "22:02:09"] },
    { id: "i1j2k3l4", name: "بازی هوش سگ", image: "/images/p-2.png", customerName: "سعید گودرزی", customerNumber: "09129998877", price: "99000", status: "processing", date: ["1404-08-15", "14:05:44"] },
    { id: "m5n6o7p8", name: "لباس تابستانی گربه", image: "/images/p-3.png", customerName: "طاهره زمانی", customerNumber: "09358880099", price: "75000", status: "shipped", date: ["1404-06-12", "12:00:00"] },
    { id: "q9r0s1t2", name: "قفس پرنده", image: "/images/p-4.png", customerName: "یونس رادمنش", customerNumber: "09129992233", price: "410000", status: "delivered", date: ["1404-07-07", "09:30:18"] },
    { id: "u3v4w5x6", name: "جای خواب گربه", image: "/images/p-5.png", customerName: "پریا سهرابی", customerNumber: "09218887766", price: "178000", status: "canceled", date: ["1404-09-14", "06:45:00"] },
    { id: "y7z8a9b0", name: "کاسه دو قلوی غذا", image: "/images/p-6.png", customerName: "عادل منصوری", customerNumber: "09123334455", price: "115000", status: "returned", date: ["1404-10-20", "11:11:11"] }
]

export {
    url, toggleList, categoryList, menuList, productSortList, VisitorsSectionData, TransactionsData, StatisticsCardsSalaryData,
    StatisticsCardsCustomerData, StatisticsCardsVisitorData, StoreMetricsData, TopProductsListData, RecentUsersData,
    OrderStatusData, OrderSummaryData, AboutExamplesOfOurWork, OurServicesCards, customerCommentsItems, LastArticlesItem
}