export default function PageHead({title,image}) {
    return (
        <div className="h-30 bg-primary flex items-center justify-around w-full relative mb-20 overflow-hidden bg__footer">
            <div className="z-10">
                <p className="font-MorabbaBold text-4xl text-dark-primary">{title} </p>
            </div>
            <div>
                <img className="w-70" src={`/images/${image}`} alt={image} />
            </div>
        </div>
    );
}