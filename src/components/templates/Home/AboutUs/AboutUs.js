export default function AboutUs() {
    return (
        <div className="mt-50 flex items-center">
            {/* right side */}
            <div>
                <p className="head-title">درباره ما بدانیـد</p>
                <p className="title">ما عاشـق حیـوانات شـیـریـن شما هسـتیم</p>
                <p className="text-dark-secondary max-w-[620px] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز می باشد.</p>
                <div className="grid grid-cols-2 gap-7">
                    <div className="flex gap-3">
                        <div className="size-6 flex-center rounded-sm bg-primary">
                            <svg className="size-3.5 text-white"strokeWidth={4} >
                                <use href="#check"></use>
                            </svg>
                        </div>
                        <p className="font-MorabbaBold text-lg text-dark-primary">نیروهای متخصص</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="size-6 flex-center rounded-sm bg-primary">
                            <svg className="size-3.5 text-white"strokeWidth={4} >
                                <use href="#check"></use>
                            </svg>
                        </div>
                        <p className="font-MorabbaBold text-lg text-dark-primary">نگهداری 24 ساعته</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="size-6 flex-center rounded-sm bg-primary">
                            <svg className="size-3.5 text-white"strokeWidth={4} >
                                <use href="#check"></use>
                            </svg>
                        </div>
                        <p className="font-MorabbaBold text-lg text-dark-primary">بهترین دامپزشکان </p>
                    </div>
                    <div className="flex gap-3">
                        <div className="size-6 flex-center rounded-sm bg-primary">
                            <svg className="size-3.5 text-white"strokeWidth={4} >
                                <use href="#check"></use>
                            </svg>
                        </div>
                        <p className="font-MorabbaBold text-lg text-dark-primary">غذاهای با کیفیت </p>
                    </div>
                </div>
            </div>
            {/* left side */}
            <div>

            </div>
        </div>
    );
}