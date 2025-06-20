export default function IntroducingProducts() {
    return (
        <div className="container my-10 shadow-primary">
            <div className="p-3 flex justify-between items-center">
            <div>
                <p className="font-MorabbaHeavy text-4xl">بـهـتـرین مـحـصـولات در <span className="text-primary mr-2">پـیـلـسـوک</span></p>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای تکنولوژی است.</p>
            </div>
            <div className="relative">
                <img className="absolute" src="/images/cat-bg.jpg" alt="cat-bg" />
            </div>
        </div>
        </div>
    );
}