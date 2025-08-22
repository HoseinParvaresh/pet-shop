import { BiSolidQuoteAltRight } from "react-icons/bi";

export default function CustomerComment({ id, userProfileSrc, petProfileSrc, name, petName, rate, desc }) {

    return (
        <div className="flex gap-4 md:gap-7 select-none">
            {/* right => user profile / pet profile / Quote icon */}
            <div className="relative min-w-23 md:min-w-45">
                <img className="max-w-20 md:max-w-35 max-h-20 md:max-h-35 rounded-full" src={userProfileSrc} alt="profile" />
                <img className="max-w-10 md:max-w-20 max-h-10 md:max-h-20 rounded-full absolute left-0 top-12 md:top-20 border-4 border-white" src={petProfileSrc} alt="pet" />
                <BiSolidQuoteAltRight className="size-8 md:size-15 absolute -top-2 -right-2 text-dark-primary" />
            </div>
            {/* left => name / pet name / desc / rate(start) */}
            <div className="flex flex-col gap-3">
                {/* name / pet name */}
                <div>
                    <p className="text-base md:text-lg text-dark-primary font-danaBold line-clamp-1"> {name} </p>
                    <p className="text-primary mt-1 text-sm md:text-[15px] line-clamp-1"> نام پت : {petName} </p>
                </div>
                {/* desc */}
                <p className="text-dark-secondary text-xs/5 md:text-sm/7 line-clamp-3">” {desc} “</p>
                {/* rate */}
                <div className="*:size-3 md:*:size-4 flex">
                    {Array(rate).fill(undefined).map((item, index) => (
                        <svg key={index} className="text-yellow-500"><use href="#star-fill"></use></svg>
                    ))}
                    {Array(5 - rate).fill(undefined).map((item, index) => (
                        <svg key={index} className="text-gray-400"><use href="#star-fill"></use></svg>
                    ))}

                </div>
            </div>
        </div>
    );
}