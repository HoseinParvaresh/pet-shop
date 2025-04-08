import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link';
import TopImageCard from './TopImageCard';

export default function TopImage() {


    return (
        <div className="bg-[url(/images/slider1-bg.jpg)] bg-center h-137 my-10 rounded-2xl px-7 flex flex-col"> 
            {/* title */}
            <p className="head-title animate__animated animate__fadeInRight mt-40 mb-3"> به پیلیسوک خوش آمدید </p>
            {/* type writer */}
            <div className="text-white text-5xl/16 font-MorabbaBold w-140 animate__animated animate__slideInRight *:block *:h-[90px]">
                <Typewriter
                words={['ما عاشـق حیـوانات شـیـریـن شما هسـتیم','همه چیز برای همه حیوانات شما!','بهترین ها برای کوچولوهای دوست داشتنی شما']} />
                
            </div>
            {/* button */}
            <Link href={'/'} className='btn btn-primary mt-15 animate__animated animate__fadeInUp'> 
                <span>درباره پیلیسوک</span>
                <img className="size-5" src="/images/pawprint-svgrepo-com.png" alt="image" />
            </Link>
            {/* svg (vectors) */}
            {/* <div className='w-full h-full relative'>
                <img className='top-image__vector--1 absolute left-20 top-80  animate__animated animate__pulse animate__infinite' src="/images/slider-img-vector-1.png" alt="1" />
                <img className='top-image__vector--2 absolute left-100 top-20 animate__animated animate__headShake animate__infinite' src="/images/slider-img-vector-2.png" alt="2" />
                <img className='top-image__vector--3 absolute left-20 top-15 animate__animated  animate__swing animate__infinite' src="/images/slider-img-vector-4.png" alt="4" />
            </div> */}
            {/* cards */}
            <div className='flex items-center gap-10 self-center mt-25'>
                <TopImageCard title={"خانه حیوانات"} desc={"فروش انواع خانه و باکس نگهداری حیوانات با بالاترین کیفیت"} src={"/images/pet-home.png"}/>
                <TopImageCard title={"سلامت حیوانات"} desc={"فروش انواع لوازم و ادوات سلامت و رشد و ایمنی حیوانات"} src={"/images/pet-h.png"}/>
                <TopImageCard title={"مراقبت حیوانات"} desc={"فروش انواع وسایل آرایش و آراستن و مراقبتی حیوانات"} src={"/images/pet-s.png"}/>
            </div>
        </div>
    );
}