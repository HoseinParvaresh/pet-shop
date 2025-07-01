export default function UserDashboard() {
    return (
        <section class="relative flex lg:items-start lg:gap-x-8 lg:p-9 max-w-[1440px] mx-auto bg-black/10">
            <aside class="-right-65 sm:-right-70 lg:!h-[calc(100vh-64px)] fixed top-0 bottom-0 z-50 md:static lg:sticky lg:top-5 lg:h-max overflow-y-auto w-65 sm:w-70 md:w-66 lg:w-70 shrink-0 bg-white md:border-l md:border-l-black-10 px-7 py-5 lg:rounded-lg max-md:transition-all max-md:duration-300">
                <div class="flex items-center justify-between pb-5 mb-5 border-b border-b-light">
                    <div class="flex items-center gap-x-2">
                        <img class="size-11 rounded-full" src="https://secure.gravatar.com/avatar/305d06cbd488be05e4d58cce3723d4d5?s=96&amp;d=mm&amp;r=g" loading="lazy" />
                        <div class="flex flex-col text-label">
                            <span class="font-demibold max-w-28 truncate select-none">حسین</span>
                            <span class="font-regular text-secondary" data-clarity-mask="true">09176437156</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-3">
                        <button class="flex items-center justify-center cursor-pointer">
                            <span class="iconify i-linear:setting-2 size-4.5 text-muted hover:text-primary transition-colors" aria-hidden="true">
                            </span>
                        </button>
                        <button class="flex items-center justify-center cursor-pointer">
                            <span class="iconify i-linear:logout size-4.5 text-muted hover:text-red-90 transition-colors" aria-hidden="true">
                            </span>
                        </button>
                    </div>
                </div>
                <div class="flex flex-col gap-y-5">
                    <div class="flex flex-col gap-y-2.5">
                        <span class="text-label text-secondary font-regular select-none">دسترسی سریع</span>
                        <div class="flex flex-col gap-y-2">
                            <a href="/" class="router-link-active router-link-exact-active flex items-center gap-x-2.5 py-1.5 group" aria-current="page">
                                <span class="active-badge block w-0.5 h-5 ml-1 rounded-full">
                                </span>
                                <span class="iconify i-linear:home size-5 text-secondary group-hover:text-brand transition-colors" aria-hidden="true">
                                </span>
                                <span class="text-primary group-hover:text-brand text-caption transition-colors">خانه</span>
                            </a>
                            <a href="/courses" class="flex items-center gap-x-2.5 py-1.5 group">
                                <span class="active-badge block w-0.5 h-5 ml-1 rounded-full">
                                </span>
                                <span class="iconify i-linear:flash size-5 text-secondary group-hover:text-brand transition-colors" aria-hidden="true" >
                                </span>
                                <span class="text-primary group-hover:text-brand text-caption transition-colors">دوره های من</span>
                            </a>
                            <a href="/transactions" class="flex items-center gap-x-2.5 py-1.5 group">
                                <span class="active-badge block w-0.5 h-5 ml-1 rounded-full">
                                </span>
                                <span class="iconify i-linear:wallet size-5 text-secondary group-hover:text-brand transition-colors" aria-hidden="true" >
                                </span>
                                <span class="text-primary group-hover:text-brand text-caption transition-colors">اشتراک و تراکنش‌ها</span>
                            </a>
                            <a href="/tickets" class="flex items-center gap-x-2.5 py-1.5 group">
                                <span class="active-badge block w-0.5 h-5 ml-1 rounded-full">
                                </span>
                                <span class="iconify i-linear:sms size-5 text-secondary group-hover:text-brand transition-colors" aria-hidden="true" >
                                </span>
                                <span class="text-primary group-hover:text-brand text-caption transition-colors">تیکت ها</span>
                            </a>
                            <a href="/questions" class="flex items-center gap-x-2.5 py-1.5 group">
                                <span class="active-badge block w-0.5 h-5 ml-1 rounded-full">
                                </span>
                                <span class="iconify i-linear:message-question size-5 text-secondary group-hover:text-brand transition-colors" aria-hidden="true" >
                                </span>
                                <span class="text-primary group-hover:text-brand text-caption transition-colors">پرسش و پاسخ ها</span>
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-2.5"><span class="text-label text-secondary font-regular select-none">سبزلـرن پرمیوم - بزودی</span>
                        <div class="flex flex-col gap-y-2">
                            <button class="flex items-center gap-x-2.5 py-1.5 group">
                                <span class="active-badge block w-0.5 h-5 ml-1 rounded-full">
                                </span>
                                <span class="iconify i-linear:box size-5 text-secondary group-hover:text-brand transition-colors" aria-hidden="true" >
                                </span>
                                <span class="text-primary group-hover:text-brand text-caption transition-colors">دوره های ویژه</span>
                            </button>
                            <button class="flex items-center gap-x-2.5 py-1.5 group">
                                <span class="active-badge block w-0.5 h-5 ml-1 rounded-full">
                                </span>
                                <span class="iconify i-linear:youtube size-5 text-secondary group-hover:text-brand transition-colors" aria-hidden="true" >
                                </span>
                                <span class="text-primary group-hover:text-brand text-caption transition-colors">وبینار های من</span>
                            </button>
                            <button class="flex items-center gap-x-2.5 py-1.5 group">
                                <span class="active-badge block w-0.5 h-5 ml-1 rounded-full">
                                </span>
                                <span class="iconify i-linear:lamp-charge size-5 text-secondary group-hover:text-brand transition-colors" aria-hidden="true" >
                                </span>
                                <span class="text-primary group-hover:text-brand text-caption transition-colors">سبزبات (Ai)</span>
                            </button>
                            <button class="flex items-center gap-x-2.5 py-1.5 group">
                                <span class="active-badge block w-0.5 h-5 ml-1 rounded-full">
                                </span>
                                <span class="iconify i-linear:microphone-2 size-5 text-secondary group-hover:text-brand transition-colors" aria-hidden="true" >
                                </span>
                                <span class="text-primary group-hover:text-brand text-caption transition-colors">پادکست ها</span>
                            </button>
                            <button class="flex items-center gap-x-2.5 py-1.5 group">
                                <span class="active-badge block w-0.5 h-5 ml-1 rounded-full">
                                </span>
                                <span class="iconify i-linear:folder-open size-5 text-secondary group-hover:text-brand transition-colors" aria-hidden="true" >
                                </span>
                                <span class="text-primary group-hover:text-brand text-caption transition-colors">برنامه تمرینی</span>
                            </button>
                            <button class="flex items-center gap-x-2.5 py-1.5 group">
                                <span class="active-badge block w-0.5 h-5 ml-1 rounded-full"></span>
                                <span class="iconify i-linear:24-support size-5 text-secondary group-hover:text-brand transition-colors" aria-hidden="true" ></span>
                                <span class="text-primary group-hover:text-brand text-caption transition-colors">پشتیبانی اختصاصی</span>
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
            <section class="flex flex-col lg:gap-y-8 w-full overflow-hidden">
                <header class="flex items-center justify-between shrink-0 w-full h-22 px-5 sm:px-7 bg-white max-lg:border-b max-lg:border-b-light lg:rounded-lg lg:dark:darker-gradient">
                    <button class="btn-icon-area md:!hidden">
                        <span class="iconify i-linear:category-2 size-6 text-primary" aria-hidden="true" ></span>
                    </button>
                    <div class="relative z-60 hidden md:flex items-center justify-between gap-x-4 w-72 xl:w-85 bg-black-5 rounded-lg py-1 px-4 h-12">
                        <input type="text" placeholder="دوره های من، تیکت ها، مالی ..." class="size-full text-label placeholder:text-muted" value="" />
                        <span class="iconify i-linear:search-normal text-muted shrink-0" aria-hidden="true" >
                        </span>
                    </div>
                    <div class="flex items-center gap-x-5">
                        <div class="flex gap-x-3">
                            <button class="btn-icon-area text-primary">
                                <span class="iconify i-linear:moon size-6 dark:hidden" aria-hidden="true" ></span>
                                <span class="iconify i-linear:sun size-6 hidden dark:inline-block" aria-hidden="true" ></span>
                            </button>
                            <a href="https://sabzlearn.ir/cart/" target="_blank" class="btn-icon-area text-primary"><span class="iconify i-linear:shopping-cart size-6" aria-hidden="true" ></span>
                            </a>

                            <button class="btn-icon-area text-primary">
                                <span class="iconify i-linear:notification-bing size-6" aria-hidden="true" ></span>
                            </button>
                        </div>
                        <div class="max-lg:hidden w-px h-6 bg-light">
                        </div>
                        <time datetime="2025-07-01T08:29:42.802Z" class="max-lg:hidden text-label text-secondary select-none">سه‌شنبه ۱۰ تیر</time>
                    </div>
                </header>
                <div id="below-header">
                </div>
                <section class="bg-white p-5 sm:p-7 lg:rounded-lg h-full lg:dark:darker-gradient">
                    <div class="">
                        <div class="-mx-5 -mb-6 lg:-m-7 lg:dark:-m-[29px] bg-black-10">
                            <div class="lg:pb-8">
                                <section class="lg:dark:darker-gradient-app bg-white flex items-center justify-between flex-wrap gap-x-3 gap-y-4 px-5 sm:px-7 py-5 lg:rounded-lg">
                                    <div class="w-32 sm:w-38 flex items-center gap-x-3 sm:gap-x-5">
                                        <img class="size-9 sm:size-11 md:size-12" src="/courses-empty.png" alt="" />
                                        <div class="flex flex-col gap-y-1 text-label sm:text-caption">
                                            <span class="font-bold">36 دوره</span>
                                            <span class="font-regular text-secondary">دوره ها من</span>
                                        </div>
                                    </div>
                                    <div class="w-32 sm:w-38 flex items-center gap-x-3 sm:gap-x-5">
                                        <img class="size-9 sm:size-11 md:size-12" src="/questions-empty.png" alt="" />
                                        <div class="flex flex-col gap-y-1 text-label sm:text-caption">
                                            <span class="font-bold">4 پرسش</span>
                                            <span class="font-regular text-secondary">پرسش پاسخ</span>
                                        </div>
                                    </div>
                                    <div class="w-32 sm:w-38 flex items-center gap-x-3 sm:gap-x-5">
                                        <img class="size-9 sm:size-11 md:size-12" src="/tickets-empty.png" alt="" />
                                        <div class="flex flex-col gap-y-1 text-label sm:text-caption">
                                            <span class="font-bold">13 تیکت</span>
                                            <span class="font-regular text-secondary">تیکت ها</span>
                                        </div>
                                    </div>
                                    <div class="w-32 sm:w-38 flex items-center gap-x-3 sm:gap-x-5">
                                        <img class="size-9 sm:size-11 md:size-12" src="/transactions-empty.png" alt="" />
                                        <div class="flex flex-col gap-y-1 text-label sm:text-caption">
                                            <span class="font-bold">0 <span class="text-label font-regular mr-0.5">تومانءءء</span>
                                            </span>
                                            <span class="font-regular text-secondary">کیف پول</span>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div class="lg:pb-7">
                                <section class="lg:dark:darker-gradient-app bg-white p-5 lg:rounded-lg">
                                    <div class="flex items-center justify-between mb-6"><span class="font-bold">اخیرا مشاهده شده</span>
                                        <a href="/courses" class="btn-xs btn-filled-gray btn-only-icon">
                                            <span class="iconify i-linear:arrow-left size-3.5" aria-hidden="true" >
                                            </span>
                                        </a>
                                    </div>
                                    <div class="grid grid-cols-12 gap-5">
                                        <div class="col-span-6 sm:col-span-4 xl:col-span-3 shadow-normal overflow-hidden group rounded-md">
                                            <div class="relative aspect-video overflow-hidden rounded-md">
                                                <div class="absolute inset-0 size-full flex items-center justify-center rounded-md z-20 bg-black/30">
                                                    <a href="https://sabzlearn.ir/lesson/47-27712" class="size-10 xs:size-12 xl:size-15" target="_blank">
                                                        <span class="iconify i-bold:play size-full text-white dark:text-[#fff]/80" aria-hidden="true" >
                                                        </span>
                                                    </a>
                                                </div>
                                                <img class="size-full rounded-md group-hover:scale-105 transition-all" src="https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-29-1-768x432.webp" alt="" />
                                            </div>
                                            <div class="p-3">
                                                <div class="pb-4 mb-4 border-b border-b-light"><a href="https://sabzlearn.ir/lesson/47-27712" target="_blank" class="text-label xl:text-caption h-12 xl:h-14 line-clamp-2">آموزش ۲۰ کتابخانه کاربردی ReactJS برای بازارکار</a>
                                                </div>
                                                <div class="flex items-center justify-center gap-x-1 text-brand">
                                                    <div class="w-17 shrink-0 text-label font-light select-none">10% مشاهده</div>
                                                    <div class="w-full h-1 bg-black-10 rounded-full overflow-hidden">
                                                        <div class="bg-brand h-full rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-span-6 sm:col-span-4 xl:col-span-3 shadow-normal overflow-hidden group rounded-md">
                                            <div class="relative aspect-video overflow-hidden rounded-md">
                                                <div class="absolute inset-0 size-full flex items-center justify-center rounded-md z-20 bg-black/30">
                                                    <a href="https://sabzlearn.ir/lesson/17-27381" class="size-10 xs:size-12 xl:size-15" target="_blank">
                                                        <span class="iconify i-bold:play size-full text-white dark:text-[#fff]/80" aria-hidden="true" ></span>
                                                    </a>
                                                </div>
                                                <img class="size-full rounded-md group-hover:scale-105 transition-all" src="https://sabzlearn.ir/wp-content/uploads/2023/12/Com_react-1-768x432.webp" alt="" />
                                            </div>
                                            <div class="p-3">
                                                <div class="pb-4 mb-4 border-b border-b-light">
                                                    <a href="https://sabzlearn.ir/lesson/17-27381" target="_blank" class="text-label xl:text-caption h-12 xl:h-14 line-clamp-2">آموزش ری اکت ( ReactJS ) در دنیای واقعی | از 0 تا استخدام [منتورشیپ]</a>
                                                </div>
                                                <div class="flex items-center justify-center gap-x-1 text-brand">
                                                    <div class="w-17 shrink-0 text-label font-light select-none">31% مشاهده</div>
                                                    <div class="w-full h-1 bg-black-10 rounded-full overflow-hidden">
                                                        <div class="bg-brand h-full rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-span-6 sm:col-span-4 xl:col-span-3 shadow-normal overflow-hidden group rounded-md">
                                            <div class="relative aspect-video overflow-hidden rounded-md"><div class="absolute inset-0 size-full flex items-center justify-center rounded-md z-20 bg-black/30">
                                                <a href="https://sabzlearn.ir/lesson/45-28513" class="size-10 xs:size-12 xl:size-15" target="_blank">
                                                    <span class="iconify i-bold:play size-full text-white dark:text-[#fff]/80" aria-hidden="true" ></span>
                                                </a>
                                            </div>
                                                <img class="size-full rounded-md group-hover:scale-105 transition-all" src="https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-27-1-768x432.webp" alt="" />
                                            </div>
                                            <div class="p-3">
                                                <div class="pb-4 mb-4 border-b border-b-light">
                                                    <a href="https://sabzlearn.ir/lesson/45-28513" target="_blank" class="text-label xl:text-caption h-12 xl:h-14 line-clamp-2">آموزش Next.js بصورت پروژه محور</a>
                                                </div>
                                                <div class="flex items-center justify-center gap-x-1 text-brand">
                                                    <div class="w-17 shrink-0 text-label font-light select-none">34% مشاهده</div>
                                                    <div class="w-full h-1 bg-black-10 rounded-full overflow-hidden">
                                                        <div class="bg-brand h-full rounded-full">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-span-6 sm:col-span-4 xl:col-span-3 shadow-normal overflow-hidden group rounded-md">
                                            <div class="relative aspect-video overflow-hidden rounded-md">
                                                <div class="absolute inset-0 size-full flex items-center justify-center rounded-md z-20 bg-black/30">
                                                    <a href="https://sabzlearn.ir/lesson/25-25708" class="size-10 xs:size-12 xl:size-15" target="_blank">
                                                        <span class="iconify i-bold:play size-full text-white dark:text-[#fff]/80" aria-hidden="true" >
                                                        </span>
                                                    </a>
                                                </div>
                                                <img class="size-full rounded-md group-hover:scale-105 transition-all" src="https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-6-1-768x432.webp" alt="" />
                                            </div>
                                            <div class="p-3">
                                                <div class="pb-4 mb-4 border-b border-b-light">
                                                    <a href="https://sabzlearn.ir/lesson/25-25708" target="_blank" class="text-label xl:text-caption h-12 xl:h-14 line-clamp-2">آموزش پایتون مقدماتی تا پیشرفته + پروژه های جذاب</a>
                                                </div>
                                                <div class="flex items-center justify-center gap-x-1 text-brand"><div class="w-17 shrink-0 text-label font-light select-none">4% مشاهده</div>
                                                    <div class="w-full h-1 bg-black-10 rounded-full overflow-hidden"><div class="bg-brand h-full rounded-full">
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div class="grid grid-cols-12 lg:gap-7">
                                <section class="lg:dark:darker-gradient-app lg:col-span-6 col-span-full bg-white p-5 lg:rounded-lg">
                                    <div class="flex items-center justify-between mb-6"><span class="font-bold">تیکت های اخیر</span>
                                        <a href="/tickets" class="btn-xs btn-filled-gray btn-only-icon text-secondary">
                                            <span class="iconify i-linear:arrow-left size-3.5" aria-hidden="true" ></span>
                                        </a>
                                    </div>
                                    <div class="space-y-5">
                                        <div class="p-5 space-y-5 border border-light hover:border-strong transition-all rounded-md">
                                            <div class="flex items-center justify-between gap-x-3"><a href="/tickets/20002" class="text-caption truncate">خطای ناشناخته در ساخت لینک امن</a>
                                                <a href="/tickets/20002" class="flex items-center gap-x-2 py-1 text-label shrink-0 text-secondary"> مشاهده <span class="iconify i-linear:arrow-left size-3.5" aria-hidden="true" ></span>
                                                </a>
                                            </div>
                                            <div class="flex items-center justify-between"><div class="flex items-center gap-x-2 text-label select-none">
                                                <div class="flex items-center gap-x-1.5 text-secondary"><span class="iconify i-linear:document-text" aria-hidden="true" >
                                                </span>
                                                    <span>دپارتمان:</span>
                                                </div>
                                                <span class="text-primary">پشتیبانی</span>
                                            </div>
                                                <div class="w-25 text-center px-2 py-0.5 bg-brand-90/10 text-brand-darker text-label rounded-md">پاسخ داده شده</div>
                                            </div>
                                        </div>
                                        <div class="p-5 space-y-5 border border-light hover:border-strong transition-all rounded-md"><div class="flex items-center justify-between gap-x-3"><a href="/tickets/18593" class="text-caption truncate">کانال الماسی</a>
                                            <a href="/tickets/18593" class="flex items-center gap-x-2 py-1 text-label shrink-0 text-secondary"> مشاهده <span class="iconify i-linear:arrow-left size-3.5" aria-hidden="true" ></span>
                                            </a>
                                        </div>
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center gap-x-2 text-label select-none">
                                                    <div class="flex items-center gap-x-1.5 text-secondary"><span class="iconify i-linear:document-text" aria-hidden="true" ></span>
                                                        <span>دپارتمان:</span>
                                                    </div>
                                                    <span class="text-primary">پشتیبانی</span>
                                                </div>
                                                <div class="w-25 text-center px-2 py-0.5 bg-primary/10 text-primary text-label rounded-md">بسته شده</div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section class="lg:dark:darker-gradient-app lg:col-span-6 col-span-full bg-white p-5 lg:rounded-lg">
                                    <div class="flex items-center justify-between mb-6"><span class="font-bold">پرسش های اخیر</span>
                                        <a href="/questions" class="btn-xs btn-filled-gray btn-only-icon text-secondary">
                                            <span class="iconify i-linear:arrow-left size-3.5" aria-hidden="true" ></span>
                                        </a>
                                    </div>
                                    <div class="space-y-5">
                                        <div class="p-5 space-y-5 border border-light hover:border-strong transition-all rounded-md">
                                            <div class="flex items-center justify-between gap-x-3"><a href="https://sabzlearn.ir/lesson/17-27548/#q-29012" class="text-caption truncate">سلام آقای سعیدی راد وقت تون بخیرخ ...</a>
                                            </div>
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center gap-x-4">
                                                    <div class="flex items-center gap-x-2 text-label select-none">
                                                        <span class="iconify i-linear:book size-4 text-secondary" aria-hidden="true" >
                                                        </span>
                                                        <a href="https://sabzlearn.ir/course/reactjs/" target="_blank" class="text-primary hover:text-brand transition-colors">آموزش  ReactJS</a>
                                                    </div>
                                                </div>
                                                <div class="w-25 text-center px-2 py-0.5 bg-primary/10 text-primary text-label rounded-md">بسته شده</div>

                                            </div>
                                        </div>
                                        <div class="p-5 space-y-5 border border-light hover:border-strong transition-all rounded-md">
                                            <div class="flex items-center justify-between gap-x-3"><a href="https://sabzlearn.ir/lesson/17-24679/#q-28060" class="text-caption truncate">فرق js با jsx تو پسوند فایل ها چیه؟ ...</a>
                                            </div>
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center gap-x-4">
                                                    <div class="flex items-center gap-x-2 text-label select-none">
                                                        <span class="iconify i-linear:book size-4 text-secondary" aria-hidden="true" >
                                                        </span>
                                                        <a href="https://sabzlearn.ir/course/reactjs/" target="_blank" class="text-primary hover:text-brand transition-colors">آموزش  ReactJS</a>
                                                    </div>
                                                </div>
                                                <div class="w-25 text-center px-2 py-0.5 bg-primary/10 text-primary text-label rounded-md">بسته شده</div>

                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}