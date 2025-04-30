import { BiSolidQuoteAltRight } from "react-icons/bi";

export default function CustomerComment({userProfileSrc,petProfileSrc,name,petName,rate,desc}) {

    return (
        <div className="flex gap-7 select-none">
            <div className="relative min-w-45 ">
                <img className="max-w-35 max-h-35 rounded-full" src={userProfileSrc} alt="profile" />
                <img className="max-w-20 max-h-20 rounded-full absolute left-0 top-20 border-4 border-white" src={petProfileSrc} alt="pet" />
                <BiSolidQuoteAltRight className="size-15 absolute -top-5 -right-5 text-dark-primary" />
            </div>
            <div className="flex flex-col gap-3">
                <div>
                    <p className="text-lg text-dark-primary font-danaBold"> {name} </p>
                    <p className="text-primary mt-1 text-[15px]"> نام پت : {petName} </p>
                </div>
                <p className="text-dark-secondary text-sm/7">” {desc} “</p>
                <div className="*:size-4 flex">
                    {Array(rate).fill(undefined).map(()=> (
                        <svg className="text-yellow-500"><use href="#star-fill"></use></svg>
                    ))}
                    {Array(5-rate).fill(undefined).map(()=> (
                        <svg className="text-gray-400"><use href="#star-fill"></use></svg>
                    ))}

                </div>
            </div>
        </div>
    );
}