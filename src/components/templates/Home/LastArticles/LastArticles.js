
import LastArticle from "./LastArticle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function LastArticles() {

    const LastArticlesItem = [
        {
            id: 1,
            title: "بیماری‌های شایع حیوانات خانگی",
            image: "/images/a-1.jpg",
            date: "1404-03-14",
            author: "طراح سایت",
            commentNumber: 10,
            desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک."
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
            image: "/images/a-3.jpg",
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

    return (
        <div className="bg-secondary mt-10">
            <div className="container py-10">
                {/* top => head title / title / desc */}
                <div data-aos="fade-down" className="flex-center flex-col text-center gap-3">
                    <p className="head-title"> آخـرین مقالات</p>
                    <p className="title max-w-110"> جدیدتـرین مقالات دانشـنامه ما</p>
                    <p className="title-desc">
                        با تازه‌ترین مقالات آموزشی، به دنیای پت‌ها نزدیک‌تر شوید.
                        نکات کاربردی درباره نگهداری، تغذیه، آموزش و سلامت حیوانات خانگی، همه در دانشنامه پیلیسوک.
                    </p>
                </div>
                {/* bottom => article item */}
                <div data-aos="fade-up">
                    <Swiper
                        slidesPerView={1}
                        className="!py-10  !justify-center"
                        spaceBetween={20}
                        breakpoints={{
                            768: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {
                            LastArticlesItem.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <LastArticle {...item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
}