import PageHead from "@/components/modules/PageHead/PageHead";
export default function Contact() {
    return (
        <div>
            <PageHead title="تماس با ما" image="cat-1.png" />
            <div className="container grid grid-cols-2 gap-10">
                {/* info */}
                <div>
                    <p className="text-4xl/12 font-danaBold text-primary">ما همیشه برای شما و حیوانات خانگی شما در دسترس هستیم</p>
                    <p className="text-sm/6 text-dark-secondary mt-5">اگر سوالی دارید، نیاز به مشاوره در خرید محصولات دارید یا هر پیشنهادی برای بهتر شدن خدمات ما در ذهن‌تان هست، با کمال میل منتظر شنیدن صدای شما هستیم. تیم پشتیبانی پیلیسوک با عشق به حیوانات و احترام به شما، پاسخ‌گوی سوالات و نیازهای شما خواهد بود.</p>
                    <div>
                        <p className="font-danaBold">اطلاعات تماس</p>
                        <div className="flex">
                            <svg className="size-5">
                                <use href="#phone"></use>
                            </svg>
                            <span className="dir-ltr text-sm"> 0917 643 7156</span>
                        </div>
                        <div className="flex">
                            <svg className="size-5">
                                <use href="#map-pin"></use>
                            </svg>
                            <span className="dir-ltr text-sm"> بوشهر-جم-میدان امام حسین-ساختمان روبروی اداره پست  </span>
                        </div>
                        <div className="flex">
                            <svg className="size-5">
                                <use href="#envelope"></use>
                            </svg>
                            <span className="dir-ltr text-sm"> parvaresh.dev@gmail.com </span>
                        </div>
                    </div>
                </div>
                {/* form */}
                <div></div>
            </div>
        </div>
    );
}