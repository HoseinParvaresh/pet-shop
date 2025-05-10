import Product from "@/components/modules/Product/Product";
import ShowMoreButton from "./ShowMoreButton";
import ProductSort from "./ProductSort";

export default function Content() {

    return (
        <section className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
            {/* <!-- product Sort => desktop size --> */}
            <ProductSort/>
            {/* <!-- product List --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
                <Product/>
                <Product/>
                <Product/>
            </div>
            {/* <!-- Show more Button --> */}
            <ShowMoreButton/>
        </section>
    );
}