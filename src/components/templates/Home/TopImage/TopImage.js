import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link';
import TopImageCard from './TopImageCard';

export default function TopImage() {


    return (
        <div className="bg-[url(/images/slider1-bg.jpg)] bg-center h-137 my-10 rounded-2xl px-5 lg:px-7 flex flex-col"> 
            {/* title */}
            <p className="head-title animate__animated animate__fadeInRight mt-40 mb-3 text-sm xs:text-base"> به پیلیسوک خوش آمدید </p>
            {/* type writer */}
            <div className="text-white text-3xl xs:text-4xl/14 md:text-5xl/16 mt-3 md:mt-auto font-MorabbaBold max-w-170 animate__animated animate__slideInRight *:block *:h-[90px]">
                <Typewriter
                words={['بهترین ها برای کوچولوهای دوست داشتنی شما']}
                typeSpeed={120} />
                
            </div>
            {/* button */}
            <Link href={'/'} className='btn btn-primary mt-15 xs:mt-15 animate__animated animate__fadeInUp'> 
                <span>درباره پیلیسوک</span>
                <img className="size-5" src="/images/pawprint-svgrepo-com.png" alt="image" />
            </Link>
            {/* svg (vectors) */}
            <div className='w-full h-full relative'>
                <img className='top-image__vector--1 hidden 2xs:block absolute left-20 -bottom-10  animate__animated animate__pulse animate__infinite' src="/images/slider-img-vector-1.png" alt="1" />
                <img className='top-image__vector--2 absolute left-100 bottom-70 animate__animated animate__headShake animate__infinite' src="/images/slider-img-vector-2.png" alt="2" />
                <img className='top-image__vector--3 absolute left-20 bottom-60 animate__animated  animate__swing animate__infinite' src="/images/slider-img-vector-4.png" alt="4" />
            </div>
            {/* cards */}
            <div className='flex flex-col md:flex-row w-full md:w-auto items-center gap-5 xl:gap-10 self-center mt-45 xs:mt-45 md:mt-25'>
                <TopImageCard title={"خانه حیوانات"} desc={"فروش انواع خانه و باکس نگهداری حیوانات با بالاترین کیفیت"} src={"/images/pet-home.png"}/>
                <TopImageCard title={"سلامت حیوانات"} desc={"فروش انواع لوازم و ادوات سلامت و رشد و ایمنی حیوانات"} src={"/images/pet-h.png"}/>
                <TopImageCard title={"مراقبت حیوانات"} desc={"فروش انواع وسایل آرایش و آراستن و مراقبتی حیوانات"} src={"/images/pet-s.png"}/>
            </div>
        </div>
    );
}