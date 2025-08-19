import { ParallaxBanner } from 'react-scroll-parallax';
import { Typewriter } from 'react-simple-typewriter'
import TopImageCard from './TopImageCard';
export default function TopImage() {

    const topImageItems = [
        { id: 1, title: "خانه حیوانات", desc: "فروش انواع خانه و باکس نگهداری حیوانات با بالاترین کیفیت", image: "/images/pet-home.png" },
        { id: 2, title: "سلامت حیوانات", desc: "فروش انواع لوازم و ادوات سلامت و رشد و ایمنی حیوانات", image: "/images/pet-h.png" },
        { id: 3, title: "مراقبت حیوانات", desc: "فروش انواع وسایل آرایش و آراستن و مراقبتی از حیوانات با بهترین کیفیت", image: "/images/pet-s.png" },
    ]

    return (
        <div className='container relative flex flex-col items-center'>
            <ParallaxBanner layers={[
                { image: '/images/cat.png', speed: -20 },
                {
                    speed: -15,
                    children: (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="animate__animated animate__fadeInUp text-white text-3xl/10 xs:text-4xl/14 md:text-5xl/16 font-MorabbaBold max-w-160 text-center px-2">
                                <Typewriter
                                    words={['بهترین ها برای کوچولوهای دوست داشتنی شما']}
                                    typeSpeed={120} />
                            </p>
                        </div>
                    ),
                },
            ]}
                className="h-135 my-10 rounded-2xl px-5 lg:px-7 flex flex-col">
                {/* svg (vectors) */}
                <div className='w-full h-full relative'>
                    <img className='top-image__vector--1 hidden 2xs:block absolute left-20 bottom-20  animate__animated animate__pulse animate__infinite' src="/images/slider-img-vector-1.png" alt="1" />
                    <img className='top-image__vector--2 absolute left-100 top-35 animate__animated animate__headShake animate__infinite' src="/images/slider-img-vector-2.png" alt="2" />
                    <img className='top-image__vector--3 absolute left-20 top-25 animate__animated  animate__swing animate__infinite' src="/images/slider-img-vector-4.png" alt="4" />
                </div>
                {/* cards */}
            </ParallaxBanner>
            <div className='flex items-center justify-center flex-col md:flex-row gap-3 2xl:gap-6 w-full md:absolute md:top-[87%] '>
                {
                    topImageItems.map((item) => (
                        <TopImageCard key={item.id} {...item} />
                    ))
                }
            </div>
        </div>
    );
}