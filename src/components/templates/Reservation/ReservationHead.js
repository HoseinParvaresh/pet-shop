export default function ReservationHead() {
    return (
        <div className="h-30 bg-primary flex items-center justify-around w-full relative mb-30 overflow-hidden bg__footer">
            {/* right */}
            <div className="z-10">
                <p className="font-MorabbaBold text-4xl text-dark-primary">رزرو نوبت</p>
            </div>
            {/* left */}
            <div>
                <img className="w-70" src="/images/cat-2.png" alt="cat" />
            </div>
        </div>
    );
}