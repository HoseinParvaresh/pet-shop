import OurAdvantagesCheckBox from "./OurAdvantagesCheckBox";

export default function OurAdvantages() {
    return (
        <div className="container flex flex-col lg:flex-row gap-5 items-center mt-90 2xs:mt-80 md:mt-30">
            {/* right side => head title - title - desc check box */}
            <div data-aos="fade-left" className="flex flex-col gap-5">
                <p className="head-title"> مـزیـت هـای مـا </p>
                <p className="title"> چرا فروشگاه پیلیسوک؟! </p>
                <p className="title-desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز می باشد.</p>
                {/* check box */}
                <div className="grid grid-cols-1 4xs:grid-cols-2 gap-7">
                    <OurAdvantagesCheckBox title={"نیروهای متخصص"}/>
                    <OurAdvantagesCheckBox title={"نگهداری 24 ساعته"}/>
                    <OurAdvantagesCheckBox title={"بهترین دامپزشکان"}/>
                    <OurAdvantagesCheckBox title={"غذاهای با کیفیت"}/>
                </div>
            </div>
            {/* left side backGround Image image */}
            <div data-aos="fade-up" className="bg__our-advantages--first">
                <div className="bg__our-advantages--second relative">
                    {/* <img className=" absolute top-0 -z-10" src="/images/dog-about.png" alt="dog-about" /> */}
                    <img src="/images/main-page-pic-1-1.png" alt="main-page-pic-1-1" />
                    <img className="heart-img absolute top-0 animate__animated animate__heartBeat animate__slow animate__infinite" src="/images/secend-con-element.png" alt="secend-con-element" />
                </div>
            </div>
        </div>
    );
}