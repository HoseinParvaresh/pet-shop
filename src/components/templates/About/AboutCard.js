import * as motion from "motion/react-client"

export default function AboutCard({petName,service,image}) {
    return (
        <div className="relative max-w-max">
            {/* top image */}
            <img className="absolute -top-10 rotate-8" src="/images/about-img1.png" alt="about" />
            {/* image */}
            {/* <img className="w-80 rounded-full border-4 border-gray-400 border-dashed p-2" src="/images/a1.jpg" alt="a1" /> */}
            <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                src={`/images/${image}`}
                className="w-80 rounded-full border-4 border-gray-400 border-dashed p-2"
            />
            {/* name */}
            <div className="text-center mt-7">
                <p className="text-2xl font-danaBold text-dark-primary">{petName}</p>
                <p className="mt-3 text-dark-secondary">{service}</p>
            </div>
        </div>
    );
}