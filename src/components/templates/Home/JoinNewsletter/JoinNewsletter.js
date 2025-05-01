export default function JoinNewsletter() {
    return (
        <div className="bg-secondary mt-30">
            <div className="container pb-10 grid grid-cols-2">
                <div data-aos="fade-down" className="flex flex-col pt-10 text-center gap-3">
                    <p className="head-title">عضویت خبرنامه </p>
                    <p className="title max-w-110 text-right">در خبـرنامه ما عضـو شویـد</p>
                    <p className="title-desc text-right">
                    با عضویت در خبرنامه ما میتوانید از جدیدترین مقالات و تخفیف های ما باخبر شوید.
                    </p>
                    <div className=" bg-white outline outline-black/10 w-max rounded-lg mt-3">
                        <input placeholder="ایمیل شما" type="text" className=" outline-none pl-40 pr-5 py-3" />
                    </div>
                </div>
                <div>
                    {/* image */}
                    <img src="/images/main-page-pic-5.png" alt="main-page-pic-5" />
                </div>
            </div>
        </div>
    );
}