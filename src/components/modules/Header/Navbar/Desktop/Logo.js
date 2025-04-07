import Image from "next/image";

export default function Logo() {
    return (
        <a href="/" className="flex-center gap-2">
            <Image
                src="/images/logo.png"
                width={50}
                height={90}
                alt="logo"
                />
            <div className="font-MorabbaBold">
                <p className="text-dark-primary text-2xl mb-2"> سایت <span className="text-primary">پیلیسوک</span></p>  
                <p className="text-dark-secondary/70 text-xs">دوســت دار حــیـــوانــات خـانـگـی</p>
            </div>  
        </a>
    );
}