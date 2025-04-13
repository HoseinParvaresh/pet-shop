import { ParallaxBanner } from 'react-scroll-parallax';
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link';
import TopImageCard from './TopImageCard';


export default function TopImage() {


    return (
        <div className=' relative flex flex-col items-center'>
            <ParallaxBanner layers={[
                { image: '/images/cat.png', speed: -20 },
                {
                    speed: -15,
                    children:(
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-white text-3xl xs:text-4xl/14 md:text-5xl/16 font-MorabbaBold max-w-160 text-center">
                            <Typewriter
                                words={['بهترین ها برای کوچولوهای دوست داشتنی شما']}
                                typeSpeed={120} />
                            </p>
                        </div>
                    ),
                },
            ]}  
                className="h-135 my-10 rounded-2xl px-5 lg:px-7 flex flex-col">
                {/* title */}
                {/* <p className="head-title animate__animated animate__fadeInRight mt-40 mb-3 text-sm xs:text-base"> به پیلیسوک خوش آمدید </p> */}

                {/* button */}
                {/* <Link href={'/'} className='btn btn-primary mt-15 xs:mt-15 animate__animated animate__fadeInUp'> 
                    <span>درباره پیلیسوک</span>
                    <img className="size-5" src="/images/pawprint-svgrepo-com.png" alt="image" />
                </Link> */}

                {/* svg (vectors) */}
                <div className='w-full h-full relative'>
                    <img className='top-image__vector--1 hidden 2xs:block absolute left-20 bottom-20  animate__animated animate__pulse animate__infinite' src="/images/slider-img-vector-1.png" alt="1" />
                    <img className='top-image__vector--2 absolute left-100 top-35 animate__animated animate__headShake animate__infinite' src="/images/slider-img-vector-2.png" alt="2" />
                    <img className='top-image__vector--3 absolute left-20 top-25 animate__animated  animate__swing animate__infinite' src="/images/slider-img-vector-4.png" alt="4" />
                </div>
                {/* cards */}
            </ParallaxBanner>
            <div className='flex flex-col md:flex-row absolute w-full md:w-auto items-center gap-7 top-full md:top-[87%] px-5'>
                <TopImageCard title={"خانه حیوانات"} desc={"فروش انواع خانه و باکس نگهداری حیوانات با بالاترین کیفیت"} src={"/images/pet-home.png"}/>
                <TopImageCard title={"سلامت حیوانات"} desc={"فروش انواع لوازم و ادوات سلامت و رشد و ایمنی حیوانات"} src={"/images/pet-h.png"}/>
                <TopImageCard title={"مراقبت حیوانات"} desc={"فروش انواع وسایل آرایش و آراستن و مراقبتی حیوانات"} src={"/images/pet-s.png"}/>
            </div>
        </div>
    );
}