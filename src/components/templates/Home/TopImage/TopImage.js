import { Typewriter } from 'react-simple-typewriter'
import 'animate.css';
import Link from 'next/link';

export default function TopImage() {


    return (
        <div className="bg-[url(/images/slider1-bg.jpg)] bg-center h-137 mt-10 rounded-2xl relative px-7"> 
        {/* title */}
            <p className="head-title absolute top-1/3 animate__animated animate__fadeInRight"> به پیلیسوک خوش آمدید </p>
            {/* type writer */}
            <div className="absolute top-3/7 text-white text-5xl/16 font-MorabbaBold w-140 animate__animated animate__slideInRight">
                <Typewriter
                words={['بهترین ها برای کوچولوهای دوست داشتنی شما', 'ما عاشـق حیـوانات شـیـریـن شما هسـتیم','همه چیز برای همه حیوانات شما!']} 
                loop={0}
                deleteSpeed={20} />
            </div>
            {/* button */}
            <Link className='btn btn-primary top-5/7 absolute animate__animated animate__fadeInUp' href={'/'}> 
                <span>درباره پیلیسوک</span>
                <img className="size-5" src="/images/paw-header.png" alt="image" />
            </Link>
        </div>
    );
}