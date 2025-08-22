import { useInView } from "react-intersection-observer";

export default function SectionHeader({subTitle,Title,desc}) {

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className="flex-center flex-col text-center gap-3">
            <div ref={ref}>
                {
                    inView &&
                    <p className="head-title animate__animated animate__bounceInDown animate__delay-1s">{subTitle}</p>
                }
            </div>
            <p data-aos="fade-down" className="title max-w-110">{Title}</p>
            <p data-aos="fade-down" className="title-desc">
                {desc}
            </p>
        </div>
    );
}