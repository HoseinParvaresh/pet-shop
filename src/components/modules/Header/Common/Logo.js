import Image from "next/image";

export default function Logo() {
    return (
        <a href="/" className="flex-center gap-2">
            <Image
                src="/images/logo.png"
                width={50}
                height={90}
                alt="logo"
                className="hidden lg:block"
                />
            <div className="font-MorabbaBold">
                <p className="text-white lg:text-dark-primary text-2xl 3xs:mb-2 text-center"> <span className="hidden 2xs:inline">سایت </span><span className="text-primary">پیلیسوک</span></p>  
                <p className="text-white/70 lg:text-dark-secondary/70 text-xs hidden 3xs:block">دوســت دار حــیـــوانــات خـانـگـی</p>
            </div>  
        </a>
    );
}