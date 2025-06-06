import Product from "@/components/modules/Product/Product";
import ShowMoreButton from "./ShowMoreButton";
import ProductSort from "./ProductSort";

export default function Content() {

    return (
        <section className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
            {/* <!-- product Sort => desktop size --> */}
            <ProductSort/>
            {/* <!-- product List --> */}
            <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-5">
                <Product price={30000} discount={false} status={true}/>
                <Product price={400000} discount={30} status={true}/>
                <Product price={3123123} discount={10} status={false}/>
            </div>
            {/* <!-- Show more Button --> */}
            <ShowMoreButton/>
        </section>
    );
}