import AboutUsCheckBox from "./AboutUsCheckBox";

export default function AboutUs() {
    return (
        <div className="mt-90 2xs:mt-80 md:mt-30 lg:mt-50 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* right side => head title - title - desc check box */}
            <div data-aos="fade-left" className="flex flex-col gap-5">
                <p className="head-title">درباره ما بدانیـد</p>
                <p className="title">ما عاشـق حیـوانات شـیـریـن شما هسـتیم</p>
                <p className="title-desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز می باشد.</p>
                {/* check box */}
                <div className="grid grid-cols-1 4xs:grid-cols-2 gap-7">
                    <AboutUsCheckBox title={"نیروهای متخصص"}/>
                    <AboutUsCheckBox title={"نگهداری 24 ساعته"}/>
                    <AboutUsCheckBox title={"بهترین دامپزشکان"}/>
                    <AboutUsCheckBox title={"غذاهای با کیفیت"}/>
                </div>
            </div>
            {/* left side backGround Image image */}
            <div data-aos="fade-right" className="bg-[url(/images/main-page-pic-3.png)] bg-cover">
                <div className="bg-[url(/images/main-page-pic-2.png)] bg-bottom bg-cover relative">
                    <img src="/images/main-page-pic-1-1.png" alt="main-page-pic-1-1" />
                    <img className="heart-img absolute top-0 animate__animated animate__heartBeat animate__slow animate__infinite" src="/images/secend-con-element.png" alt="secend-con-element" />
                </div>
            </div>
        </div>
    );
}