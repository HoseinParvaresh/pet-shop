import OurServicesCard from "./OurServicesCard";
export default function OurServices() {
    return (
        <>
        <div className="mt-10 2xs:mt-30 bg-secondary py-15 px-27.5 flex-center flex-col text-center gap-3">
            <p className="head-title">خـدمات ما</p>
            <p className="title max-w-110">خدماتـی که مارا متمایـز میـکنـد</p>
            <p className="title-desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه می باشد.</p>
            <div className="grid grid-cols-3 gap-15">
                <OurServicesCard/>
                <OurServicesCard/>
                <OurServicesCard/>
            </div>
        </div>
        
        </>
    );
}