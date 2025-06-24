import Link from "next/link";
import { MdOutlinePets } from "react-icons/md";
import { ParallaxBanner } from "react-scroll-parallax";
import { animate, motion, useMotionValue, useTransform, useScroll } from "motion/react"
import { useEffect, useState } from "react"

export default function TrustUs() {

    const customerCount = useMotionValue(0)
    const yearCount = useMotionValue(0)
    const teamCount = useMotionValue(0)
    const animalCount = useMotionValue(0)

    const getCustomer = useTransform(() => Math.round(customerCount.get()))
    const getYear = useTransform(() => Math.round(yearCount.get()))
    const getTeam = useTransform(() => Math.round(teamCount.get()))
    const getAnimal = useTransform(() => Math.round(animalCount.get()))

    const cards = [
        { id: 1, var: getCustomer, title: "مشتری راضی" },
        { id: 2, var: getYear, title: "سال سابقه" },
        { id: 3, var: getTeam, title: "اعضای تیم" },
        { id: 4, var: getAnimal, title: "حیوان خوشحال" },
    ]

    const countUp = (count, num) => {
        const controls = animate(count, num, { duration: 4 })
        return () => {
            controls.stop();
        }
    }
    useEffect(() => {
        let flag = true
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 1530 && flag) {
                flag = false
                countUp(customerCount, 50)
                countUp(yearCount, 3)
                countUp(teamCount, 5)
                countUp(animalCount, 250)
            }
        })
    }, [])

    return (
        <ParallaxBanner layers={[
            { image: '/images/bg-trustUs.png', speed: -20 },
            {
                speed: -15,
                children: (

                    <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 absolute inset-0 items-center justify-center">
                        {/* right */}
                        <div className="self-end md:self-auto">
                            <p className="title text-white max-w-full md:max-w-[427px]">دلایـلی کـه میـتوانیـد به مجموعه ما اعتـماد کنیـد</p>
                            <p className="title-desc text-white max-w-full md:max-w-[450px] mt-3 md:mt-5 line-clamp-2 md:line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی است.</p>
                            {/* button */}
                            <Link href={'/'} className='btn btn-primary--light mt-5'>
                                <span>درباره پیلیسوک</span>
                                <MdOutlinePets className="size-4" />
                            </Link>
                        </div>

                        {/* left => count card */}
                        <div className="grid grid-cols-2 gap-5 self-start md:self-auto">
                            {
                                cards.map((card) => (
                                    <div key={card.id} className="trust-us__box">
                                        <div className="trust-us__box--num flex-center gap-0.5">
                                            <motion.pre className="trust-us__box--num">{card.var}</motion.pre>
                                            <span className="text-3xl">+</span>
                                        </div>
                                        <span className="trust-us__box--title">{card.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                ),
            },
        ]} className="h-150 md:h-120">
        </ParallaxBanner>
    );
}