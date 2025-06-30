import * as motion from "motion/react-client"
export default function PageHead({ title, image }) {

    return (
        <div className="h-20 md:h-30 bg-primary flex items-center justify-around w-full relative mb-20 overflow-hidden bg__footer">
            <div className="z-10">
                <p className="font-MorabbaBold text-2xl md:text-4xl text-dark-primary">{title} </p>
            </div>
            <div>
                <motion.img
                    drag
                    dragDirectionLock
                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
                    dragElastic={0.2}
                    whileDrag={{ cursor: "grabbing" }}
                    src={`/images/${image}`}
                    className="w-40 md:w-60"
                />
            </div>
        </div>
    );
}